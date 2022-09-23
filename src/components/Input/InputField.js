const InputField = ({ labelText }) => {
    return (
      <div>
        <label className="form-label">{labelText}</label><input type="text" /> 
      </div>
    )
  };

  export default InputField;