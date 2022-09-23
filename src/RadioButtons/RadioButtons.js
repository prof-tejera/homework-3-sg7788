import Panel from "components/Panel/Panel";
import "./RadioButtons.css";
import RadioButton from "components/Input/Input";

const RadioButtons = () => {
  return (
    <div>
      <RadioButton text="Apple" />
      <RadioButton text="Pear" />
      <RadioButton text="Orange" />
    </div>
  );
};

export default RadioButtons;
