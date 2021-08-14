export default function authHeader() {
  const pizUser = JSON.parse(localStorage.getItem("pizUser"));
  //   console.log(pizUser);
  if (pizUser && pizUser.accessToken) {
    //return { Authorization: "Bearer " + pizUser.accessToken };
    return "Bearer " + pizUser.accessToken;
  } else {
    return {};
  }
}
