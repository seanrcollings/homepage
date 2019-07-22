import React from 'react'
import ProfileSection from './profileSection';
import Sidebar from './sidebar';
import Intro from './intro';
import Skills from './skills';

export default function Profile() {
  return (
    <div className='profile'>
      <Sidebar/>
      <ProfileSection type='dark'  section='1' component={<Intro/>}/>
      
      <ProfileSection type='light' section='2' component={<Skills/>}/>

      <ProfileSection type='dark'  section='1' component={null}/>

      <ProfileSection type='light' section='2' component={null}/>
    </div>
  )
}
