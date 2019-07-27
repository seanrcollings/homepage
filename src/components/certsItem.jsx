import React from 'react'

export default function CertsItem(props) {
  const className = props.reverse ? 'certs-item-reverse' : 'certs-item-normal'

  return (
    <div className={`${className} certs-item`} >
      <div className={`${className}-text certs-item-text`}>
        <h2 className={`certs-item-text-name`}>{props.name}</h2>
        <p className={`certs-item-text-desc`}>{props.desc}</p>
      </div>
      <img className={`certs-item-img`} src={props.img} alt='cert'/>
    </div>
  )
}
