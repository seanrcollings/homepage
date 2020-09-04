import React, {ReactNode, useState} from 'react'

interface SidebarMenuProps {
  readonly text: string;
  readonly children: ReactNode;
}

export default function SidebarMenu(props: SidebarMenuProps) {
  const [focused, setFocused] = useState(false)

  return (
    <div className={`sidebar-menu-wrapper ${focused ? 'sidebar-menu-wrapper-show' : 'sidebar-menu-wrapper-hide'}`}>
      <span className='sidebar-menu-wrapper-arrow' onClick={() => setFocused(false)}><i className="fas fa-arrow-left"></i></span>
      <span className='sidebar-menu-wrapper-text'>{props.text}</span>
      <div className='sidebar-menu' onClick={() => setFocused(true)}>
        {props.children}
      </div>
    </div>
  )
}
