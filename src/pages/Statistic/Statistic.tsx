import React from 'react';

import './Statistic.css';

import { useSelector } from 'react-redux';
import { GlobalState } from '../../redux/reducer';

import PageTitle from '../../components/PageTitle/PageTitle';
import Counter from '../../components/Counter/Counter';
import PomodoroReportModal from '../../components/PomodoroReport/PomodoroReportModal';
import PomodoroTask from 'src/components/PomodoroTask/PomodoroTask';

const Statistic = () => {
  
  const auth = useSelector((state : GlobalState) => state.users.authUser);
  const tasks = useSelector((state : GlobalState) => state.tasks.tasks.filter(i => i!.idUser! === auth.id! && !i.active!));

    return (
      <>
        <PomodoroReportModal user={auth} tasks={tasks} />
        <PageTitle title="Statistics" description="Manage your data" icon="" />
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12 text-end">
              <button className="btn btn btn-secondary shadow"
                data-bs-toggle="modal"
                data-bs-target="#PomodoroReportModal"
              >
                <i className="fas fa-file-pdf me-2"></i>
                Export report
              </button>
            </div>
            <div className="col-12">
              <div className="row g-3">
                <div className="col-4">
                  <Counter title={"Worked time"} count={auth.secondsWorked} icon="fas fa-clock" isSecond={true} />
                </div>
                <div className="col-4">
                  <Counter title={"Rested time"} count={auth.secondsRested} icon="fas fa-stopwatch" isSecond={true} />
                </div>
                <div className="col-4">
                  <Counter title={"Finished tasks"} count={tasks.length} icon="fas fa-stream" isSecond={false} />
                </div>
              </div>
            </div>
            <div className="col-12">
            </div>
            <div className="col-12">
              <div className="row g-3">
              {
                tasks.map((item) => {
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

export default Statistic;