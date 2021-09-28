import authHeader from "../helpers/authHeader";
import { axiosInstance } from "helpers/api";

export const getAllPizzas = (data) => (dispatch) => {
  axiosInstance
    .get("/pizzas/")
    .then((res) => {
      if (res.error) throw res.error;
      data = res.data;
      dispatch({ type: "getPizzas", data });
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const register =
  ({ firstName, lastName, email, password, history }) =>
  (dispatch) => {
    axiosInstance
      .post("/auth/registration/", {
        email,
        firstName,
        lastName,
        password,
      })
      .then((data) => {
        dispatch({
          type: "SUCCESS_MESSAGE",
          successMessage: "Congratulations, your account has been successfully created!",
        });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR_MESSAGE",
          errorMessage: "This email already registered or not valid",
        });
      });
  };

export const setUser = () => (dispatch) => {
  axiosInstance.defaults.headers.common["Authorization"] = authHeader();
  axiosInstance.get("/auth/user/").then((res) => {
    dispatch({ type: "SET_USER", user: res.data, isLoggedIn: true });
  });
};

export const login =
  ({ email, password }) =>
  (dispatch) => {
    axiosInstance
      .post("/auth/login/", {
        email,
        password,
      })
      .then((response) => {
        console.log("data", response.data.user);
        if (response.data.accessToken) {
          localStorage.setItem("accessToken", response.data.accessToken);
        }
        dispatch({
          type: "SUCCESS_MESSAGE",
          successMessage: "Success!",
        });

        dispatch({
          type: "IS_LOGGED_IN",
          user: response.data.user,
        });

        return response.data;
      })
      .catch(() => {
        console.log("error");
        dispatch({
          type: "ERROR_MESSAGE",
          errorMessage: "Wrong  login/password combination",
        });
      });
  };

export const order = (orderPizzas, history) => (dispatch) => {
  axiosInstance.defaults.headers.common["Authorization"] = authHeader();
  axiosInstance
    .post("/place_order/", {
      ordered_pizzas: orderPizzas,
    })
    .then(() => {
      dispatch({
        type: "SUCCESS_MESSAGE",
        successMessage: "Your order has been successfully completed",
      });
    })
    .catch(() => {
      dispatch({
        type: "ERROR_MESSAGE",
        errorMessage: "Your order isn't executed",
      });
    });
};
