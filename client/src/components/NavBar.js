import React from 'react'
import './css/NavStyle.css';

export default function NavBar() {
   


    return (
            <div className="menu-wrap">
                <input type="checkbox" className="toggler"/>
                    <div className="hamburger"><div></div></div>
                        <div className="menu">
                            <div>
                                <div>
                            
                                    <ul>
                                        
                                        <li><a href="#SectionOne">Index</a></li>
                                        <li><a href="#SectionTwo">About me</a></li>
                                        <li><a href="#SectionThree">Projects</a></li>
                                        <li><a href="#SectionFour">Testimonials</a></li>
                                        <li><a href="https://drive.google.com/file/d/1uf_GEdfXLrhZ6jXmRfL_zt77mG7_Mkm7/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                                        <li><a href="https://github.com/ZeroJimmy100" target="_blank" rel="noopener noreferrer">Github</a></li>
                                        
                                    </ul>
                          
                                </div>
                            </div>
                </div>
            </div>
    )
}
