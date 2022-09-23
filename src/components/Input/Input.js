import "./Input.css"

const RadioButton = ({ text }) => {
  return (
    <div className="button">
      <input type="radio" id={text} name="group" /> 
      <label for={text}>{text}</label>
    </div>
  )
};

export default RadioButton;