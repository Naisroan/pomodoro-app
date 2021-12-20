import Task from "../../models/Task";

const ACTIONS = {

  CREATE: "TASKS/CREATE",
  DESACTIVE: "TASKS/DESACTIVE",

  create: (nodo : Task) => ({
    type: ACTIONS.CREATE,
    payload: { nodo }
  }),

  desactive: (nodo : Task) => ({
    type: ACTIONS.DESACTIVE,
    payload: { nodo }
  }),
};

export default ACTIONS;