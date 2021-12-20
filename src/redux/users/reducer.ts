import User from "../../models/User";
import ACTIONS from "./actions";

// planilla del estado
interface UsersState {
  authUser: User;
  users: User[];
  status: StatusType;
}

interface StatusType {
  isLoading?: boolean,
  isError?: boolean,
  msg?: String
}

// estado inicial
const initState : UsersState = {
  authUser: {
    email: '',
    id: 0,
    password: '',
    userName: '',
  },
  users: [],
  status: {
    isLoading: false,
    isError: false,
    msg: ''
  }
}

// reducer principal
const reducer = (state : UsersState = initState, action : any) : UsersState => {

  const { type, payload } = action;

  switch (type) {

    default: {
      return state;
    }

    case ACTIONS.CREATE: {
      
      const users = [...state.users];
      const nodo = payload.nodo;
      nodo.id = users.length + 1;
      users.push(nodo);

      return {
        ...state,
        users,
        status: {
          isLoading: true
        }
      }

    }

    case ACTIONS.SIGNUP: {

      return {
        ...state,
        status: {
          isLoading: true,
          isError: false,
          msg: payload.message
        }
      }

    }

    case ACTIONS.SIGNIN: {

      return {
        ...state,
        status: {
          isLoading: true,
          isError: false,
          msg: payload.message
        }
      }

    }

    case ACTIONS.LOGIN: {

      return {
        ...state,
        authUser: payload.nodo
      }

    }

    case ACTIONS.LOGOUT: {

      return initState;

    }

    case ACTIONS.SUCCESS: {

      return {
        ...state,
        status: {
          isLoading: false,
          isError: false,
          msg: payload.message
        }
      }

    }

    case ACTIONS.ERROR: {

      return {
        ...state,
        status: {
          isLoading: false,
          isError: true,
          msg: payload.message
        }
      }

    }

  }
}

export default reducer;