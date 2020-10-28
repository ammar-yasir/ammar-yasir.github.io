import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useContentful } from 'react-contentful';

const Landing = () => {

    const { data, error, fetched, loading } = useContentful({
      contentType: 'contact',
      // query: {
      //   'fields.slug[in]': `/${props.match.slug || ''}`,
      // }
    });

    const contactInfo = data?.items && data?.items[0].fields;
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">{contactInfo?.name}
            {/* <span className="text-primary">{contactInfo?.lastName}</span> */}
          </h1>
          <div className="subheading mb-5">{contactInfo?.phoneNumber} ·
            <a href="mailto:name@email.com">{contactInfo?.email}</a>
          </div>
          <p className="lead mb-5">{contactInfo?.bio}</p>
          <div className="social-icons">
            <a href={contactInfo?.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={contactInfo?.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </section>
    );
  // }
}

export default Landing;
