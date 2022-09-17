import React from 'react';
import Section  from './Section';
import Statistics  from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';


class Counter extends React.Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  onLeaveFeedback = options => {
    this.setState({ [options]: this.state[options] + 1})
}
  
countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  const total = good + neutral + bad;
  return total;
};

countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  const percentage =
    Math.round((good / this.countTotalFeedback()) * 100) || 0;
  return percentage;
};

render() {
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
        }
      }

export default Counter;