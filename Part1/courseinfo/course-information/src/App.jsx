const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ total }) => <p>Number of exercises {total}</p>;

const Content = ({ part1, part2, part3 }) => {
  return (
    <>
      <Part partName={part1.name} exerciseCount={part1.exercises} />
      <Part partName={part2.name} exerciseCount={part2.exercises} />
      <Part partName={part3.name} exerciseCount={part3.exercises} />
    </>
  );
};

const Part = ({ partName, exerciseCount }) => (
  <p>
    {partName} {exerciseCount}
  </p>
);

const App = () => {
  const course = "Half Stack application development";
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
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
