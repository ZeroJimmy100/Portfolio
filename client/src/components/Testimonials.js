import React from 'react';
import { Slide } from 'react-slideshow-image';
import './css/Testimon.css';
import pic1 from './css/Randy.jpg';

const slideImages = [
  pic1,
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Testimonials = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Randy Phan I consider Jimmy as a friend and everytime we partner up on a team project, he is always prepare to get an idea ready. Jimmy would always discuss with the team to see if this is feasible to do, considering the time that we were given each project, and this help our team work flow much easier! Jimmy is quick to grasp each project requirments and a team leader.</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    )
}

export default Testimonials;