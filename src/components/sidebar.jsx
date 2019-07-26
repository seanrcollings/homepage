import React from 'react'
import SidebarMenu from './sidebarMenu';

export default function Sidebar(props) {

  return (
    <div className='sidebar'>
    <SidebarMenu text='Navigation Menu'>
      <a className='sidebar-menu-item' href='#1'>Intro</a>
      <a className='sidebar-menu-item' href='#2'>Skills</a>
      <a className='sidebar-menu-item' href='#3'>Projects</a>
      <a className='sidebar-menu-item' href='#4'>Certs</a>
      <a className='sidebar-menu-item' href='#5'>Links</a>
    </SidebarMenu>
    <SidebarMenu text='Color Mode'>
      <button className='sidebar-menu-button' onClick={props.alternate}>Alternate</button>
      <button className='sidebar-menu-button' onClick={props.darkMode}>Dark Mode</button>
      <button className='sidebar-menu-button' onClick={props.lightMode}>Light Mode</button>
    </SidebarMenu>
    </div>
  )
}
