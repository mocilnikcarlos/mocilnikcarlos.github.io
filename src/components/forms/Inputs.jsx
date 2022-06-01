import handleForm from "../../hooks/useForm";
import "./Inputs.scss";

const InputName = (props) => {
  const { handleChange, form } = handleForm();
  return (
    <div className="box-input">
      <input
        type={props.type}
        name="formHomeName"
        className="input"
        required="required"
        onChange={handleChange}
        value={form.formHomeName}
      />
      <span className="label">{props.placeholder}</span>
    </div>
  );
};

const InputEmail = (props) => {
  const { handleChange, form } = handleForm();
  return (
    <div className="box-input">
      <input
        type={props.type}
        name="formHomeEmail"
        className="input"
        required={true}
        onChange={handleChange}
        value={form.formHomeEmail}
      />
      <span className="label">{props.placeholder}</span>
    </div>
  );
};

const TextArea = (props) => {
  const { handleChange, form } = handleForm();
  return (
    <div className="box-textarea">
      <textarea
        name="formHomeDescription"
        className="input resize"
        required="required"
        onChange={handleChange}
        value={form.formHomeDescription}
      />
      <span className="label">{props.placeholder}</span>
    </div>
  );
};

export { InputName, InputEmail, TextArea };
