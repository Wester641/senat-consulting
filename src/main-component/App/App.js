import React from "react";
// import AllRoute from "../router";
import "./Block.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="error-code">404</h1>
      <p className="error-text">
        Что-то пошло не так. Свяжитесь с разработчиками!
      </p>
      <a href="https://t.me/zakharhhh" target="_blank" rel="noreferrer">
        <button>Связаться</button>
      </a>
    </div>
  );
};

export default App;
