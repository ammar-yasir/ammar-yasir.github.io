import React from 'react';
// import image from '../Assets/profile.jpg';
import { useContentful } from 'react-contentful';

const Sidebar = () => {
  
  const { data } = useContentful({
    contentType: 'contact'
  });

  const contactInfo = data?.items && data?.items[0].fields;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">{contactInfo?.name}</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={`https:${contactInfo?.profileImage?.fields?.file?.url}`}
            alt=""
          />
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#projects">projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#publications">Publications</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
