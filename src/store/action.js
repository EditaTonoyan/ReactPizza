import axios from "axios";

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

export const register = (firstName, lastName, email, password) => (dispatch) => {
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

        return Promise.resolve();
      },
      (error) => {
        console.log("error->", error.message);

        return Promise.reject();
      }
    );
};
