import "./steps.css";
import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Steps() {
  const [step, setStep] = useState(1);

  const [isOpen, setIsOpen] = useState(true);

  function HandlePrevious() {
    setStep((s) => (s > 1 ? s - 1 : s));
  }

  function HandleNext() {
    setStep((s) => (s < 3 ? s + 1 : s));
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((io) => !io)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              backgroundColor={"#7950F2"}
              color={"#fff"}
              onClickAction={HandlePrevious}
            >
              <span>🤛</span> Previous
            </Button>
            <Button
              backgroundColor={"#7950F2"}
              color={"#fff"}
              onClickAction={HandleNext}
            >
              Next <span>🤜</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ backgroundColor, color, onClickAction, children }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color }}
      onClick={onClickAction}
    >
      {children}
    </button>
  );
}
