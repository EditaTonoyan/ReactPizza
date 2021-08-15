const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  successMessage: "",
  errorMessage: "",
};
const pizzasListReduser = (state = initialState, action) => {
  switch (action.type) {
    case "ON_CHANGE": {
      const { name, value } = action.target;

      return {
        ...state,
        [name]: value,
      };
    }

    case "ERROR_MESSAGE": {
      console.log(state.errorMessage);
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
