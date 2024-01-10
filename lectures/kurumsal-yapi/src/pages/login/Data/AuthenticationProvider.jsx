import React from "react";

const AuthenticationContext = React.createContext();

const AuthenticationProvider = ({ children }) => {
    return (
        <AuthenticationContext.Provider value={{ isAuthenticated: false }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export {AuthenticationProvider, AuthenticationContext};