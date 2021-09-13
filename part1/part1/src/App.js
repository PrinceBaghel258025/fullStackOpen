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
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      <Total
        text={"Number of exercises"}
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};

export default App;
