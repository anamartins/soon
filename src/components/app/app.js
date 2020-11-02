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
            Meanwhile, you can find me on{" "}
            <a
              className="links"
              href="https://www.linkedin.com/in/anacmartins/"
            >
              Linkedin
            </a>{" "}
            or{" "}
            <a className="links" href="https://github.com/anamartins">
              Github
            </a>
            .
          </p>
          <div className="social-media">
            <div className="social-item">
              <a href="https://github.com/anamartins" target="_blank">
                <img src="../../img/github-icon.png" />
              </a>
            </div>
            <div className="social-item">
              <a href="https://www.linkedin.com/in/anacmartins" target="_blank">
                <img src="../../img/linkedin-icon.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
