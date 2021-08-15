export default function authHeader() {
  const pizUser = JSON.parse(localStorage.getItem("pizUser"));
  if (pizUser && pizUser.accessToken) {
    return "Bearer " + pizUser.accessToken;
  } else {
    return "";
  }
}
