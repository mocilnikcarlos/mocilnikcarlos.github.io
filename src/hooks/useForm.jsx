import { useState } from "react";

const useForm = () => {
  const [form, setForm] = useState({
    formHomeName: "",
    formHomeEmail: "",
    formHomeDescription: "",
    formOption1: "Consultoria UX/UI",
    formOption2: "Contratacion por proyecto",
    formOption3: "Contratacion directa",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return { handleChange, form, handleSubmit };
};

export default useForm;
