import React from "react";
import PropTypes from "prop-types";
import styles from "./button.modules.scss";

const Button = ({ children, onClick, className }) => (
    <button type="button" className={styles.button + " " + className} onClick={onClick}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

Button.defaultProps = {
    onClick: () => {},
    className: "",
};

export default Button;
