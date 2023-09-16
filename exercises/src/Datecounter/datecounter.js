import useState from "./react";

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const [date, setDate] = useState(new Date());

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function setDateByCount(count) {
    setCount(() => count);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + count * step);
    setDate(() => currentDate);
  }

  function resetCounter() {
    setStep(() => 1);
    setDateByCount(0);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="range"
        min="0"
        max="15"
        value={step}
        onChange={(e) => setStep(e.target.value)}
      ></input>
      <span>Step: {step}</span>
      <Counter value={count} setValue={setDateByCount} label={"Count"} />
      <h2>
        Today is {days[date.getDay()]} {months[date.getMonth()]}{" "}
        {date.getDate()} {date.getFullYear()}
      </h2>
      {step !== 1 || count !== 0 ? (
        <button onClick={resetCounter}>Reset</button>
      ) : null}
    </div>
  );
}

function Counter({ value, setValue, label }) {
  function handleIncreaseValue() {
    setValue(value + 1);
  }

  function handleReduceValue() {
    setValue(value - 1);
  }

  return (
    <div style={{ padding: "1%" }}>
      <button onClick={handleReduceValue}>-</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={handleIncreaseValue}>+</button>
    </div>
  );
}
