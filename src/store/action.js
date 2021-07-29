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
