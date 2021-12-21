// import Task from "../../models/Task";
import ACTIONS from "./actions";

// planilla del estado
interface TimerState {
  stateType: string;
  isStart: boolean;
  sec: number;
  interval: number;
  secondsWorked: number;
  secondsRested: number;
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
  sec: TIEMPOS.NORMAL,
  interval: 1,
  secondsWorked: 0,
  secondsRested: 0
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

      const secWorked = state.stateType === 'normal' ? state.interval : 0;
      const secRested = state.stateType === 'short' || state.stateType === 'long' ? state.interval : 0

      return {
        ...state,
        sec: state.sec - state.interval,
        secondsWorked: state.secondsWorked + secWorked,
        secondsRested: state.secondsRested + secRested
      }
    }

    case ACTIONS.PAUSE: {
      return {
        ...state,
        interval: 0
      }
    }

    case ACTIONS.CONTINUE: {
      return {
        ...state,
        interval: 1
      }
    }

    case ACTIONS.SET_TYPE: {
      
      switch (payload.type) {
        case "normal": {
          return {
            ...state,
            isStart: false,
            stateType: 'normal',
            sec: TIEMPOS.NORMAL,
            interval: 1
          }
        }
        case "short": {
          return {
            ...state,
            stateType: 'short',
            sec: TIEMPOS.SHORT,
            interval: 1
          }
        }
        case "long": {
          return {
            ...state,
            stateType: 'long',
            sec: TIEMPOS.LONG,
            interval: 1
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