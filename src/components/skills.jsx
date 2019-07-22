import React from 'react'
import SkillsItem from './skillsItems';

// images
import react from '../img/react.png'

export default function Skills() {
  return (
    <div className='skills'>
      <h1>SKILLS</h1>
      <div className='skills-content'>
        <SkillsItem img={react} content='ReactJS Framework' time='2 Years'/>
      </div>
    </div>
  )
}
