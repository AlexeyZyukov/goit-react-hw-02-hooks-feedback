import './App.css';

import { useState, useEffect, Fragment } from 'react';
import Section from './components/Section/Section';

import styles from './components/feedback.module.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const objectState = { good, neutral, bad };

  const onBtnClick = item => {
    switch (item) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(objectState).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            arrayKeysFromState={Object.keys(objectState)}
            onClickFn={onBtnClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            totalFeedback={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
            arrayFromStateEntry={Object.entries(objectState)}
            message="There is no feedback"
          />
        </Section>
      </div>
    </Fragment>
  );
}
