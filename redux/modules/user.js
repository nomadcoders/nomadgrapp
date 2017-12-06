// Imports

import { API_URL } from "../../constants";
import { AsyncStorage } from "react-native";

// Actions

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

// Action Creators

function setLogIn(token) {
  return {
    type: LOG_IN,
    token
  };
}

function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}

function logOut() {
  return { type: LOG_OUT };
}

// API Actions
function login(username, password) {
  return dispatch => {
    return fetch(`${API_URL}/rest-auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.user && json.token) {
          dispatch(setLogIn(json.token));
          dispatch(setUser(json.user));
          return true;
        } else {
          return false;
        }
      });
  };
}

// Initial State

const initialState = {
  isLoggedIn: false
};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return applyLogIn(state, action);
    case LOG_OUT:
      return applyLogOut(state, action);
    case SET_USER:
      return applySetUser(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applyLogIn(state, action) {
  const { token } = action;
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

function applyLogOut(state, action) {
  AsyncStorage.clear();
  return {
    ...state,
    isLoggedIn: false,
    token: ""
  };
}

function applySetUser(state, action) {
  const { user } = action;
  return {
    ...state,
    profile: user
  };
}

// Exports

const actionCreators = {
  login
};

export { actionCreators };
// Default Reducer Export

export default reducer;
