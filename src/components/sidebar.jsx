import React from 'react'
import SidebarMenu from './sidebarMenu';

export default function Sidebar() {

  return (
    <div className='sidebar'>
      <SidebarMenu text='Navigation Menu'>
      <a className='sidebar-menu-item' href='#1'>Intro</a>
      <a className='sidebar-menu-item' href='#2'>Skills</a>
      <a className='sidebar-menu-item' href='#3'>Projects</a>
      <a className='sidebar-menu-item' href='#4'>Links</a>
    </SidebarMenu>
    <SidebarMenu text='Navigation Menu'>
      <a className='sidebar-menu-item' href='#1'>Intro</a>
      <a className='sidebar-menu-item' href='#2'>Skills</a>
      <a className='sidebar-menu-item' href='#3'>Projects</a>
      <a className='sidebar-menu-item' href='#4'>Links</a>
    </SidebarMenu>
    </div>
  )
}
