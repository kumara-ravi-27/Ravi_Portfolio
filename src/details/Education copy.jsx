import React from 'react'
import './Education.css'

const Education = () => {
  return (

    <div>


      <div id="education">
          <h2>Education</h2>
           <ul className="timeline">
            <li>
              <div className="content">
                <h3>BTech</h3>
                <p>V R Siddhartha Engineering College <span>(2017 - 2021)</span></p>
              </div>
              <div className="circle"></div>
            </li>
            <li>
              <div className="content">
                <h3>Intermediate</h3>
                <p>Narayana Junior College <span>(2015 - 2017)</span></p>
              </div>
              <div className="circle"></div>
            </li>
            <li>
              <div className="content">
                <h3>High School</h3>
                <p>The Giddalur Public School <span>(2015)</span></p>
              </div>
              <div className="circle"></div>
            </li>
           </ul>
      </div>



       {/* 
      <div>
        <ul className="timeline">
                <li><strong>BTech</strong>   -  V R Siddhartha Engineering College   (2017-2021)</li>
      
                <li><strong>Intermediate</strong>  - Narayana Junior College (2015-2017)</li>
      
                <li><strong>High School</strong>  - The Giddalur Public School (2015)</li>
                
              </ul>
      </div> 
      */}



    </div>





  )
}


export default Education






