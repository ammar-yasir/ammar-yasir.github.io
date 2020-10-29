import React from 'react';
import { useContentful } from 'react-contentful';

const Education = () => {
  
  const { data } = useContentful({
    contentType: 'education'
  });

  const educationInfo = data?.items;
  return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id = "education" >
      <div className="w-100">
        <h2 className="mb-5">Education</h2>
        {
          educationInfo?.map((item, index) => (
            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">{item.fields.institution}</h3>
                <div className="subheading mb-3">{item.fields.qualification}</div>
                {/* <p>{data.gpa}</p> */}
              </div>
              <div className="resume-date text-md-right">
                {/* <span className="text-primary">{data.fromDate} - {data.toDate}</span> */}
              </div>
            </div>
          ))
        }
      </div>
      </section>
    );
}

export default Education;
