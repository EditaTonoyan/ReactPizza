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
        ...state,
        successMessage: action.successMessage,
      };
    }
    default:
      return state;
  }
};

export default pizzasListReduser;
