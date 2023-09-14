import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(-1);

  return (
    <div className="flashcards">
      {questions.map((qa) => (
        <FlashCard
          flashCard={qa}
          selected={qa.id === selectedId}
          setSelected={setSelectedId}
          key={qa.id}
        />
      ))}
    </div>
  );
}

function FlashCard({ flashCard, selected, setSelected }) {
  function handleSelect() {
    if (selected) setSelected(-1);
    else setSelected(flashCard.id);
  }

  return (
    <div className={selected ? "selected" : ""} onClick={handleSelect}>
      {selected ? flashCard.answer : flashCard.question}
    </div>
  );
}
