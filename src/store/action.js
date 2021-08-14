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
    .then(
      (response) => {
        dispatch({
          type: "SUCCESS_MESSAGE",
          successMessage: "Congratulations, your account has been successfully created!",
        });
        setTimeout(() => {
          history.push("/login");
        }, 2000);

        return Promise.resolve();
      },
      (error) => {
        console.log("error->", error.message);

        return Promise.reject();
      }
    );
};

export const login = (email, password, history) => (dispatch) => {
  axios
    .post("https://pizza-dummy.herokuapp.com/auth/login/", {
      email,
      password,
    })
    .then(
      (response) => {
        if (response.data.accessToken) {
          localStorage.setItem("pizUser", JSON.stringify(response.data));
        }
        dispatch({
          type: "SUCCESS_MESSAGE",
          successMessage: "Success!",
        });
        setTimeout(() => {
          history.push("/");
        }, 2000);

        return response.data;
      },
      (error) => {
        console.log("error->", error.message);

        return Promise.reject();
      }
    );
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
