import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticsLine = ({ text, value }) => {
  const line = text === "positive" ? `${text} ${value}%` : `${text} ${value}`;

  return <p>{line}</p>;
};

const Statistics = ({ good, neutral, bad }) => {
  const average = (good - bad) / (good + bad + neutral);
  const positivePercentage = (good * 100) / (good + bad + neutral);

  if (good + bad + neutral < 1) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <h1>statistics</h1>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positivePercentage} />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGoodPressed = () => {
    setGood(good + 1);
  };

  const onNeutralPressed = () => {
    setNeutral(neutral + 1);
  };

  const onBadPressed = () => {
    setBad(bad + 1);
  };

  return (
    <main>
      <div>
        <h1>give feedback</h1>
        <Button onClick={onGoodPressed} text="good" />
        <Button onClick={onNeutralPressed} text="neutral" />
        <Button onClick={onBadPressed} text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </main>
  );
};

export default App;
