import React from 'react'

export default function SkillsItem(props) {
  return (
    <div className='skills-item'>
      <img className='skills-item-img' src={props.img}/>
      <span className='skills-item-content'>
        {props.content}
        <div className='skills-item-time'>{props.time}</div>
      </span>
      
    </div>
  )
}
