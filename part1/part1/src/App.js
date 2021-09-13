
const App = () => {

  const Header = (props) => {
   return (
     <div>
       <h1>{props.course}</h1>
     </div>
   )
 }
 
 const Content = (props) => {
   return (
      <div>
        <p>{props.part1} {props.exercise1}</p>
        <p>{props.part2} {props.exercise2}</p>
        <p>{props.part3} {props.exercise3}</p>
      </div>
   );
 } 

 const Total = (props) => {
   return (
     <div>
      <p>{props.text} {props.total}</p>
     </div>
   );
 } 


  const course = 'Half Stack application developement'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14


  return (
    <div>
      <Header course={course} />
      <Content part1={part1} 
      part2={part2} part3={part3}
      exercise1={exercise1} exercise2={exercise2}
      exercise3={exercise3} />
      <Total text={"Number of exercises"} total={exercise1+exercise2+exercise3}> </Total>
    </div>
  );
}

export default App;
