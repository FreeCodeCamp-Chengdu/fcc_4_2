import React, { PropTypes } from 'react';


const NameLabel = props => <h1>Hello, {`${props.firstName} ${props.lastName}`}</h1>;

NameLabel.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

export default NameLabel;
