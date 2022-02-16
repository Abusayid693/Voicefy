export const saveUserInLocalStorage = (data: {
    token: string;
    user: any;
  }) => {
    const { token, user } = data;
    localStorage.setItem("token", token);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };
  
  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
  };