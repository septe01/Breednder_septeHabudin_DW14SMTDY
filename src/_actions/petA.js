import axios from "axios";

import { API } from "../config/api";
import { appContants } from "../config/AppConstants";

export const getPets = () => {
  //get all data pet
  return {
    type: appContants.GET_PET,
    payload: axios({
      method: "GET",
      url: `${API.baseURL}/pet`,
      headers: API.headers
    })
  };
};

// export const petDetail = () => {
//   return {
//     type: appContants.GET_PET_DETAIL
//   };
// };
