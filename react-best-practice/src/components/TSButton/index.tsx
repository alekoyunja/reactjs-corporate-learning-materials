import React from "react";
import "./TSButton.scss";

type TSButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    className: string;
};

const TSButton = ({ children, onClick, className }: TSButtonProps) => (
    <button
        type="button"
        className={"tsbutton" + " " + className}
        onClick={onClick}
    >
        {children}
    </button>
);

export default TSButton;
