import React from 'react'

export default function ProfileSection(props) {
  return (
    <section id={props.section} className={`profile-${props.type}`}>
      {props.component}
    </section>
  )
}
