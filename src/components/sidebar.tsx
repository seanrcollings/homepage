import React from 'react'
import SidebarMenu from './sidebarMenu';

interface SidebarProps {
  readonly alternate: () => void;
  readonly setColorMode: (colorOne: string, colorTwo: string) => void;
}

export default function Sidebar(props: SidebarProps) {

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
      <button className='sidebar-menu-button' onClick={() => props.setColorMode('dark', 'dark')}>Dark Mode</button>
      <button className='sidebar-menu-button' onClick={() => props.setColorMode('light', 'light')}>Light Mode</button>
      <button className='sidebar-menu-button' onClick={() => props.setColorMode('midnight', 'midnight')}>Midnight</button>
    </SidebarMenu>
    </div>
  )
}
