import React from 'react'
import './Skills.scss'
import { AppWrap, MotionWrap } from '../../wrapper';
const Skills = () => {
  return (
    <div>Skills</div>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);