// App.js
import React, { useState } from "react";
import AddBookForm from "./AddBookForm";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div class="wrapper">
      <h1>List of books</h1>
      <table class="table">
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td align="right">
                <span id="authorDisplay">{book.author}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddBookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default App;
