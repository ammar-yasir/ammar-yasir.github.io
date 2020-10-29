import React from 'react';
import { useContentful } from 'react-contentful';

const Experience = () => {

  const { data } = useContentful({
    contentType: 'workExperience'
  });

  const experienceInfo = data?.items;
  return (
    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>
        {
          experienceInfo?.map((item, index) => (
            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">{item?.fields?.designation}</h3>
                <div className="subheading mb-3">{item?.fields?.workplace}</div>
                <p>{item?.fields?.aboutWork}</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">{item?.fields?.startDate} - {item?.fields?.endDate ?? 'Present'}</span>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Experience;
