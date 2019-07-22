import React from 'react'
import SkillsItem from './skillsItems';

// images
import react from '../img/react.png'
import python from '../img/python.png'
import rails from '../img/rails.png'
import js from '../img/js.png'
import html from '../img/html.png'
import sql from '../img/sql.png'

export default function Skills() {
  return (
    <div className='skills'>
      <h1>SKILLS</h1>
      <div className='skills-content'>
        <SkillsItem img={python} content='Python' time='3 Years'/>
        <SkillsItem img={js} content='JavaScript' time='1 Year'/>
        <SkillsItem img={react} content='ReactJS Framework' time='1 Year'/>
        <SkillsItem img={rails} content='Ruby On Rails' time='6 Months'/>
        <SkillsItem img={html} content='HTML and CSS' time='3 Years'/>
        <SkillsItem img={sql} content='SQL' time='6 Months'/>
      </div>
    </div>
  )
}
