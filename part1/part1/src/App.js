
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
  const [all, setAll] = useState(0);
  const [avgSum, setAvgSum] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  //Event Hnadler functions***********************
  const goodHandler = () => {
    setGood(good + 1);
    setAll(all+1);
    setAvgSum(avgSum+1);
    const avg = avgSum/all;
    setAverage(avg);
    const annn = (good/all) * 100;
    setPositive(annn)
    
  }
  const neutralHandler = () => {
    setNeutral(neutral + 1);
    setAll(all+1);
    setAvgSum(avgSum);
    const avg = avgSum / all;
    setAverage(avg);
    const annn = (good / all) * 100;
    setPositive(annn)
  }
  const badHandler = () => {
    setBad(bad + 1);
    setAll(all+1);
    setAvgSum(avgSum-1);
    const avg = avgSum / all;
    setAverage(avg);
    const annn = (good / all) * 100;
    setPositive(annn)
  }

  
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
        <Line text="all" count={all} />
        <Line text="average" count={average} />
        <Line text="positive" count={positive} />
    </div>
  );
}

export default App;