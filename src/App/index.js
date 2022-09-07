import "./style.css";
import Question from "../Question";
import { QuizData } from "../Data/index";
import { useState } from "react";
import Result from "../Result/index";

export default function App() {
  const [index, setIndex] = useState(0);
  const [corr, setCorr] = useState(0);

  function indexHandler(flag) {
    console.log(flag);
    if (flag) {
      setCorr((prev) => prev + 1);
    }
    if (index < QuizData.length ) {
      setIndex(index + 1);
    }
  }
  function resetHandler()
  {
    setIndex(0);
  }

  return (
    <>
      <div className="App">
        <h1 className="h1">Quiz app</h1>
        {QuizData.length> index ? (
          <Question q={QuizData[index]} updateIndex={indexHandler} />
        ) : (
          <Result res={corr} onclick={resetHandler}/>
        )}
      </div>
    </>
  );
}
