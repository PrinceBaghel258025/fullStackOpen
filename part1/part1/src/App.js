//anecdotes
import React, { useState } from 'react';
import Anecdotes from './Anecdotes';

//Button Component
const Button = ({ click, text }) => {
  return (
    <>
      <button onClick={click}>{text}</button>
    </>
  )
}

const Winner = (props) => {
  const highestVotesCount = Math.max(...props.votes);
  const indexOfWinner = props.votes.indexOf(highestVotesCount);

  const getLength = (l) => {
    const length = l;
  }

  const winner = <Anecdotes sendLength={getLength} rand={indexOfWinner} />;

  if(highestVotesCount === 0){
    return(
      <p>No votes yet</p>
    )
  }
  return(
    <div>
      {winner}
      <p>has {highestVotesCount} Votes</p>
    </div>
  )
}
//App COmponent
const App = () => {
 
let [selected, setSelected] = useState(0);
const arr = new Array(32).fill(0);
// console.log(arr)
let [votes, setVotes] = useState(arr);

 //getting the length
let length;
const getLength = (l) => {
  length = l;
}



const quoteHandler = () => {
  // console.log(length)
  const randQuote = Math.floor(Math.random() * length);
  setSelected(randQuote);
}

const voteHandler = () => {
  const newArr = [...votes];
  console.log(votes)
  newArr[selected] += 1;
  setVotes(newArr);
}

return (
  <>
   <Anecdotes sendLength={getLength} rand={selected}/>
  <p>has {votes[selected]} votes</p>
  <Button text="vote" click={voteHandler} />
    <Button text="next anecdotes" click={quoteHandler} />
    <Winner votes={votes} />
  </>
)
}

export default App;