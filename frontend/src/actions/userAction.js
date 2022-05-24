import axios from "axios";

import { 
   USER_LOGIN_FAIL,
   USER_LOGIN_REQUEST, 
   USER_LOGIN_SUCCESS, 
   USER_LOGOUT, 
   USER_REGISTER_REQUEST, 
   USER_REGISTER_SUCCESS, 
   USER_REGISTER_FAIL, 
   USER_UPDATE_FAIL,
   USER_UPDATE_REQUEST,
   USER_UPDATE_SUCCESS,
   } from "../constents/userConstents"

export const login = (email, password) => async (dispatch) => {
try {
dispatch({type: USER_LOGIN_REQUEST});

const config = {
    headers: {
    "contetn-type" : "application/json"
    },
  };    
  const {data} = await axios.post(
  "/api/users/login",
  {
  email,
  password,
  },
  config
  );
dispatch({type: USER_LOGIN_SUCCESS, payload: data });

localStorage.setItem("userInfo",JSON.stringify(data));
} catch (error){
dispatch({
    type: USER_LOGIN_FAIL,
     payload:
     error.response && error.response.data.message
    ? error.response.data.message
    : error.message,
    });
}
};
export const logout = () => async(dispatch) => {
localStorage.removeItem("userInfo");
dispatch({type: USER_LOGOUT});
};
export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { username, email, password },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post("/api/users/profile", user, config);

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
