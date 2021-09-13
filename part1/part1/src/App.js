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
        <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
        <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
        <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
      </>
    );
  };

  const Total = (props) => {
    return (
      <>
        <p>
          {props.text}{" "}
          {props.total[0].exercises +
            props.total[1].exercises +
            props.total[2].exercises}
        </p>
      </>
    );
  };

  const course = "Half Stack application developement";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        text={"Number of exercises"}
        total={parts}
      />
    </div>
  );
};

export default App;
