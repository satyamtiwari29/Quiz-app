import "./style.css";
import { useState, useEffect } from "react";

function Question(props) {
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(0);
  function onSubmit() {
    if (answer) {
      props.updateIndex(result);
    }
  }
  function radioHandler(e) {
    let value = e.target.value;
    setResult(props.q.correct === value);
    setAnswer(value);
  }

  useEffect(() => {
    setAnswer(null);
  }, [props.q.question]);

  return (
    <>
      <div className="question">
        <h2>{props.q.question}</h2>
        <div className="Options">
          <ul>
            <li>
              <input
                type="radio"
                id="option1"
                value="a"
                name="answer"
                checked={answer === "a"}
                onClick={radioHandler}
                readOnly
              />
              <lable htmlFor="option1">{props.q.a}</lable>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                value="b"
                name="answer"
                checked={answer === "b"}
                onClick={radioHandler}
                readOnly
              />
              <lable htmlFor="option2">{props.q.b}</lable>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                value="c"
                name="answer"
                checked={answer === "c"}
                onClick={radioHandler}
                readOnly
              />
              <lable htmlFor="option3">{props.q.c}</lable>
            </li>
            <li>
              <input
                type="radio"
                id="option4"
                value="d"
                name="answer"
                checked={answer === "d"}
                onClick={radioHandler}
                readOnly
              />
              <lable htmlFor="option4">{props.q.d}</lable>
            </li>
          </ul>
        </div>
      </div>
      <button className="submit" onClick={onSubmit}>
        Submit
      </button>
    </>
  );
}
export default Question;
