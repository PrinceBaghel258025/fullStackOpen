
const App = () => {

  const Header = (props) => {
   return (
     <div>
       <h1>{props.course}</h1>
     </div>
   )
 }


 const Part = (props) => {
   return (
     <div>
       <p> {props.name} {props.exercise}</p>
     </div>
   );
 }
 const Content = (props) => {
   return (
      <>
        <Part name={props.part1} exercise={props.exercise1}/>
        <Part name={props.part2} exercise={props.exercise2} />
        <Part name={props.part3} exercise={props.exercise3}/>
      </>
   );
 } 

 
 const Total = (props) => {
   return (
     <>
      <p>{props.text} {props.total}</p>
     </>
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
