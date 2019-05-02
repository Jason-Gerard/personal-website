import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h1>Porfolio Website</h1>
      <p className="lead">
        This website is a portfolio of all my personal projects, my development
        environment, and my setup. The source code to all my projects can be
        found at my github.
      </p>
      <a
        className="btn btn-lg btn-primary"
        href="https://github.com/jason-gerard"
        role="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub »
      </a>
    </div>
  );
};

export default Jumbotron;
