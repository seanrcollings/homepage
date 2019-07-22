import React, {useState} from 'react'

export default function Sidebar() {
  const [focused, setFocused] = useState(false)

  return (
    <div className={`sidebar ${focused ? 'sidebar-show' : 'sidebar-hide'}`} onClick={() => setFocused(!focused)}>
      <span className='sidebar-text'>Navigation Bar</span>
      <a className='sidebar-item' href='#1'>Intro</a>
      <a className='sidebar-item' href='#2'>Skills</a>
      <a className='sidebar-item' href='#3'>Projects</a>
      <a className='sidebar-item' href='#4'>Links</a>
    </div>
  )
}
