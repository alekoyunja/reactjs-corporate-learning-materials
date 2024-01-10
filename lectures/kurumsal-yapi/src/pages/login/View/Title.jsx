import React from "react";
import PropTypes from "prop-types";

const Title = ({title}) => <h2>{title}</h2>;

//type checking
Title.propTypes = {
    title: PropTypes.string.isRequired
};

//type default values
Title.defaultProps = {
    title: "{title}"
};

export default Title;