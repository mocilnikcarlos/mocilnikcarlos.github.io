import { useState } from "react";

const useForm = () => {
  const [form, setForm] = useState({
    formHomeName: "",
    formHomeEmail: "",
    formHomeDescription: "",
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
