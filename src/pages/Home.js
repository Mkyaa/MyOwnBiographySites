import React from 'react';
import '../assets/js/application-min'


function Home(props) {
    return (
        <div className='slider'>
            <div className='slide activeslide'>
                <section className='inner'>
                    <h1>Hi!, I'm Mert</h1>
                    <p>100% React templates Made by me</p>
                    <span>DOWNLOAD CV<i className='icon-briefcase'></i></span>
                </section>
            </div>
            <div className='slide'>
                <section className='inner'>
                    <h1>I'am a Developer</h1>
                    <p>100% html5 css templates</p>
                    <span>VIEW PORTFOLIO<i className='icon-briefcase'></i></span>
                </section>
            </div>
        </div>
    );
}

export default Home;