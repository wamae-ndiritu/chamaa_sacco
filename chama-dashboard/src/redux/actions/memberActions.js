import axios from "axios";
import { loginStart, loginSuccess, loginFail } from "../slices/memberSlice";
import { URL } from "../../Url";

export const login = async (details, dispatch) => {
  dispatch(loginStart());

  try {
    const { data } = await axios.post(`${URL}/api/members/login`, details);
    dispatch(loginSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(loginFail(err.response.data.message));
  }
};
