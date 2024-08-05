import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUserMd, faClipboardList, faGlobe, faUserInjured } from '@fortawesome/free-solid-svg-icons';

const AboutUsComponent = () => {
  return (
    <div style={homePageStyle}>
      <div style={heroStyle}>
        <div style={heroTextStyle}>
          <h1>Health is a habit</h1>
          <h4>"At CareHub, we partner with you on your journey to health and healing, offering expert care with a personal touch."</h4>
        </div>
      </div>

      <div style={aboutUsContainerStyle}>
        <div style={contentStyle}>
          <div style={infoSectionStyle}>
            <h2>0422 4250000</h2>
            <p>Emergency Service</p>
            <p>
              In case of an urgent medical situation or any other emergency,
              it is crucial to have quick access to emergency contact numbers.
              These numbers connect you to essential services that can provide immediate assistance.
            </p>
          </div>
          <div style={infoSectionStyle}>
            <h2>Partnerships and Collaborations</h2>
            <p>
              "We are in collaboration with leading doctors from renowned institutions such as
              KMCH and ROYAL CARE to deliver comprehensive and personalized care,
              ensuring that our patients benefit from cutting-edge treatments and expert medical support."
            </p>
          </div>
          <div style={infoSectionStyle}>
            <h2>Opening Hours</h2>
            <p>Monday - Friday (6am to 9pm)</p>
            <p>Saturday - Sunday (9am to 7pm)</p>
          </div>
        </div>
      </div>

      <div style={topReasonsStyle}>
        <h2>Top reasons to use CareHub.</h2>
        <div style={reasonsContainerStyle}>
          <div style={reasonStyle}>
            <img src="https://static.vecteezy.com/system/resources/previews/021/535/568/original/doctor-hospital-medical-icon-on-transparent-background-outline-doctor-hospital-medical-icon-vector.jpg" alt="Doctor with patient" style={iconImageStyle} />
            <h3>Grow your professional network</h3>
            <p>Share and discuss everyday moments of your practice with thousands of other doctors across the globe.</p>
          </div>
          <div style={reasonStyle}>
            <img src="https://media.istockphoto.com/id/1300627184/vector/hospital-line-icon-vector-design-with-editable-stroke.jpg?s=612x612&w=0&k=20&c=flXAwsQaqHWo9-8hULxWOOYbu_filjyyga2A39t7Vek=" alt="Collective intelligence" style={iconImageStyle} />
            <h3>Achieve more together</h3>
            <p>Tap into the collective intelligence of the community and make faster, smarter treatment decisions.</p>
          </div>
          <div style={reasonStyle}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxfCsm3kOJKf5yeEAo-jQFcKQi9id1nKO3Q&s" alt="Online reputation" style={iconImageStyle} />
            <h3>Build your online reputation</h3>
            <p>Share your expertise with millions of care seekers on the platform. Make a real difference and help people feel good.</p>
          </div>
          <div style={reasonStyle}>
            <img src="https://cdn.vectorstock.com/i/preview-1x/61/92/mark-rademaker-the-netherlands-assen-vector-49386192.jpg" alt="Grow practice" style={iconImageStyle} />
            <h3>Grow your own practice</h3>
            <p>Get more patients to your real-world practice, your institution, or your online practice.</p>
          </div>
          <div style={reasonStyle}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbNdrT4w32y_5bBdeVkr8WZyDu7dGp3VhPaw&s" alt="Smart patient care" style={iconImageStyle} />
            <h3>Deliver smart patient care</h3>
            <p>Paperless medical records and practice management that allows you to focus on healing your patients.</p>
          </div>
        </div>
      </div>

      <footer style={footerStyle}>
        <div style={statisticsContainerStyle}>
          <div style={statItemStyle}>
            <div style={statIconStyle}><FontAwesomeIcon icon={faUserMd} /></div>
            <h2>40+</h2>
            <p>Doctors</p>
          </div>
          <div style={statItemStyle}>
            <div style={statIconStyle}><FontAwesomeIcon icon={faClipboardList} /></div>
            <h2>25+</h2>
            <p>Services</p>
          </div>
          <div style={statItemStyle}>
            <div style={statIconStyle}><FontAwesomeIcon icon={faGlobe} /></div>
            <h2>10+</h2>
            <p>Cities</p>
          </div>
          <div style={statItemStyle}>
            <div style={statIconStyle}><FontAwesomeIcon icon={faUserInjured} /></div>
            <h2>5k+</h2>
            <p>Patients per year</p>
          </div>
        </div>
        <div style={socialMediaStyle}>
          <h3>Connect with us</h3>
          <div style={iconsContainerStyle}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
              <FontAwesomeIcon icon={faFacebookF} style={socialIconStyle} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
              <FontAwesomeIcon icon={faInstagram} style={socialIconStyle} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
              <FontAwesomeIcon icon={faTwitter} style={socialIconStyle} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
              <FontAwesomeIcon icon={faLinkedinIn} style={socialIconStyle} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsComponent;

const homePageStyle = {
  margin: 0,
};

const heroStyle = {
  backgroundImage: 'url(https://cdn.dribbble.com/users/3726898/screenshots/15561676/hospital-reception.gif)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'rgb(6, 6, 6)',
  textAlign: 'center',
  padding: '20px',
};

const heroTextStyle = {
  maxWidth: '600px',
};

const aboutUsContainerStyle = {
  padding: '20px',
  backgroundColor: '#fff',
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  gap: '10px',
  flexWrap: 'wrap',
};

const infoSectionStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  width: '30%',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
};

const topReasonsStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f9f9f9',
};

const reasonsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  justifyContent: 'center',
  gap: '20px',
};

const reasonStyle = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '10px',
  width: '90%',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
};

const iconImageStyle = {
  height: '100px',
  marginBottom: '10px',
};

const footerStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const statisticsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  flexWrap: 'wrap',
};

const statItemStyle = {
  width: '20%',
  padding: '10px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
};

const statIconStyle = {
  fontSize: '2em',
  marginBottom: '10px',
  color: '#444',
};

const socialMediaStyle = {
  marginTop: '20px',
};

const iconsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const iconLinkStyle = {
  display: 'inline-block',
  width: '40px',
  height: '40px',
};

const socialIconStyle = {
  width: '100%',
  height: '100%',
};
