import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './About.scss'
import { AppWrap, MotionWrap } from '../../wrapper';
const abouts = [
  { title:'Développeur FullStack', description:'Je vous accompagne de la conception à la production', imgUrl: images.about01 },
  { title:'Web Marketing', description:'Chef de projet SI, certifié par Google', imgUrl: images.about02 },
  { title:'Expert en IA', description:'Intégration et dévellopement de tout systeme autour du modèle openAI', imgUrl: images.about03 },
  { title:'Pentest et Sécurité', description:'Cisco Certified, Dévellopement de script anti intrusion', imgUrl:images.about04 },
];

const About = () => {

  return (
    <>
    <h2 className="head-text">J'aime<span> Développer </span> et  explorer<br /> des <span>solutions innovantes</span></h2>

    <div className="app__profiles">
    {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
    </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);