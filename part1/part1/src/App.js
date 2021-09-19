
import React, { useState } from 'react';

//Button Component******************************
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
//StatisticLine Component*******************************
// const StatisticLine = ({ text, count }) => <p>{text} {count}</p>



//showing stastics using stats object**********
const Statistics = ({statsArray}) => {
  const goodCount = statsArray[0].count;
  const neutralCount = statsArray[1].count;
  const badCount = statsArray[2].count;

  const rows = statsArray.map( (el, index) => {
    return <tr key={index}>
      <td>{el.text}</td>
      <td>{el.count}</td>
    </tr>

  })

  // Conditional Rendering*********************
  if (goodCount || badCount || neutralCount) {
    return (
      <>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
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

  const statsArray = [
    {text: "good", count: good},
    { text: "neutral", count: neutral},
    { text: "bad", count: bad},
    { text: "all", count: all},
    { text: "average", count: average},
    { text: "positive", count: positive}
  ]

  
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
        statsArray={statsArray} />
    </div>
  );
}

export default App;