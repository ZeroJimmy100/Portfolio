import React from 'react';

// import NavBar from '../components/NavBar';
import '../components/css/Index.css';
import NavBar2 from '../components/NavBar2';



export default () => {



    const Results = e => {
        e.preventDefault();

        alert("Phone Number: 206-474-8197");
        
    }

    return(
        <div>

            <div>
                <NavBar2/>
            </div>
                <section id="SectionOne">
                
                   
                    <div className="Background">
                        
                        <div className="NameBorder">
                            <h2 className="NameJimmy">J i m m y</h2>
                            <h2 className="NameJimmy">J i m m y</h2>
                        </div>

                        <div className="LastBorder">
                            <h2 className = "LastName">P h a m</h2>
                            <h2 className = "LastName">P h a m</h2>
                        </div>

                        <div className = "LeImages">
                            <img id="myPic" src={ require("../components/css/IMG_2140.JPG")} alt="" /* height="330" width="280" *//>
                        </div>

                        <div className="WelcomeBox">
                                <h4 className="WelcomeText">P o r t f o l i o</h4>
                                <h4 className="TextsTech"> React | Python | C# | Django | ASP.NET | Swift | Java | Unity | JavaScript | MySQL | Node | Express | MongoDB | AWS</h4>
                                <div>
                                    <h4 className="line">* * * * * * * * * </h4>
                                    <h5 className="Texts">Contact Me:</h5>
                                </div>
                                <div>
                                    <button id="NumButton" onClick={Results} ><img className="Num" src={ require("../components/css/phone.png")} alt=""/> </button>
                                    <img id="email" src={ require("../components/css/email.png")} alt=""/> 
                                    <a href="https://www.linkedin.com/in/jimmy-pham-ba4690197" target="_blank" rel="noopener noreferrer"> <img className="linkedin2" src={ require("../components/css/linkedin2.png")} alt=""/></a>
                                    <h4 id="add"> jimmyp.dev3@gmail.com</h4>
                                    
                                </div>
                        </div>

                        
                    </div>
                    
                </section>

                <div id="AboutSection">
                    <h2 className="AboutText2">A b o u t M e</h2>
                </div>
                <section id="SectionTwo">
                    <div className="TopTwo">   

                        <div className="AboutContainer">
                            <div className="AboutCard">
                                <div className="AboutImg">
                                    <img className="SecondPic" src={ require("../components/css/IMG_0041.JPG")} alt="" /* height="330" width="280" *//>
                                </div>
                                <div className="AboutContentBox">
                                    <div className="AboutContent">
                                        <h2 className="TextSum">My Summary:</h2>
                                        <p className="paragraph">Hi, my name is Jimmy, I like building, designing and solving things, whether it's coding, rubix cube or an annoying riddle. After discovering my passion for programming, I continued my passions by taking courses in computer science in college. When I realized I wanted to pursue a career in software development I enrolled at "Coding Dojo."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                            <div className="Bigcontainer">

                          
                            <div className="skillBox">
                                <div className="skill">

                                    <h1>MongoDB 80%</h1>
                                    <div className="container1">
                                        <div className="mongoDB bar"></div>
                                    </div>

                                    <h1>MySQL 80%</h1>
                                    <div className="container1">
                                        <div className="mysql bar"></div>
                                    </div>

                                    <h1>Python 80%</h1>
                                    <div className="container1">
                                        <div className="python bar"></div>
                                    </div>

                                    <h1>JavaScript 78%</h1>
                                    <div className="container1">
                                        <div className="js bar"></div>
                                    </div>

                                    <h1>HTML/CSS 78%</h1>
                                    <div className="container1">
                                        <div className="html bar"></div>
                                    </div>

                                    <h1>React 78%</h1>
                                    <div className="container1">
                                        <div className="react bar"></div>
                                    </div>

                                    <h1>C# 70%</h1>
                                    <div className="container1">
                                        <div className="c bar"></div>
                                    </div>

                                    <h1>Swift 60%</h1>
                                    <div className="container1">
                                        <div className="swift bar"></div>
                                    </div>

                                    <h1>Java 60%</h1>
                                    <div className="container1">
                                        <div className="java bar"></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                        
                </section>

                <div id="ProjectSection">
                    <h2 className="ProjectText">P r o j e c t s</h2>
                </div>
                <section id="SectionThree">

                    <div id="Middle">
                        <div className="container2">
                            <div className="card">
                                <div className = "imgBx">

                                <a href="https://github.com/ZeroJimmy100/Flat-Earth" target="_blank" rel="noopener noreferrer"><img className="OpenWorld" src={ require("../components/css/OpenWorld.png")} alt="" /></a>
                          
                                </div>
                                <div className="content">
                                    <div>
                                        <h2>Flat Earth</h2>
                                        <p>An Open World RPG Game</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className = "imgBx">

                                   <a href="https://github.com/ZeroJimmy100/Battle-Spirit-Card-Game" target="_blank" rel="noopener noreferrer"><img className="OpenWorld" src={ require("../components/css/CardGame.png")} alt="" /></a>
                          
                                </div>
                                <div className="content">
                                    <div>
                                        <h2>Fantasy Card Game</h2>
                                        <p>It's a turn-based card game that is a combination of Magic and Yugioh</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className = "imgBx">

                                   <a href="https://github.com/ZeroJimmy100/Corvid19-Coronavirus-Survey" target="_blank" rel="noopener noreferrer"><img className="OpenWorld" src={ require("../components/css/Survey.png")} alt="" /></a>
                          
                                </div>
                                <div className="content">
                                    <div>
                                        <h2>Corvid19/Coronavirus Survey</h2>
                                        <p>A website that enables people to participate a survey during a pandemic known as Corvid19/Coronavirus</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className = "imgBx">

                                <a href="https://strange-hangman.s3-us-west-2.amazonaws.com/index.html" target="_blank" rel="noopener noreferrer"><img className="OpenWorld" src={ require("../components/css/HangMan.png")} alt="" /></a>
                          
                                </div>
                                <div className="content">
                                    <div>
                                        <h2>Hangman Game</h2>
                                        <p>A simple guessing game with a twist that originated from a traditional game known as hangman</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className = "imgBx">

                                    <a href="https://github.com/ZeroJimmy100/Business-Escape" target="_blank" rel="noopener noreferrer"><img className="OpenWorld"  src={ require("../components/css/BEscape.png")} alt="" /></a>
                          
                                </div>
                                <div className="content">
                                    <div>
                                        <h2>Business Escape</h2>
                                        <p>A platform game that focuses on a business environment, where the player plays as a business man that wants to escape the world, known as stocks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>


                </section>


                <div id="TestSection">
                    <h2 className="testText">T e s t i m o n i a l s</h2>
                </div>
                <section id="SectionFour">
                    <div id="boxFour">
                        <div className="Container3">
                            <div className="testimonialsBox">
                                <div className="MyContent">
                                    <img className="quote" src={ require("../components/css/Quote.png")} alt=""/>
                                    <p>"I consider Jimmy as a friend and everytime we partner up on a team project, he is always prepare to get an idea ready. Jimmy would always discuss with the team to see if this is feasible to do, considering the time that we were given each project, and this help our team work flow much easier! Jimmy is quick to grasp each project requirments and a team leader."</p>
                                    <img className="User" src={ require("../components/css/Randy.jpg")} alt=""/>
                                    <h3>Randy Phan (UW CS Graduated)</h3>
                                </div>
                            </div>

                            <div className="testimonialsBox">
                                <div className="MyContent">
                                    <img className="quote" src={ require("../components/css/Quote.png")} alt=""/>
                                    <p>"Jimmy, where do I begin? Well, he is an extremely hard working individual and is willing to go above and beyond to get any work done immediately. I consider Jimmy as one of my most important employees and I am sure he can accomplish any work he put his mind into!"</p>
                                    <img className="User" src={ require("../components/css/Alex.jpg")} alt=""/>
                                    <h3>Alex Hrycenko (Owner of Jet City IT)</h3>
                                </div>
                            </div>

                            <div className="testimonialsBox">
                                <div className="MyContent">
                                    <img className="quote" src={ require("../components/css/Quote.png")} alt=""/>
                                    <p>"Jimmy is a student that surprises me every time, considering he would black belt on all three stacks that were taught in the coding bootcamp. In addition, he even participated in project week with 3 different projects that he has presented and work on! Jimmy is very studious and I know he will do great things in any company or team he works with."</p>
                                    <img className="User" src={ require("../components/css/Cody.jpg")} alt=""/>
                                    <h3>Cody Thaller (Coding Dojo Instructor)</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </section>
                
                <div id="Links">
                    <div className="GitHubBorder">
                        <a href="https://github.com/ZeroJimmy100" target="_blank" rel="noopener noreferrer"> <img className="GitHub" src={ require("../components/css/github_PNG45.png")} alt=""/> </a>
                    </div>

                    <div className="LinkedinBorder">
                        <a href="https://www.linkedin.com/in/jimmy-pham-ba4690197" target="_blank" rel="noopener noreferrer"> <img className="Linkedin" src={ require("../components/css/linkedin-logo-dublin.png")} alt=""/></a>
                    </div>

                    <div className="ResumeBorder">
                        <a href="https://drive.google.com/file/d/1uf_GEdfXLrhZ6jXmRfL_zt77mG7_Mkm7/view?usp=sharing" target="_blank" rel="noopener noreferrer"> <img className="Resume" src={ require("../components/css/resume.png")} alt=""/> </a>
                    </div>
                    <h5>Design & Implemented by Jimmy Pham</h5>
                </div>

            {/* </div> */}
        </div>
    )
}