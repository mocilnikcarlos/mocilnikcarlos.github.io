import { useState } from "react";

const useForm = () => {
  const [form, setForm] = useState({
    formHomeName: "",
    formHomeEmail: "",
    formHomeDescription: "",
  });

  const [select, setSelect] = useState({
    option: "",
  });

  //Para el Form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Para los inputs y text area
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Para los select y opcion
  const handleSelect = (e) => {
    setSelect({ ...select, [e.target.name]: e.target.value });
  };

  // return { handleChange, form, handleSubmit };
  return { handleChange, form, handleSubmit, handleSelect, select };
};

export default useForm;
