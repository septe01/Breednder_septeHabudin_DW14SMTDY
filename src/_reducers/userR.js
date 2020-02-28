import { appContants } from "../config/AppConstants";

const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case appContants.GET_USER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.GET_USER_FULFILLED:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case appContants.GET_USER_REJECTED:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};

export default users;
