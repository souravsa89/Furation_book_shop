import React, { useState, useEffect } from "react";
import redme from "../data/README.md";

const About = () => {
  const [mark, setMark] = useState("");
  useEffect(() => {
    fetch(redme)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setMark(text);
      });

    document.title = "About || React Book App";
  }, []);

  return (
    <div class="card container border-0">
      <div class="card-body">
        <div className="top-content text-center">
          <h1 className="display-4">Hello, Peoples!</h1>
          <p className="lead">
            This is a ReactJS project of a simple book cart application using react router,
            context api, react hooks, bootstrap, and localStorage.
          </p>
          <hr className="my-4" />
        </div>
        
      </div>
      <div class="card-footer">
        <h5 className="display-5 text-center">
          A React Project By &copy;{" "}
          <a
            href="https://github.com/souravsa89"
            rel="noopener noreferrer"
            target="_blank"
          >
            github/sourav_Sakhari
          </a>
        </h5>
      </div>
    </div>
  );
};

export default About;
