import React from "react";
import "./Button.scss";

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    className: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => (
    <button
        type="button"
        className={"tsbutton" + " " + className}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;
