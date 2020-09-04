import React from 'react'


interface ProfileSectionProps {
  readonly type: string;
  readonly section: string;
  readonly component: JSX.Element;
}

export default function ProfileSection(props: ProfileSectionProps) {
  return (
    <section id={props.section} className={`profile-${props.type}`}>
      {props.component}
    </section>
  )
}
