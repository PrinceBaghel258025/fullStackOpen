//anecdotes
import React, { useState } from 'react';
import Anecdotes from './Anecdotes';

//Button Component
const Button = ({ click }) => {
  return (
    <>
      <button onClick={click}>next anecdotes</button>
    </>
  )
}

//App COmponent
const App = () => {
  //getting the length

let [selected, setSelected] = useState(0);

let length;
const getLength = (l) => {
  length = l;
}

const quoteHandler = () => {
  const rand = Math.floor(Math.random() * length);
  setSelected(rand);
}

return (
  <>
   <Anecdotes sendLength={getLength} rand={selected}/>
    <Button click={quoteHandler} />
  </>
)
}

export default App;