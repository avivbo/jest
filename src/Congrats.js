import React from 'react';
import PropTypes from 'prop-types';
/**
 * Functional react component for congratulatory message.
 * @function
 * @param {Object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is )
 */
const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You gessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
