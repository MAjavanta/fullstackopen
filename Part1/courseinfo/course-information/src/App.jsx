const Header = ({ courseName }) => <h1>{courseName}</h1>;

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
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  const totalExercises = course.parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0,
  );

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default App;
