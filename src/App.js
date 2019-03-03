import React, { Component } from 'react';
import Header from './component/header/header';
import About from './component/about/about';
import Resume from './component/resume/resume';
import Portfolio from './component/portfolio/portfolio';
import ContactUs from './component/contactus/contactus';
import Footer from './component/footer/footer';
import resumeData from './component/resume/resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About />
        <Resume />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;