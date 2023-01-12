import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { useState } from 'react';

export function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const onChangeFeedBack = event => {
    setState(prevState => {
      return {
        ...prevState,
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    let total = 0;
    for (const feedback in state) {
      total += state[feedback];
    }
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good * 100) / countTotalFeedback());
  };

  const { good, neutral, bad } = state;
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onChangeFeedBack={onChangeFeedBack} />
      </Section>

      <Section title="Please leave feedback">
        {' '}
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          Percentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onChangeFeedBack = event => {
//     console.log(event.target);
//     this.setState(prevState => {
//       return {
//         ...prevState,
//         [event.target.name]: prevState[event.target.name] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     let total = 0;
//     for (const feedback in this.state) {
//       total += this.state[feedback];
//     }
//     return total;
//   };

//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good * 100) / this.countTotalFeedback());
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onChangeFeedBack={this.onChangeFeedBack}
//           />
//         </Section>

//         <Section>
//           {' '}
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             Percentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       </>
//     );
//   }
// }
