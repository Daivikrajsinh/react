// src/redux/thunks/authThunks.js
export const signup = (userData) => async (dispatch) => {
    try {
      // Your signup logic here
      const response = await api.signup(userData);
      dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
      return true;
    } catch (error) {
      dispatch({ type: 'SIGNUP_FAILURE', payload: error.message });
      return false;
    }
  };
  
  export const login = (credentials) => async (dispatch) => {
    try {
      // Your login logic here
      const response = await api.login(credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      return true;
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
      return false;
    }
  };