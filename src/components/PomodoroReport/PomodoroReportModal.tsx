// import { PDFViewer, Document, Page } from '@react-pdf/renderer';
import React from 'react';
import Task from '../../models/Task';
import User from '../../models/User';
// import PomodoroReport from './PomodoroReport';

import './PomodoroReportModal.css';

interface ICPomodoroReportModal { 
  user: User;
  tasks: Array<Task>;
}

const PomodoroReportModal = (props : ICPomodoroReportModal) => {
  return (
    <>
      <div className="modal fade" id="PomodoroReportModal" aria-labelledby="PomodoroReportModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="PomodoroReportModalTitle">
                Pomodoro Report
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-12">
                  {/* <PDFViewer
                      width="100%"
                      height="100%"
                      style={{ border: 'none' }}
                  >
                      <PomodoroReport 
                          user={props.user.userName!}
                          tasks={props.tasks}
                          hoursWorked={props.user.secondsWorked.toString()}
                          hoursRested={props.user.secondsRested.toString()}
                      />
                  </PDFViewer> */}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button id="btnClose" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PomodoroReportModal;