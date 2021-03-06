import { SET_GENERAL_ACCOUNT_INFO } from "../constants";

const initialState = {
  general: {
    name: "",
    email: "",
    password: "",
    password2: "",
    birth:""
  },
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_GENERAL_ACCOUNT_INFO:
      return { ...state, general: { ...action.payload } };

    default:
      return state;
  }
}