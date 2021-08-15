import axios from "axios";
import authHeader from "../helpers/authHeader";

export const getAllPizzas = (data) => (dispatch) => {
  axios
    .get("https://pizza-dummy.herokuapp.com/pizzas/")
    .then((res) => {
      if (res.error) throw res.error;
      data = res.data;
      dispatch({ type: "getPizzas", data });
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const register = (firstName, lastName, email, password, history) => (dispatch) => {
  axios
    .post("https://pizza-dummy.herokuapp.com/auth/registration/", {
      email,
      firstName,
      lastName,
      password,
    })
    .then(() => {
      dispatch({
        type: "SUCCESS_MESSAGE",
        successMessage: "Congratulations, your account has been successfully created!",
      });
      setTimeout(() => {
        history.push("/login");
        dispatch({
          type: "SUCCESS_MESSAGE",
          successMessage: "",
        });
      }, 2000);
    })
    .catch(() => {
      dispatch({
        type: "ERROR_MESSAGE",
        errorMessage: "This email already registered or not valid",
      });
      setTimeout(() => {
        dispatch({
          type: "ERROR_MESSAGE",
          errorMessage: "",
        });
      }, 3000);
    });
};

export const login = (email, password, history) => (dispatch) => {
  axios
    .post("https://pizza-dummy.herokuapp.com/auth/login/", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("pizUser", JSON.stringify(response.data));
      }
      dispatch({
        type: "SUCCESS_MESSAGE",
        successMessage: "Success!",
      });
      setTimeout(() => {
        history.push("/");
      }, 1000);

      return response.data;
    })
    .catch(() => {
      dispatch({
        type: "ERROR_MESSAGE",
        errorMessage: "Wrong  login/password combination",
      });
      setTimeout(() => {
        dispatch({
          type: "ERROR_MESSAGE",
          errorMessage: "",
        });
      }, 3000);
    });
};

export const order = (ordered) => (dispatch) => {
  axios.defaults.headers.common["Authorization"] = authHeader();
  axios
    .post("https://pizza-dummy.herokuapp.com/place_order/", {
      ordered_pizzas: ordered,
    })
    .then(
      (response) => {},
      (error) => {
        console.log("error->", error.message);

        return Promise.reject();
      }
    );
};
