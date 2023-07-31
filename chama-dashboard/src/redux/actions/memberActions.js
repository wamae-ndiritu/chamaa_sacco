import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFail,
  logoutUser,
} from "../slices/memberSlice";
import { URL } from "../../Url";

export const login = async (details, dispatch) => {
  dispatch(loginStart());

  try {
    const { data } = await axios.post(`${URL}/api/members/login`, details);
    dispatch(loginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch(loginFail(err.response ? err.response.data.message : err.message));
  }
};

export const logout = (dispatch) => {
  dispatch(logoutUser());
  localStorage.removeItem("userInfo");
};
