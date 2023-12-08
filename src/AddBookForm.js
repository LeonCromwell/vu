// AddBookForm.js
import React, { useState } from "react";
import "./App.css";

const AddBookForm = ({ onAddBook }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    // Add more fields as needed
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Example validation - add your own validation rules
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onAddBook(formData);
      // Clear form after successful submission
      setFormData({
        title: "",
        author: "",
        // Add more fields as needed
      });
    }
  };

  return (
    <div class='form'>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="title" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          {errors.title && <span>{errors.title}</span>}
        </div>

        <div class="mb-3">
          <label for="author" class="form-label">
            Author:
          </label>
          <input
            class="form-control"
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
          {errors.author && <span>{errors.author}</span>}
        </div>

        <div>
          <button class="btn btn-primary" type="submit">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
