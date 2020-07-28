import React from 'react';
import classes from './ErrorMessage.module.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const ErrorMessage = ({ textElement, action }) => {
  const classList = [
    classes.ErrorMessage,
    'animate__animated',
    'animate__bounceInDown',
    'animate__fast',
  ];
  return (
    <div className={classList.join(' ')}>
      {textElement}
      <Button clicked={action} icon="fa fa-step-backward" type="button" />
    </div>
  );
};

ErrorMessage.propTypes = {
  textElement: PropTypes.element.isRequired,
};

export default ErrorMessage;