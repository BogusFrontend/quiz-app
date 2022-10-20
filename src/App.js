import React, { useState } from 'react';
import './style.scss';

const questions = [
  {
    title: 'React - это ...',
    variants: ['Библиотека', 'Фреймворк', 'Приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ...',
    variants: ['Приложение', 'Часть приложения или страницы', 'То, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="icon" />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <a href="https://bogusfrontend.github.io/quiz-app/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ question, onClickVariant, step }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];

  const [correct, setCorrect] = useState(0);

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
