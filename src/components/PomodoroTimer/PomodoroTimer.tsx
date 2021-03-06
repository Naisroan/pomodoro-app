import React, { useState, useEffect } from 'react';

import './PomodoroTimer.css';
import beepAudio from '../../assets/beep.mp3';

import Task from '../../models/Task';

import { useSelector, useDispatch } from 'react-redux';
import TIMER_ACTIONS from '../../redux/timer/actions';
import TASKS_ACTIONS from '../../redux/tasks/actions';
import USERS_ACTIONS from '../../redux/users/actions';
import { GlobalState } from '../../redux/reducer';

interface ICPomodoroTimer {
  activeTask?: Task
}

const PomodoroTimer = (props : ICPomodoroTimer) => {

  const dispatch = useDispatch();

  const auth = useSelector((state : GlobalState) => state.users.authUser);
  const timerState = useSelector((state : GlobalState) => state.timer);

  const [interval, setIntervalObject] = useState<NodeJS.Timer>();

  const beep = new Audio(beepAudio);

  useEffect(() => {
    if (interval && !timerState.isStart && timerState.stateType === 'normal') {

      clearInterval(interval);
      dispatch(TASKS_ACTIONS.desactive(props.activeTask!));

      auth.secondsRested = auth.secondsRested + timerState.secondsRested;
      auth.secondsWorked = auth.secondsWorked + timerState.secondsWorked;
      dispatch(USERS_ACTIONS.updateTimes(auth));

      beep.play();
    }
  }, [timerState]);

  const handleStart = () => {
    dispatch(TIMER_ACTIONS.start(props.activeTask!));
    setIntervalObject(setInterval(() => {
      dispatch(TIMER_ACTIONS.interval());
    }, 1000));
    beep.play();
  };

  const handleFinish = () => {
    dispatch(TIMER_ACTIONS.finishStep());
    beep.play();
  };

  const handlePause = () => {
    if (timerState.interval === 1) {
      dispatch(TIMER_ACTIONS.pause());
    } else {
      dispatch(TIMER_ACTIONS.continue());
    }
    beep.play();
  };

  const formatSeconds = (s : number) => {
    const m = Math.floor(s % 3600 / 60).toString().padStart(2,'0');
    const ss = Math.floor(s % 60).toString().padStart(2,'0');
    return m + ':' + ss;
  }

  return (
    <>
      <div
        id="pomodorotimer"
        className={"card text-white bg-danger shadow " + (timerState.stateType)}
      >
        <div className="card-body text-center">
          <h5 className="card-title time">
            {formatSeconds(timerState.sec)}
          </h5>
          <p className="card-text">
            <span className="badge rounded-pill bg-light text-dark">
              Status: <strong>{timerState.stateType.toLocaleUpperCase()}</strong> 
            </span>
          </p>
          <p className="card-text" hidden={!props.activeTask}>
            <span className="badge rounded-pill bg-dark text-white">
              Task: <strong>{props.activeTask?.title!.toLocaleUpperCase()}</strong> 
            </span>
          </p>
          <div className="card-footer text-white border-0">
            <button
              onClick={handleStart}
              className="btn btn-lg btn-outline-light"
              disabled={props.activeTask ? !props.activeTask!.active! : true }
              hidden={timerState.isStart}
            >
              START
            </button>
            <button
              onClick={handlePause}
              className="btn btn-lg btn-light mx-1" 
              hidden={!timerState.isStart}
            >
              {timerState.interval === 1 ? "PAUSE" : "CONTINUE"}
            </button>
            <button
              onClick={handleFinish}
              className="btn btn-lg btn-warning mx-1" 
              hidden={!timerState.isStart}
            >
              STOP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PomodoroTimer;