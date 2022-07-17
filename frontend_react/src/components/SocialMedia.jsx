import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
     <a href='https://www.linkedin.com/in/zoharwilliams/ ' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a> 
    </div>
    <div>
      <a href='https://www.facebook.com/zohar.williams' target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
    </div>
    <div>
     <a href='https://github.com/zoharkiks' target="_blank" rel="noopener noreferrer"> <BsGithub /></a>
    </div>
  </div>
);

export default SocialMedia;