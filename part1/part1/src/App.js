const App = () => {
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    );
  };

  const Part = (props) => {
    return (
      <div>
        <p>
          {" "}
          {props.name} {props.exercise}
        </p>
      </div>
    );
  };
  const Content = (props) => {
    return (
      <>
        <Part name={props.part1.name} exercise={props.part1.exercises} />
        <Part name={props.part2.name} exercise={props.part2.exercises} />
        <Part name={props.part3.name} exercise={props.part3.exercises} />
      </>
    );
  };

  const Total = (props) => {
    return (
      <>
        <p>
          {props.text} {props.total}
        </p>
      </>
    );
  };

  const course = "Half Stack application developement";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = { 
    name: "State of a component",
    exercises: 14
  }

  return (
    <div>
      <Header
        course={course} 
      />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        
      />
      <Total
        text={"Number of exercises"}
        total={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};

export default App;
