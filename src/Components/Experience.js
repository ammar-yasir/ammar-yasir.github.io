import React from 'react';
import dayjs from 'dayjs';
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
                <span className="text-primary">
                  {dayjs(item?.fields?.startDate).format('MMM, YYYY')} - {''}
                  {item?.fields?.endDate ? dayjs(item?.fields?.endDate).format('MMM, YYYY') : 'Present'}
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Experience;
