import React from 'react';
import { useContentful } from 'react-contentful';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {

  const { data } = useContentful({
    contentType: 'skills'
  });

  const skillsInfo = data?.items;
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <div className="row">
          {
            skillsInfo?.map((skill, index) => (
              <div className="col-6" key={index}>
                <p className="list-item">
                  <img 
                    className="skill-icon" 
                    src={skill?.fields?.icon?.fields?.file?.url} 
                  />
                  <span className="ml-3">{skill?.fields?.name}</span>
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Skills;
