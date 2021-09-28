const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  successMessage: "",
  errorMessage: "",
  isLoggedIn: false,
  user: {},
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

    case "SET_USER": {
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
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
        errorMessage: "",
        successMessage: action.successMessage,
      };
    }

    case "LOGOUT": {
      localStorage.removeItem("accessToken");
      return {
        ...initialState,
      };
    }
    case "IS_LOGGED_IN": {
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
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
