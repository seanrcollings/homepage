import React, { useState } from 'react'
import ProfileSection from './profileSection';
import Sidebar from './sidebar';
import Intro from './intro';
import Skills from './skills';
import SidebarMenu from './sidebarMenu';

export default function Profile() {
  const [typeOne, setTypeOne] = useState('dark')
  const [typeTwo, setTypeTwo] = useState('light')

  const handleClick = () => {
    if (typeOne === 'dark') {
      setTypeOne('light')
      setTypeTwo('dark')
    } else {
      setTypeOne('dark')
      setTypeTwo('light')
    }
  }

  return (
    <div className='profile'>
      <button onClick={handleClick}>Click Me</button>
      <Sidebar/>
      <ProfileSection type={typeOne}  section='1' component={<Intro/>}/>
      <ProfileSection type={typeTwo} section='2' component={<Skills/>}/>
      <ProfileSection type={typeOne}  section='3' component={null}/>
      <ProfileSection type={typeTwo} section='4' component={null}/>
    </div>
  )
}
