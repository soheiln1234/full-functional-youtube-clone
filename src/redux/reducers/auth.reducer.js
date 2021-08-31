import { LOGIN_REQUEST } from "../actions/auth.action.js";

const initialState = {
  accessToken: null,
  user: null,
  loading: false,
};

const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return { ...prevState, loading: true };
    default: {
    }
  }
};
