import React from 'react';
import styles from '../feedback.module.css';

const uppCase = string => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const FeedbackOptions = ({ arrayKeysFromState, onClickFn }) => (
  <div className={styles.buttonsBlock}>
    {arrayKeysFromState.map(item => (
      <button
        type="button"
        className={item}
        name={item}
        key={item}
        onClick={() => onClickFn(item)}
      >
        {uppCase(item)}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
