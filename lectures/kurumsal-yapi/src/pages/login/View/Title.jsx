import React, {useContext} from "react";
import PropTypes from "prop-types";
import { AuthenticationContext } from "../Data/AuthenticationProvider";

const Title = ({title}) => {
    const { isAuthenticated } = useContext(AuthenticationContext);

    return (
        <h2>{title}{isAuthenticated}</h2>
            /*
            <AuthenticationContext.Consumer>
            {({isAuthenticated}) => (
                <h2>{title}{isAuthenticated}</h2>
            )}
            </AuthenticationContext.Consumer>
            */
    );
}

//type checking
Title.propTypes = {
    title: PropTypes.string.isRequired
};

//type default values
Title.defaultProps = {
    title: "{title}"
};

export default Title;