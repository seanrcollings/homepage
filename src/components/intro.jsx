import React from 'react'
import me from '../img/small3.png'

export default function Intro() {
  return (
    <div className='intro'>
      <h2 className='intro-title'>Hi!</h2>
      <img className='intro-img' src={me}/>
      <div className='intro-content'>
        <div className='intro-content-quote'>
          <em>The most important step a man can take. It's not the first one, is it? It's the next one. Always the next step, Dalinar.</em>
          <div>-Brandon Sanderson, Oathbringer</div>
          </div>
        <p>My name is Sean Collings and here are a few things about me</p>
        <ul className='intro-content-items'>
          <li className='intro-content-item'>I started an interest in programming when I was 14 years old!</li>
          <li className='intro-content-item'>I graduated from Ridgeline Highschool in 2019</li>
          <li className='intro-content-item'>I also graduated from Bridgerland's IT program in the same year</li>
          <li className='intro-content-item'>I am attending USU in the fall, majoring in Computer Science</li>
        </ul>
      </div>
    </div>
  )
}
