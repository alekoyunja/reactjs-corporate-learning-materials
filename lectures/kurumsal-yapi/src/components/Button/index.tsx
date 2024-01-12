
import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    className: string;
};

/**
 * This function performs a specific operation.
 * 
 * @param {number} param1 - The first parameter.
 * @param {string} param2 - The second parameter.
 * @returns {boolean} - The result of the operation.
 */
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
