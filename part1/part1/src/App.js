
import React, { useState } from 'react';

//Button Component******************************
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
//StatisticLine Component*******************************
const StatisticLine = ({ text, count }) => <p>{text} {count}</p>

//showing stastics using stats object**********
const Statistics = (props) => {

  const { goodText, goodCount, neutralText, neutralCount, badText, badCount, allText, allCount, averageText, averageCount, positiveText, positiveCount } = props.data;


  // Conditional Rendering*********************
  if (goodCount || badCount || neutralCount) {
    return (
      <>
        <StatisticLine text={goodText} count={goodCount} />
        <StatisticLine text={neutralText} count={neutralCount} />
        <StatisticLine text={badText} count={badCount} />
        <StatisticLine text={allText} count={allCount} />
        <StatisticLine text={averageText} count={averageCount} />
        <StatisticLine text={positiveText} count={positiveCount} />
      </>
    )
  }
  return <>
    <p>No feedback given</p>
  </>


}

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
    setAll(all + 1);
    setAvgSum(avgSum + 1);
    const avg = avgSum / all;
    setAverage(avg);
    const annn = (good / all) * 100;
    setPositive(annn)

  }
  const neutralHandler = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
    setAvgSum(avgSum);
    const avg = avgSum / all;
    setAverage(avg);
    const annn = (good / all) * 100;
    setPositive(annn)
  }
  const badHandler = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAvgSum(avgSum - 1);
    const avg = avgSum / all;
    setAverage(avg);
    const annn = (good / all) * 100;
    setPositive(annn)
  }

  const statsObject = {
    goodText: "good",
    goodCount: good,
    neutralText: "neutral",
    neutralCount: neutral,
    badText: "bad",
    badCount: bad,
    allText: "all",
    allCount: all,
    averageText: "average",
    averageCount: average,
    positiveText: "positive",
    positiveCount: positive
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
      <Statistics
        data={statsObject} />
    </div>
  );
}

export default App;