import './App.css';

import { useState, Fragment } from 'react';
import Section from './components/Section/Section';

import styles from './components/feedback.module.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

const initState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [state, setState] = useState(initState);

  const onBtnClick = item => {
    setState(prevState => {
      console.log(state);
      return {
        [item]: prevState[item] + 1,
      };
    });
  };

  const arrayOfStateEntry = () => {
    console.log(Object.entries(state));
    return Object.entries(state);
  };

  const countTotalFeedback = () => {
    console.log(state);
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    console.log(good);
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            arrayKeysFromState={Object.keys(state)}
            onClickFn={onBtnClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            totalFeedback={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
            arrayFromStateEntry={arrayOfStateEntry()}
            message="There is no feedback"
          />
        </Section>
      </div>
    </Fragment>
  );
}
