import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Publications from './Components/Publications';
// import ReactGA from 'react-ga';
import { ContentfulClient, ContentfulProvider } from 'react-contentful';

const contentfulClient = new ContentfulClient({
  accessToken: 'lWqwkWp7dHR66MrkFI1HBt419S7IhL_SWqibwrdWO38',
  space: '5fn7j94cccwm',
});

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   // ReactGA.initialize('UA-158818625-1');
  //   // ReactGA.pageview(window.location.pathname);
  // }

  render() {
    return (
      <ContentfulProvider client={contentfulClient}>
      <div className="App">
        <Sidebar />
        <div className="container-fluid p-0">
          <Landing />
          <hr className="m-0" />
          <Experience />
          <hr className="m-0" />
          <Education />
          <hr className="m-0" />
          <Skills />
          <hr className="m-0" />
          <Projects />
          <hr className="m-0" />
          <Publications />
          <p className="text-dark text-center">
            Copyright © {new Date().getFullYear()} | Muhammad Ammar Yasir
          </p>
        </div>
      </div>
      </ContentfulProvider>
    );
  }
}

export default App;
