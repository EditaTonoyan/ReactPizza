const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  successMessage: "",
  errorMessage: "",
  isLoggedIn: false,
};
const pizzasListReduser = (state = initialState, action) => {
  switch (action.type) {
    case "ONCHANGE": {
      const { name, value } = action;
      return {
        ...state,
        [name]: value,
      };
    }

    case "ERROR_MESSAGE": {
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    }

    case "SUCCESS_MESSAGE": {
      return {
        ...state,
        successMessage: action.successMessage,
      };
    }

    case "LOGOUT": {
      localStorage.removeItem("pizUser");
      return {
        ...initialState,
      };
    }
    case "IS_LOGGED_IN": {
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    }
    case "RESET_DATA": {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};

export default pizzasListReduser;
