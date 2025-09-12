import React from 'react'
import './AboutMe.css'

import profilePic from "../assets/Ravi_pic.jpg";

const AboutMe = () => {
  return (
    <div>
     <h1>Self Details</h1>

     
{/* 
//•
 */}

     
     <div id="about">
        <h2>About Me</h2>
        <img src={profilePic} alt="Ravi Kumar" className="profile-pic" />

        
        <p>Hello! I'm Thota Ravi Kumar, Passionate Software Engineer specializing in web development and open-source contributions, dedicated to building innovative, user-focused solutions. Experienced in modern frameworks and teamwork, I thrive on delivering efficient applications and advancing technology through collaboration, continuous learning, and creative problem-solving. 🚀</p>
        <p><strong>MyLocation: Hyderabad, Telangana</strong> </p>
     </div>     

     <div>
      <h2>EXECUTIVE SUMMARY</h2>
      <p>
        Full Stack Application Developer with 3.5+ years at Infosys, specializing in <b>ReactJS, Python (Flask), and PostgreSQL</b>. Deployed 15+ scalable web applications using AWS RDS, serving 10,000+ users while ensuring secure data handling. Recognized with the 'Exceptional Delivery' award in 2023 for optimizing database management systems that improved query performance by 40%.
      </p>
     </div>


       <div>
      <h2>Languages</h2>
        <ul className="soft-skills">
         <li>English</li>
         <li>Telugu</li>
         <li>Hindi</li>
        </ul>
     </div>

     

     <div>
      <h2>Life in Infosys</h2>
      <ul className="soft-skills">
         <li>Collaborated with <b>diverse projects</b>, global teams to deliver scalable software solutions, utilizing agile methodologies and best practices.</li>
         <li>Contributed to large-scale, cross-functional projects, consistently meeting tight deadlines and quality standards in fast-paced environments.</li>
         <li>Engaged in <b>continual learning and upskilling</b> through Infosys training programs and mentorship culture, mastering new technologies and frameworks.</li>
         <li>Demonstrated strong problem-solving and analytical skills while supporting business-critical applications and enhancing system performance.</li>
         <li>Embraced Infosys culture of inclusiveness and innovation by participating in <b>knowledge-sharing sessions and idea forums</b>  </li>
         <li>Actively participated in Infosys cultural and social events, fostering team bonding, work-life balance, and a collaborative workplace environment.</li>
         
        </ul>
     </div>

     <div>
      <h2>Awards & Achievements</h2>
        <ul className="soft-skills">
         <li>Infosys “Exceptional Delivery” Award, 2023</li>
        </ul>

     </div>




{/* 
     <div>
      <h1>Declaration</h1>
      <p>
      I hereby declare that above mentioned particulars are true to the best of my knowledge and belief.
      <br />
      Thota Ravi Kumar
      <br />
      Hyderabad
      </p>
     </div> */}

    </div>
    
    
  )
}

export default AboutMe
