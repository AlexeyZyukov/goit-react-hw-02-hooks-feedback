import React from 'react';
import PropTypes from 'prop-types';
import styles from '../feedback.module.css';

const Notification = ({ message }) => {
  return (
    <>
      <p className={styles.statistic}>{message}</p>
    </>
  );
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
