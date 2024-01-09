import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    className: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => (
    <button
        type="button"
        className={styles.button + " " + className}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;
