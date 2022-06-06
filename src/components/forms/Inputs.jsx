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

const InputSelect = (props) => {
  const { handleChange, form } = handleForm();
  return (
    <div className="box-inputselect">
      <select onChange={handleChange} className="inputselect select">
        <option
          value={form}
          selected
          disabled
          className="option option-selected"
        >
          {props.placeholder}
        </option>
        <option value={form.formOption1} className="option">
          Consultoria UX/UI
        </option>
        <option value={form.formOption2} className="option">
          Contratacion por proyecto
        </option>
        <option value={form.formOption3} className="option">
          Contratacion directa
        </option>
      </select>
      <div className="box-btn-select">
        <div className="box-row-down">
          <div className="row-down-left change-color"></div>
          <div className="row-down-right change-color"></div>
        </div>
      </div>
    </div>
  );
};

export { InputName, InputEmail, TextArea, InputSelect };
