const { API } = require("../../../../backend");

//Change password API call
export const changePassword = (passwords) => {
  const token = sessionStorage.getItem("Token");
  return fetch(`${API}/user/profile/password`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify(passwords),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
