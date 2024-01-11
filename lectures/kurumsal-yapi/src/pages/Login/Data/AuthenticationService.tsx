const setUserSession = ( user: any) => {
    sessionStorage.setItem("user", JSON.stringify(user));
};

const removeUserSession = () => {
    sessionStorage.removeItem("user");
};

const getUserSession = () => {
    return sessionStorage.getItem("user");
};

export { setUserSession, removeUserSession, getUserSession };
