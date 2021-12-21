import Task from "../../models/Task";

const ACTIONS = {

  START: "TIMER/START",
  STOP: "TIMER/STOP",
  CONTINUE: "TIMER/CONTINUE",
  PAUSE: "TIMER/PAUSE",
  INTERVAL: "TIMER/INTERVAL",
  SET_TYPE: "TIMER/TYPE",
  FINISH_STEP: "TIMER/FINISH_STEP",

  start: (nodo : Task) => ({
    type: ACTIONS.START,
    payload: { nodo }
  }),

  interval: () => ({
    type: ACTIONS.INTERVAL,
    payload: { }
  }),

  stop: (nodo : Task) => ({
    type: ACTIONS.STOP,
    payload: { nodo }
  }),

  setStateType: (type : string) => ({
    type: ACTIONS.SET_TYPE,
    payload: { type }
  }),

  finishStep: () => ({
    type: ACTIONS.FINISH_STEP,
    payload: { }
  }),

  pause: () => ({
    type: ACTIONS.PAUSE,
    payload: { }
  }),

  continue: () => ({
    type: ACTIONS.CONTINUE,
    payload: { }
  }),
};

export default ACTIONS;