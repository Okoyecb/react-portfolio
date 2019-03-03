import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
            <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
            <li><a href="https://twitter.com/Okoyecb"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://github.com/Okoyecb"><i className="fa fa-github-square" /></a></li>
              <li><a href="https://linkedin.com/in/okoyecb"><i className="fa fa-linkedin" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2019 Okoyecb</li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>


      </React.Fragment>
    );
  }
}