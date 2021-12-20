import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '../../redux/reducer';
import Task from '../../models/Task';
import TASKS_ACTIONS from '../../redux/tasks/actions';

interface ICPomodoroTaskModal {
}

const PomodoroTaskModal = (props? : ICPomodoroTaskModal) => {

  const dispatch = useDispatch();
  const auth = useSelector((state : GlobalState) => state.users.authUser);

  const btnCloseModal = document.getElementById('btnClose')

  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const [titleError, setTitleError] = useState('');
  const [descError, setDescError] = useState('');

  const handleSaveTask = () => {
    const nodo : Task = {
      id: id,
      active: true,
      description: desc,
      title: title,
      idUser: auth.id
    };
    if (!validate(nodo)) {
      return;
    }
    dispatch(
      TASKS_ACTIONS.create(nodo)
    );

    btnCloseModal?.click();

    setTitleError('');
    setDescError('');
    setId(0);
    setTitle('');
    setDesc('');
  };

  const validate = (task : Task) : boolean => {

    let isValid : boolean = true;
    
    setTitleError('');
    setDescError('');

    if (!task.title|| task.title === '') {
      setTitleError('Enter the title');
      isValid = false;
    }
    
    if (!task.description || task.description === '') {
      setDescError('Enter the description');
      isValid = false;
    }

    isValid = !isValid ? false : true;

    return isValid;
  };

  return (
    <>
      <div className="modal fade" id="PomodoroTaskModal" aria-labelledby="PomodoroTaskModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="PomodoroTaskModalTitle">
                { id <= 0 ? "Add new task" : "Edit task - " + title }
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-12">
                  <input
                    type="text"
                    placeholder="task name"
                    className="form-control form-control-lg"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                  ></input>
                  <small className="text-danger" hidden={titleError === ''}>
                    {titleError}
                  </small>
                </div>
                <div className="col-12">
                  <textarea
                    placeholder="task description"
                    className="form-control form-control-lg"
                    value={desc}
                    onChange={(e) => { setDesc(e.target.value) }}
                  ></textarea>
                  <small className="text-danger" hidden={descError === ''}>
                    {descError}
                  </small>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button id="btnClose" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSaveTask}>
                <i className="fas fa-save me-2"></i>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PomodoroTaskModal;