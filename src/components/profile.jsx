import React, { useState } from 'react'
import ProfileSection from './profileSection';
import Sidebar from './sidebar';
import Intro from './intro';
import Skills from './skills';
import Projects from './projects';
import Links from './links';

export default function Profile() {
  const [typeOne, setTypeOne] = useState('dark')
  const [typeTwo, setTypeTwo] = useState('light')

  const alternate = () => {
    if (typeOne === 'dark') {
      setTypeOne('light')
      setTypeTwo('dark')
    } else {
      setTypeOne('dark')
      setTypeTwo('light')
    }
  }

  const darkMode = () => {
    setTypeOne('dark')
    setTypeTwo('dark')
  }

  const lightMode = () => {
    setTypeOne('light')
    setTypeTwo('light')
  }

  return (
    <div className='profile'>
      <Sidebar  alternate={alternate} darkMode={darkMode} lightMode={lightMode}/>
      <ProfileSection type={typeOne}  section='1' component={<Intro/>}/>
      <ProfileSection type={typeTwo} section='2' component={<Skills/>}/>
      <ProfileSection type={typeOne}  section='3' component={<Projects/>}/>
      <ProfileSection type={typeTwo} section='4' component={<Links/>}/>
    </div>
  )
}
