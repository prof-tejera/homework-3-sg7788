//import Button from "components/Button/Button";
import RadioButton from "../components/Input/Input";
import "./Pager.css";

const Pager = () => {

  // const pages = () => {
  //   for (let page = 1; page <= 12; page++) {
  //     <RadioButton text={page} />
  //   }
  // }

  return (
    <div>
      <RadioButton text="1" />
      <RadioButton text="2" />
      <RadioButton text="3" />
      <RadioButton text="4" />
      <RadioButton text="5" />
      <RadioButton text="6" />
      <RadioButton text="7" />
      <RadioButton text="8" />
      <RadioButton text="9" />
      <RadioButton text="10" />
      <RadioButton text="11" />
      <RadioButton text="12" />
    </div>
  )
};

export default Pager;
