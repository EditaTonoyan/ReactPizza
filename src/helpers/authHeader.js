export default function authHeader() {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return "Bearer " + token;
  } else {
    return "";
  }
}
