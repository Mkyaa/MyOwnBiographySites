import React from 'react';

function Skills(props) {
    return (
        <section className='general-container'>
            <header className='general-header'>
                <h3>MY SKILLS</h3>
                <h1>MY SPECIALTY</h1>
                <span>In my frontend adventure, my beginner level skills and my objective scoring are as follows. I'm still trying to improve my skills and dedicate enough time for this.
                 </span>
            </header>
            <section className='skills-specials'>
                <div className='skills-box'>
                    <h3>HTML</h3>
                    <div className='skills-pro-bar'>
                        <h5 className='skills-title1'>70%</h5>
                        <div className='skills-bar'>
                            <div className='skills-progress1'></div>
                            <div className='skill-progress-dot1'></div>
                        </div>
                    </div>
                </div>
                <div className='skills-box'>
                    <h3>CSS</h3>
                    <div className='skills-pro-bar'>
                        <h5 className='skills-title2'>65%</h5>
                        <div className='skills-bar'>
                            <div className='skills-progress2'></div>
                            <div className='skill-progress-dot2'></div>
                        </div>
                    </div>
                </div>
                <div className='skills-box'>
                    <h3>JS</h3>
                    <div className='skills-pro-bar'>
                        <h5 className='skills-title3'>50%</h5>
                        <div className='skills-bar'>
                            <div className='skills-progress3'></div>
                            <div className='skill-progress-dot3'></div>
                        </div>
                    </div>
                </div>
                <div className='skills-box'>
                    <h3>React</h3>
                    <div className='skills-pro-bar'>
                        <h5 className='skills-title4'>55%</h5>
                        <div className='skills-bar'>
                            <div className='skills-progress4'></div>
                            <div className='skill-progress-dot4'></div>
                        </div>
                    </div>
                </div>
                <div className='skills-box'>
                    <h3>C#</h3>
                    <div className='skills-pro-bar'>
                        <h5 className='skills-title5'>30%</h5>
                        <div className='skills-bar'>
                            <div className='skills-progress5'></div>
                            <div className='skill-progress-dot5'></div>
                        </div>
                    </div>
                </div>
                <div className='skills-box'>
                    <h3>Photoshop</h3>
                    <div className='skills-pro-bar'>
                        <h5 className='skills-title6'>50%</h5>
                        <div className='skills-bar'>
                            <div className='skills-progress6'></div>
                            <div className='skill-progress-dot6'></div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Skills;