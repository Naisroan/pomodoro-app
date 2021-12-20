import React from 'react';
import { useBeforeunload } from 'react-beforeunload';

import './Pomodoro.css';

import { useSelector } from 'react-redux';
import { GlobalState } from '../../redux/reducer';

import PageTitle from '../../components/PageTitle/PageTitle';
import PomodoroTask from '../../components/PomodoroTask/PomodoroTask';
import PomodoroTaskModal from '../../components/PomodoroTask/PomodoroTaskModal';
import PomodoroTimer from '../../components/PomodoroTimer/PomodoroTimer';

const Pomodoro = () => {

  const tasks = useSelector((state : GlobalState) => state.tasks.tasks);

  const taskSort = tasks.sort((task1, task2) => task2.id! - task1.id!);
  const activeTasks = tasks.filter(item => item.active);
  const activeTask = activeTasks.length > 0 ? activeTasks[0] : undefined;
  const isTaskActive = activeTasks.length > 0;

  useBeforeunload((event : any) => {
    if (isTaskActive) {
      event.preventDefault();
    }
  });

  return (
    <>
      <PageTitle title="Pomodoro" description="Manage your tasks" icon="" />
      <PomodoroTaskModal />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-4 col-xl-3">
            <PomodoroTimer activeTask={activeTask} />
          </div>
          <div className="col mt-5 mt-lg-0">
            <div className="row g-3">
              <div className="col-12">
                <button 
                  className="btn btn-secondary shadow"
                  disabled={isTaskActive}
                  data-bs-toggle="modal"
                  data-bs-target="#PomodoroTaskModal"
                >
                  <i className="fas fa-plus me-2"></i>
                  Add task
                </button>
              </div>
              {
                taskSort.map((item) => {
                  return (
                    <div key={item!.id!} className="col-12 col-lg-4">
                      <PomodoroTask key={item!.id!} task={item} />
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pomodoro;