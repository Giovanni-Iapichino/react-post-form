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

  return (
    <div className="container">
      <h1 className="text-center mb-4">Crea un nuovo post</h1>
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-3 mt-2 mb-2">
              <label className="label-form mb-2">
                <strong>Autore:</strong>
              </label>
              <input
                className="form-control"
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-3 mt-2 mb-2">
              <label className="label-form mb-2">
                <strong>Titolo:</strong>
              </label>
              <input
                className="form-control"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12 mt-2 mb-2">
              <label className="label-form mb-2">
                <strong>Contenuto:</strong>
              </label>
              <textarea
                className="form-control"
                name="body"
                value={formData.body}
                onChange={handleChange}
                required
              />
            </div>

            <div className=" mt-2 mb-2">
              <label className="label-form mb-2">
                <strong>Rendi publico: </strong>
              </label>
              <input
                className="form-check-input mx-2"
                type="checkbox"
                name="public"
                value={formData.public}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className=" d-flex justify-content-center">
            <button className="btn btn-primary px-4" type="submit">
              Invia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
