import User from "../../models/User";

const ACTIONS = {

  SIGNUP: "USERS/SIGNUP",
  SIGNIN: "USERS/SIGNIN",
  LOGIN: "USERS/LOGIN",
  LOGOUT: "USERS/LOGOUT",
  
  CREATE: "USERS/CREATE",

  SUCCESS: "USERS/SUCCESS",
  ERROR: "USERS/ERROR",

  signup: (nodo : User) => ({
    type: ACTIONS.SIGNUP,
    payload: { nodo }
  }),
  signin: (nodo : User) => ({
    type: ACTIONS.SIGNIN,
    payload: { nodo }
  }),
  login: (nodo : User) => ({
    type: ACTIONS.LOGIN,
    payload: { nodo }
  }),
  create: (nodo : User) => ({
    type: ACTIONS.CREATE,
    payload: { nodo }
  }),
  setSuccess: (message: string) => ({
      type: ACTIONS.SUCCESS,
      payload: { message }
  }),
  setError: (message: string) => ({
      type: ACTIONS.ERROR,
      payload: { message }
  }),
};

export default ACTIONS;