import InputField from "../components/Input/InputField";
import Button from "components/Button/Button";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div>
      <InputField labelText="Username: " />
      <InputField labelText="Password: " />
      <Button text="Submit" />
    </div>
  )
};

export default LoginForm;
