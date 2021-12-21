import Task from "../../models/Task";
import ACTIONS from "./actions";

// planilla del estado
interface TasksState {
  task: Task;
  tasks: Task[];
  status: StatusType;
}

interface StatusType {
  isLoading?: boolean,
  isError?: boolean,
  msg?: String
}

// estado inicial
const initState : TasksState = {
  task: {
  },
  tasks: [],
  status: {
    isLoading: false,
    isError: false,
    msg: ''
  }
}

// reducer principal
const reducer = (state : TasksState = initState, action : any) : TasksState => {

  const { type, payload } = action;

  switch (type) {

    default: {
      return state;
    }

    case ACTIONS.CREATE: {
      
      const tasks = [...state.tasks];
      const nodo = payload.nodo;
      nodo.id = tasks.length + 1;
      tasks.push(nodo);

      return {
        ...state,
        tasks
      }

    }

    case ACTIONS.DESACTIVE: {
      
      const tasks = [...state.tasks]
      const index = tasks.findIndex((task: Task) => task.id! === payload.nodo.id!);
      tasks[index].active = false;

      return {
        ...state,
        tasks
      }

    }

  }
}

export default reducer;