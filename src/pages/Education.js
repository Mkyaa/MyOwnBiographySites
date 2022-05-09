import React from 'react';



function Education(props) {
    return (
        <section className='general-container'>
            <header className='general-header'>
                <h3>EDUCATION</h3>
                <h1>EDUCATION</h1>
            </header>
            <section className='edu-container'>
              <button class="accordion">SULEYMAN DEMIREL UNIVERSITY</button>
              <div class="panel">
                <ul>
                  <li>Education : Econometrics</li>
                  <div>
                    <li>Start Date : 2014</li>
                    <li>End Date : 2018</li>
                  </div>
                  <li>Degree : Bachelor's</li>
                  <li>Graduation Grade : 2,75 / 4,00</li>
                </ul>
              </div>
              
              <button class="accordion">YILDIZ TECHNICAL UNIERSITY</button>
              <div class="panel">
                <ul>
                  <li>Education : Computer Programming</li>
                  <div>
                    <li>Start Date : 2014</li>
                    <li>End Date : 2018</li>
                  </div>
                  <li>Degree : Associate's</li>
                  <li>Graduation Grade : 2,75 / 4,00</li>
                </ul>
              </div>
              
              <button class="accordion">A. AND N. BILIMLI ANATOLIAN TECHNICAL HIGHSCHOOL </button>
              <div class="panel">
                <ul>
                  <li>Education : Web Programming</li>
                  <div>
                    <li>Start Date : 2008</li>
                    <li>End Date : 2012</li>
                  </div>
                  <li>Graduation Grade : 85 / 100</li>
                </ul>
              </div>
            </section>
        </section>
    );
}

export default Education;