import { appContants } from "../config/AppConstants";

const initialState = {
  indexPet: [],
  pets: [],
  isLoading: false,
  isError: false
};

const pet = (state = initialState, action) => {
  switch (action.type) {
    case appContants.GET_PET_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.GET_PET_FULFILLED:
      state.pets.push(action.payload);
      return {
        ...state,
        indexPet: action.payload,
        isLoading: false
      };
    case appContants.GET_PET_REJECTED:
      return {
        indexPet: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default pet;
