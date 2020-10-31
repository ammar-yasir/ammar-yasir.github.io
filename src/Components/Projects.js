import React from 'react';
import dayjs from 'dayjs';
import { useContentful } from 'react-contentful';

const Projects = () => {
  
  const { data } = useContentful({
    contentType: 'projects'
  });

  const projectsInfo = data?.items;
  return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects" >
      <div className="w-100">
        <h2 className="mb-5">Projects</h2>
        {
          projectsInfo?.map((item, index) => (
            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <a target="_blank" rel="noopener noreferrer" href={item?.fields?.projectUrl ?? '/'}>
                  <h3 className="mb-0">{item.fields?.projectTitle}</h3>
                </a>
                <div className="subheading mb-3">{item.fields?.shortDescription}</div>
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

export default Projects;
