import React from 'react';

function Services(props) {
    return (
        <div>
        <section className='general-container'>
            <div className='services-content'>
                <header className='general-header'>
                    <h3>WHAT I DO?</h3>
                    <h1>HERE ARE SOME OF MY<br/> EXPERTISE</h1>
                </header>
                <div className='services-exp'>
                    <div className='ser-exp-box br-btm1'>
                    <div className='ser-icon-box icon-stats-dots blue'>
                            <div className='top-arr blue-border'></div>
                            <div className='bot-arr blue-border'></div> 
                    </div>
                        <div className='ser-exp-exp'>
                            <h3>ANALYTICAL THINKING</h3>
                            <p>I can produce practical solutions for complex problems</p>
                        </div>
                    </div>
                    <div className='ser-exp-box br-btm2'>
                    <div className='ser-icon-box icon-magic-wand red'>
                            <div className='top-arr red-border'></div>
                            <div className='bot-arr red-border'></div> 
                    </div>
                        <div className='ser-exp-exp'>
                            <h3>CREATIVITY AND INNOVATION</h3>
                            <p>I help companies realize their vision and mission by adding added value with my innovative thoughts.</p>
                        </div>
                    </div>
                    <div className='ser-exp-box br-btm3'>
                    <div className='ser-icon-box icon-tree yellow'>
                            <div className='top-arr yellow-border'></div>
                            <div className='bot-arr yellow-border'></div> 
                    </div>
                        <div className='ser-exp-exp'>
                            <h3>SOLUTION ORIENTED</h3>
                            <p>I focus on solutions not problems and I can spot sources that no one else spot</p>
                        </div>
                    </div>
                    <div className='ser-exp-box br-btm4'>
                    <div className='ser-icon-box icon-users purple'>
                            <div className='top-arr purple-border'></div>
                            <div className='bot-arr purple-border'></div> 
                    </div>
                        <div className='ser-exp-exp'>
                            <h3>TEAMWORK</h3>
                            <p>I enjoy to act together and can do my duty in the best way</p>
                        </div>
                    </div>
                    <div className='ser-exp-box br-btm5'>
                    <div className='ser-icon-box icon-clipboard lightblue'>
                            <div className='top-arr lightblue-border'></div>
                            <div className='bot-arr lightblue-border'></div> 
                    </div>
                        <div className='ser-exp-exp'>
                            <h3>PROJECT MANAGEMENT</h3>
                            <p>I have the discipline of planning, organizing, procuring and managing resources  to achieve and complete the project's goals and objectives.</p>
                        </div>
                    </div>
                    <div className='ser-exp-box br-btm6'>
                    <div className='ser-icon-box icon-bulb darkblue'>
                            <div className='top-arr darkblue-border'></div>
                            <div className='bot-arr darkblue-border'></div> 
                    </div>
                        <div className='ser-exp-exp'>
                            <h3>INNOVATIVE IDEAS</h3>
                            <p>I can generate new ideas by seeing problems from a wider perspective.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <footer className='services-footer'>
                <div className='ft-box'>
                    <h1>309</h1>
                    <p>CUPS OF COFFEE</p>
                </div>
                 <div className='ft-box'>
                    <h1>356</h1>
                    <p>PROJECTS</p>
                </div>
                 <div className='ft-box'>
                    <h1>30</h1>
                    <p>CLIENTS</p>
                </div>
                 <div className='ft-box'>
                    <h1>10</h1>
                    <p>PARTNERS</p>
                </div>
        </footer>
        </div>
    );
}

export default Services

