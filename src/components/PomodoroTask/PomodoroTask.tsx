import React from 'react';
import Task from '../../models/Task';

import './PomodoroTask.css';

interface ICPomodoroTask {
  task: Task
}

const PomodoroTask = (props : ICPomodoroTask) => {

    return (
      <>
        <div id="pomtask" className={"card text-dark bg-light shadow " + (!props.task.active ? "finished" : "active")}>
          <div className="card-body">
            <h5 className="card-title">
              { props.task.title }              
            </h5>
            <p className="card-text">
              { props.task.description }
            </p>
          </div>
        </div>
      </>
    );
};

export default PomodoroTask;