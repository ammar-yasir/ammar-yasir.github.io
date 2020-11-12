import React, { useState } from 'react';
import { useContentful } from 'react-contentful';

const Skills = () => {
  
  const { data: skillsData } = useContentful({
    contentType: 'skills'
  });
  
  const { data: toolKitData } = useContentful({
    contentType: 'toolKit'
  });
  
  const [isGridLayout, setIsGridLayout] = useState(true);

  const handleSwitch = e => {
    setIsGridLayout(e.target.checked);
  };

  const skillsInfo = skillsData?.items;
  const toolKitInfo = toolKitData?.items && toolKitData?.items[0]?.fields;

  const listStyleToolKit = (
    <div className="row">
      {skillsInfo?.map((skill, index) => (
        <div className="col-6" key={index}>
          <p className="list-item">
            <img
              className="skill-icon"
              src={skill?.fields?.icon?.fields?.file?.url}
              alt="Skill Icon"
            />
            <span className="ml-3">{skill?.fields?.name}</span>
          </p>
        </div>
      ))
      }
    </div>
  );
  
  const gridStyleToolKit = (
    <div className="d-flex flex-wrap">
      {toolKitInfo && Object.keys(toolKitInfo).map((item, index) => (
        <div className="col-sm-6" key={index}>
          <div className="heading subheading text-center mb-3 text-capitalize">
            {item.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")}
          </div>
          <div className="skill-icons-list">
            {toolKitInfo[item].map((singleSkill, index) => (
              <figure className="mr-5" key={index}>
                <img
                  className="skill-icon"
                  src={singleSkill?.fields?.file?.url}
                  alt="Skill Icon"
                />
                <figcaption className="text-center">{singleSkill?.fields?.title}</figcaption>
              </figure>
            ))
            }
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div className="w-100">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="mb-2">Skills</h2>
          </div>
          <div className="col-sm-6 mt-3">
            {/* Switch to {isGridLayout ? 'List' : 'Grid'} Style &nbsp; */}
            <label className="switch float-right">
              <input type="checkbox" checked={isGridLayout} onChange={handleSwitch} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className={`subheading mb-3 ${isGridLayout ? "text-center" : ''}`}>Programming Languages &amp; Tools</div>
          {isGridLayout ? gridStyleToolKit : listStyleToolKit}
      </div>
    </section>
  );
}

export default Skills;