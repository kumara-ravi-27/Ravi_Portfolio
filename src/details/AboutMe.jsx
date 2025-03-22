import React from 'react'
import './AboutMe.css'

import profilePic from "../assets/Ravi_pic.jpg";

const AboutMe = () => {
  return (
    <div>
     <h1>Self Details</h1>

     
     <div id="about">
        <h2>About Me</h2>
        <img src={profilePic} alt="Ravi Kumar" className="profile-pic" />

        
        <p>Hello! I'm Thota Ravi Kumar, a passionate Software Engineer with expertise in Frontend Developments. I love building innovative solutions and contributing to open-source projects. 🚀</p>
        <p><strong>Current Location:Giddalur, Prakasham District, Andhra Pradesh</strong> Giddalur </p>
     </div>     

     <div>
      <h1>Professinal Summary</h1>
      <p>I want to use my skills and talents to help the company grow and succeed. At the same time, I want to learn and develop as a professional, gaining new experiences and knowledge. My goal is to make a positive impact and contribute to the company's success, while also growing and improving myself.</p>
     </div>


     <div>
      <h1>Strength</h1>
        <ul className="soft-skills">
         <li>Adaptable</li>
         <li>Self-learning</li>
         <li>Enthusiastic to learn new things</li>
        </ul>
     </div>

     <div>
      <h1>Declaration</h1>
      <p>
      I hereby declare that above mentioned particulars are true to the best of my knowledge and belief.
      <br />
      Thota Ravi Kumar
      <br />
      Hyderabad
      </p>
     </div>

    </div>
    
    
  )
}

export default AboutMe
