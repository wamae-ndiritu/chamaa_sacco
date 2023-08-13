import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFail,
  logoutUser,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFail,
  getMembersStart,
  getMembersSuccess,
  getMembersFail,
  registerMemberStart,
  registerMemberSuccess,
  registerMemberFail,
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

export const updateProfile = async (id, details, dispatch) => {
  dispatch(updateProfileStart());

  try {
    const { data } = await axios.put(`${URL}/api/members/${id}`, details);
    dispatch(updateProfileSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch(
      updateProfileFail(err.response ? err.response.data.message : err.message)
    );
  }
};

export const listMembers = async (id, dispatch) => {
  dispatch(getMembersStart());
  try {
    const { data } = await axios.get(`${URL}/api/members/?groups=${id}`);
    dispatch(getMembersSuccess(data));
  } catch (err) {
    dispatch(
      getMembersFail(err.response ? err.response.data.message : err.message)
    );
  }
};

export const registerMember = async (details, dispatch) => {
  dispatch(registerMemberStart());
  try {
    const { data } = await axios.post(`${URL}/api/members/register`, details);
    dispatch(registerMemberSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(
      registerMemberFail(err.response ? err.response.data.message : err.message)
    );
  }
};
