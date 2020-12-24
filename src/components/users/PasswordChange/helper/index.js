const { API } = require("../../../../backend");

export const changePassword = (passwords) => {
  console.log(API);
  const token = localStorage.getItem("token");
  return fetch(`${API}user/profile/password`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify(passwords),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
