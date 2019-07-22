import React from 'react'
import ProjectItem from './projectItem';

// Images
import pisite from '../img/pisite.png';
import blog from '../img/blog.png';
import moonshiver from '../img/moonshiver.png';
import mastermind from '../img/mastermind.png'

export default function Projects() {
  return (
    <div  className='projects'>
      <h1>PROJECTS</h1>
      <ProjectItem 
        title='Pi Site' 
        description='This is a site I built hosted on a Raspberry Pi' 
        link='https://pisite.seanrcollings.com' 
        img={pisite} 
        resources={['ReactJS', 'Flask', 'SCSS', 'Apache', 'Raspberry Pi 3A']}
      />

      <ProjectItem 
        title='My Blog' 
        description='A project I started to familirize myself with the Rails backend framework'
        link='https://blog.seanrcollings.com' 
        img={blog} 
        resources={['ReactJS', 'Rails', 'SCSS', 'Heroku', 'Postgres']}
      />

      <ProjectItem 
        title='Moonshiver' 
        description="A site I am currently building for my highschool's student film festival"
        link='https://moonshiver.herokuapp.com' 
        img={moonshiver} 
        resources={['ReactJS', 'Rails', 'SCSS', 'Heroku', 'Postgres']}
      />

      <ProjectItem 
        title='Mastermind' 
        description="A version of the Mastermind board game built in React"
        link='https://mastermind.seanrcollings.com' 
        img={mastermind} 
        resources={['ReactJS', 'SCSS']}
      />
    </div>    
  )
}
