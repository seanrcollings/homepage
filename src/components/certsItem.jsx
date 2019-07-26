import React from 'react'

export default function CertsItem(props) {
  const baseClassName = props.reverse ? 'certs-item-reverse' : 'certs-item'

  return (
    <div className={`${baseClassName}`} >
      <div className={`${baseClassName}-text`}>
        <h2 className={`${baseClassName}-text-name`}>{props.name}</h2>
        <p className={`${baseClassName}-text-desc`}>{props.desc}</p>
      </div>
      <img className={`${baseClassName}-img`} src={props.img} alt='cert'/>
    </div>
  )
}
