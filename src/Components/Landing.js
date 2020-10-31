import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useContentful } from 'react-contentful';

const Landing = () => {

  const { data } = useContentful({
    contentType: 'contact',
  });

  const { data: summary } = useContentful({
    contentType: 'summary',
  });

  const { data: socialProfiles } = useContentful({
    contentType: 'socialProfiles',
  });

  const contactInfo = data?.items && data?.items[0].fields;
  const summaryInfo = summary?.items && summary?.items[0]?.fields?.summary;
  const socialInfo = socialProfiles?.items && socialProfiles?.items[0]?.fields;

  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <h1 className="mb-3">
          <span className="text-primary">{contactInfo?.firstName} </span>
          {contactInfo?.lastName}
        </h1>
        <div className="subheading mb-5">{contactInfo?.phoneNumber} ·
            <a href={`mailto:${contactInfo?.email}`}>{contactInfo?.email}</a>
        </div>
        <p className="lead mb-5">{summaryInfo}</p>
        <div className="social-icons">
          <a target="_blank" rel="noopener noreferrer" href={socialInfo?.linkedIn ?? '/'}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={socialInfo?.github ?? '/'}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Landing;
