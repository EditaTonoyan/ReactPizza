import _axios from "axios";

export const axiosInstance = _axios.create({
  baseURL: "https://pizza-dummy.herokuapp.com",
});
