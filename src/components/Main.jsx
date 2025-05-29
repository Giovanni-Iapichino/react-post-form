import axios from "axios";
import { useState } from "react";

export default function Main() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const createPost = (data) => {
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", data)
      .then((response) => {
        console.log(response.data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(formData);
  };

  return;
}
