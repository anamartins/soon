import React from "react";
import Sky from "../../components/sky/sky";

import "./style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Sky constellation={300} />
        <div className="content">
          <h1>Hi, my name is Ana.</h1>
          <p>
            I'm a frontend wannabe and here you gonna find my website. Soon.
            Meanwhile, you can find me on <br />
            <a
              className="links"
              href="https://www.linkedin.com/in/anacmartins/"
              target="_blank"
            >
              {" "}
              <span className="social-media">
                <img src="../../img/linkedin-icon.png" />
              </span>
              Linkedin
            </a>{" "}
            or{" "}
            <a
              className="links"
              href="https://github.com/anamartins"
              target="_blank"
            >
              <span className="social-media">
                <img src="../../img/github-icon.png" />
              </span>
              Github
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}

export default App;
