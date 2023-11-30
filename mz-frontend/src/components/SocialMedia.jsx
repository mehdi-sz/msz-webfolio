import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedin} from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <FaGithub />
    </div>
    <div>
      <FaLinkedin />
    </div>
  </div>
);

export default SocialMedia;