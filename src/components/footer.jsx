import React from 'react'

export default function Footer(props) {
  return (
    <footer id={props.section} className={`profile-${props.type} footer`}>
      <section className='footer-section footer-links'>
        <h2 className='footer-section-title'>Links</h2>
        <ul>
          <li><a href='https://github.com/seanrcollings'>Github</a></li>
          <li><a href='http://pisite.seanrcollings.com'>Pi Site</a></li>
          <li><a href='https://moonshiver.herokuapp.com'>Moonshiver</a></li>
          <li><a href='http://blog.seanrcollings.com'>Blog</a></li>
        </ul>
      </section>
      <div className='footer-divider'></div>
      <section className='footer-section footer-contact'>
        <h2 className='footer-section-title'>Contact Me</h2>
        <ul>
          <li>Email: <a href='mailto:seanrcollings@gmail.com'>seanrcollings@gmail.com</a></li>
          <li>Phone Number: (435) 799-7259</li>
        </ul>
      </section>
    </footer>
  )
}
