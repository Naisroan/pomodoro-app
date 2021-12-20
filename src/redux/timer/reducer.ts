import Task from "../../models/Task";
import ACTIONS from "./actions";

// planilla del estado
interface TimerState {
  stateType: string;
  isStart: boolean;
  sec: number;
}

export const TIEMPOS = {
  NORMAL: 1500,
  SHORT: 300,
  LONG: 1800
};

// estado inicial
const initState : TimerState = {
  stateType: 'normal',
  isStart: false,
  sec: TIEMPOS.NORMAL
}

// reducer principal
const reducer = (state : TimerState = initState, action : any) : TimerState => {

  const { type, payload } = action;

  switch (type) {

    default: {
      return state;
    }

    case ACTIONS.START: {
      return {
        ...state,
        stateType: 'normal',
        sec: TIEMPOS.NORMAL,
        isStart: true
      }
    }

    case ACTIONS.STOP: {
      return {
        ...state,
        sec: TIEMPOS.NORMAL,
        isStart: false
      }
    }

    case ACTIONS.INTERVAL: {
      return {
        ...state,
        sec: state.sec - 1
      }
    }

    case ACTIONS.SET_TYPE: {
      
      switch (payload.type) {
        case "normal": {
          return {
            ...state,
            isStart: false,
            stateType: 'normal',
            sec: TIEMPOS.NORMAL
          }
        }
        case "short": {
          return {
            ...state,
            stateType: 'short',
            sec: TIEMPOS.SHORT
          }
        }
        case "long": {
          return {
            ...state,
            stateType: 'long',
            sec: TIEMPOS.LONG
          }
        }
      }

      return {
        ...state
      }
    }

  }
}

export default reducer;