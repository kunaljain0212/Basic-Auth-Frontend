const { API } = require("../../../../backend");

//Get profile API call
export const getProfile = () => {
  const token = sessionStorage.getItem("Token");
  return fetch(`${API}/user/profile`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
