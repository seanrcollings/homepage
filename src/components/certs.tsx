import React from 'react'
import CertsItem from './certsItem';

// Images
import net from '../img/certs/net.png'
import pcpro from '../img/certs/pcpro.png'
import mta from '../img/certs/mta.png'
import cts from '../img/certs/cts.png'
import comptia from '../img/certs/a+.png'

export default function Certs() {
  return (
    <div className='certs'>
      <h1>CERTS</h1>
      <CertsItem
        name='CompTIA A+'
        desc='PC hardware, software, troubleshooting, etc...'
        img={comptia}
        reverse={false}
      />
      <CertsItem
        name='Net Pro'
        desc='Network building, managment, security, etc...'
        img={net}
        reverse={true}
      />
      <CertsItem
        name='PC Pro'
        desc='PC hardware, software, troubleshooting, prep for A+, etc......'
        img={pcpro}
        reverse={false}
      />
      <CertsItem
        name='Microsoft Technology Associate'
        desc='Software Development fundementals'
        img={mta}
        reverse={true}
      />
      <CertsItem
        name='Code To Success'
        desc='HTML, CSS, JavaScript, ReactJS, SCSS'
        img={cts}
        reverse={false}
      />
    </div>
  )
}
