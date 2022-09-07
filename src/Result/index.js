import "./style.css";

function Result(props) {
  return (
    <div className className="result">
      <h3>Correct Answer is : {props.res} </h3>

      <button onClick={props.onclick} className="buttonreset">
        Reset
      </button>
    </div>
  );
}
export default Result;
