import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
  <div>


      <div id="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Live Projects</h3>
          <p>
            <a href="https://github.com/kumara-ravi-27/Ravi_Portfolio" target="_blank"  rel="noopener noreferrer" >Shopping Mall-app1 Repo</a> |
            <a href="https://main.djtjbedieu57y.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Shopping Mall-app1 <b>LIVE</b> </a>
          </p>

          <p>
            <a href="https://github.com/kumara-ravi-27/Ravi_Portfolio" target="_blank"  rel="noopener noreferrer" >Gallery app-1 Repo</a> |
            <a href="https://main.djtjbedieu57y.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Gallery app-1 <b>LIVE</b> </a>
          </p>

          <p>
            <a href="https://github.com/kumara-ravi-27/Ravi_Portfolio" target="_blank"  rel="noopener noreferrer" >Library System management Repo</a> |
            <a href="https://main.djtjbedieu57y.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Library System management SPA <b>LIVE</b> </a>
          </p>

          <p>
            <a href="https://github.com/kumara-ravi-27/Ravi_Portfolio" target="_blank"  rel="noopener noreferrer" >Current Portfolio Repo</a> |
            <a href="https://main.djtjbedieu57y.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Current Portfolio  <b>LIVE</b> </a>
          </p>

        </div>
      </div>


       

     <div id="portfolio">
       <h3>Portfolio:</h3>
       <ul>
         <li>Designed and developed a professional job resume portfolio, showcasing my skills, experience, and achievements.</li>
         <li>The portfolio includes sections on About Me, Education, Projects, Skills, and Contact.</li>
         <li>Highlighted my relevant projects, technical and soft skills, and professional contact information.</li>
         <li>Demonstrated expertise in creating a visually appealing and user-friendly online presence.</li>
         <li>Effective portfolio that enhances my job search and career development efforts.</li>
       </ul>
     
       <h3>Shopping Mall-app1:</h3>
       <ul>
         <li>Designed and developed a responsive ReactJS front-end application for a shopping mall interface, featuring dynamic navigation categories for Men, Women, Children clothing, and Beauty products.</li>
         <li>Implemented seamless user authentication UI with Sign In and Sign Up components enhancing user onboarding experience.</li>
         <li>Utilized React component-based structure and hooks for efficient state management and code reusability.
         </li>
         <li>Focused on intuitive navigation and clean user interface ensuring smooth browsing across all device sizes.
         </li>
         <li>Gathered and comprehended business requirements provided by the client as per the User Story.</li>
         <li>Delivered a frontend-only single-page application demonstrating strong skills in ReactJS, UI/UX principles, and responsive design without backend dependencies.</li>
       </ul>


       <h3>Gallery app</h3>
       <ul>
         <li>
          Developed a dynamic Gallery web application using ReactJS, implementing efficient state and props management to handle multiple image folders and user interactions.
         </li>
         <li>
          Designed features to create, save, and organize images into different customizable folders, including a dedicated Favorites folder for quick access to preferred items.
         </li>
         <li>
          Focused on creating a responsive and intuitive user interface with seamless folder navigation and image management capabilities.
         </li>
         <li>
          Demonstrated proficiency in React component architecture, state hooks, and props passing to deliver a modular, scalable front-end application.
         </li>
         <li>
          Enhanced user experience by enabling interactive folder operations and simplified image organization without backend dependencies.
         </li>
       </ul>




       <h3>Library Management system (PostgreSQL):</h3>
       <ul>
         <li>Developed a relational database project <b>Library System Management</b> using <b>PostgreSQL</b>, leveraging <b>pgAdmin4</b> as the primary database administration and development interface.</li>
         <li>Imported CSV data into normalized tables including <b>Books, Branch, Employees, Members, Issued_Status, and Return_Status</b> through pgAdmin4's intuitive import and query tools.
         </li>
         <li>Designed and enforced relational integrity by creating foreign key constraints between tables using pgAdmin4 to ensure <b>data consistency and referential accuracy.</b>  </li>
         <li>Crafted complex SQL queries with customized filters and conditions in pgAdmin4's Query Tool to address specific library management questions and generate actionable insights.</li>
         <li>Demonstrated proficiency in <b>database design, data modeling, and advanced SQL querying</b> , efficiently managing schema, data, and transactions via the pgAdmin4 GUI environment.</li>
         <li>Effectively utilized <b>PostgreSQL</b> features to enhance data retrieval and reporting capabilities for library operations.</li>
         
       </ul>


       <h3>Retail_sales (PostgreSQL):</h3>
       <ul>
         <li>
          Developed a comprehensive Retail Sales Analysis database in <b>PostgreSQL using pgAdmin4</b>, designed to enable detailed exploration and business insights from transactional sales data.
         </li>
         
         <li>
          Created and normalized a retail_sales table capturing transaction details including <b>date, time, customer demographics, product category, pricing, and sales metrics.</b> 
         </li>
         
         <li>
          Conducted data cleaning by identifying and removing incomplete records, ensuring <b>accuracy and reliability</b> in subsequent analysis.
         </li>
         
         <li>
          Performed extensive exploratory data analysis (EDA), including counts of total sales, customers, and product categories to understand dataset characteristics.
         </li>
         
         <li>
          Wrote advanced SQL queries to answer core business questions such as daily sales retrieval, <b>high-volume transactions filtering</b>, category-wise sales aggregation, and customer segmentation based on gender and age.
         </li>
         
         <li>
          Applied window functions and ranking techniques to analyze monthly sales trends and identify best-selling months by year.
         </li>
         
         <li>
          Extracted actionable insights like top-performing customers, sales by time shifts (morning, afternoon, evening), and unique customer counts per product category.
         </li>
         
         <li>
          Demonstrated expertise in SQL query formulation, data modeling, and retail business analytics, delivering valuable data-driven decision support.
         </li>
       </ul>
    



       
     </div>

  </div>




  )
}

export default Projects
