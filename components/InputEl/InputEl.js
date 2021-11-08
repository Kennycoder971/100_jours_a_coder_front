const InputEl = ({
  className,
  inputName,
  onInput,
  value,
  type,
  placeholder,
}) => (
  <input
    type={type}
    name={inputName}
    id={inputName}
    className={className}
    value={value}
    onInput={onInput}
    placeholder={placeholder}
  />
);

InputEl.defaultProps = {
  type: "text",
  className: "blue-input",
  value: "",
  inputName: "",
  onInput: () => {},
  placeholder: "",
};

export default InputEl;
