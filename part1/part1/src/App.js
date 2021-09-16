
import React, { useState } from 'react';
//Button Component******************************
const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
)
//Line Component*******************************
const Line = ({text, count}) => <p>{text} {count}</p>

//App Component
const App = () => {

  //State of the App **************************

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //Event Hnadler functions***********************
  const goodHandler = () => setGood(good + 1);
  const neutralHandler = () => setNeutral(neutral + 1);
  const badHandler = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button
        onClick={goodHandler}
        text="good" />
      <Button
        onClick={neutralHandler}
        text="neutral" />
      <Button
        onClick={badHandler}
        text="bad" />
        <br />
        <h1>statistics</h1>
        <Line text="good" count={good} />
        <Line text="neutral" count={neutral} />
        <Line text="bad" count={bad} />
    </div>
  );
}

export default App;