const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ total }) => <p>Number of exercises {total}</p>;

const Part = ({ partName, exerciseCount }) => (
  <p>
    {partName} {exerciseCount}
  </p>
);

const Content = ({ parts }) => {
  const courseParts = parts.map((part) => (
    <Part key={part.name} partName={part.name} exerciseCount={part.exercises} />
  ));
  return courseParts;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const totalExercises = parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0,
  );

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default App;
