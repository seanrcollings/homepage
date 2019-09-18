import React, { useState } from 'react'
import ProfileSection from './profileSection';
import Sidebar from './sidebar';
import Intro from './intro';
import Skills from './skills';
import Projects from './projects';
import Certs from './certs';
import Footer from './footer';

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
  const setColorMode = (colorOne, colorTwo) => {
    setTypeOne(colorOne)
    setTypeTwo(colorTwo)
  }

  return (
    <div className='profile'>
      <Sidebar alternate={alternate} setColorMode={setColorMode}/>
      <ProfileSection type={typeOne}  section='1' component={<Intro/>}/>
      <ProfileSection type={typeTwo} section='2' component={<Skills/>}/>
      <ProfileSection type={typeOne}  section='3' component={<Projects/>}/>
      <ProfileSection type={typeTwo}  section='4' component={<Certs/>}/>
      <Footer type={typeOne} section='5'/>
      <a href='#2' className='content-scroll'><i className='fas fa-arrow-down arrow'></i> Scroll down for more</a>
    </div>
  )
}
