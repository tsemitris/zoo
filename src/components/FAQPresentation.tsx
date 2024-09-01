import { useState } from "react";

interface IFAQProps {
  question: string;
  answer: string;
}

export const FAQPresentation = ({ question, answer }: IFAQProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleQuestion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="faq-container">
        <div className="question-container">
          <p className="question">{question}</p>
          <button
            className={`question-expand-arrow ${
              isExpanded ? "question-expand" : ""
            }`}
            onClick={toggleQuestion}
          ></button>
        </div>
        <div
          className={`answer-container ${
            isExpanded ? "answer-container-expand" : ""
          }`}
        >
          {answer}
        </div>
      </div>
    </>
  );
};
