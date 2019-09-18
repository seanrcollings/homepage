import React from 'react'
import SkillsItem from './skillsItems';

// images
import react from '../img/skills/react.png'
import python from '../img/skills/python.png'
import rails from '../img/skills/rails.png'
import js from '../img/skills/js.png'
import html from '../img/skills/html.png'
import sql from '../img/skills/sql.png'
import ruby from '../img/skills/ruby.png'
import flask from '../img/skills/flask.png'

export default function Skills() {
  return (
    <div className='skills'>
      <h1>SKILLS</h1>
      <div className='skills-content'>
        <SkillsItem img={python} content='Python' time='3 Years'/>
        <SkillsItem img={flask} content='Flask' time='1 Year'/>
        <SkillsItem img={js} content='JavaScript' time='2 Years'/>
        <SkillsItem img={react} content='ReactJS Framework' time='1 Year'/>
        <SkillsItem img={ruby} content='Ruby' time='8 Months'/>
        <SkillsItem img={rails} content='Ruby On Rails' time='8 Months'/>
        <SkillsItem img={html} content='HTML and CSS' time='3 Years'/>
        <SkillsItem img={sql} content='SQL' time='8 Months'/>
      </div>
    </div>
  )
}
