import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from './Notification/Notification';



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeavefeedback = option => { this.setState(prevState => ({ [option]: prevState[option] + 1 })) };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
      return (
      <div>
        <section title='Please Leave feedback'>
          <FeedbackOptions options={Object.keys(this.state)} onLeavefeedback={this.updateState} />

          </section>

          <section title="Statistics">
            {this.countTotalFeedback() === 0 ? (<Notification message='There is no feedback yet...' />) : (
              <Statistics options={Object.keys(this.state)}
                statistic={this.state}
                total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage} />
            )}

          </section>
          



          
    </div>
  )
  };
}

export default App;