import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

import { Fragment } from 'react';
import { Component } from 'react';
import Section from './components/Section/Section';

import styles from './components/feedback.module.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  static PropsTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onBtnClick = param => {
    this.setState(prevState => {
      return {
        [param]: prevState[param] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    return (
      <Fragment>
        <div className={styles.wrapper}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              arrayKeysFromState={Object.keys(this.state)}
              onClickFn={this.onBtnClick}
            />
          </Section>

          <Section title="Statistics">
            <Statistics
              totalFeedback={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
              arrayFromStateEntry={Object.entries(this.state)}
              message="There is no feedback"
            />
          </Section>
        </div>
      </Fragment>
    );
  }
}

export default App;
