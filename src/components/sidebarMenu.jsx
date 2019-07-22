import React, {useState} from 'react'

export default function SidebarMenu(props) {
  const [focused, setFocused] = useState(false)

  return (
    <div className={`sidebar-menu ${focused ? 'sidebar-menu-show' : 'sidebar-menu-hide'}`} onClick={() => setFocused(!focused)}>
      <span className='sidebar-menu-text'>{props.text}</span>
      {props.children}
    </div>
  )
}
