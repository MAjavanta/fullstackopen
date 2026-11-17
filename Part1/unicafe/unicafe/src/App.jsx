import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const average = (good - bad) / (good + bad + neutral);
  const positivePercentage = (good * 100) / (good + bad + neutral);

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
    <div>
      <h1>give feedback</h1>
      <Button onClick={onGoodPressed} text="good" />
      <Button onClick={onNeutralPressed} text="neutral" />
      <Button onClick={onBadPressed} text="bad" />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>average {average}</p>
      <p>positive: {positivePercentage}%</p>
    </div>
  );
};

export default App;
