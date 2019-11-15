import React from 'react'

export default function SkillsItem(props) {
  return (
    <div className='skills-item'>
      <img className='skills-item-img' src={props.img} alt='skill'/>
      <a className='skills-item-content' href={props.link} title='Click on me to learn more about the skill'>
        {props.content}
        <div className='skills-item-time'>{props.time}</div>
      </a>
      
    </div>
  )
}
