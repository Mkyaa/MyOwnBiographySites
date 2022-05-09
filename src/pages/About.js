import React from 'react';

function about(props) {
    return (
        <section className='general-container'>
            <header className='general-header'>
                <h3>ABOUT US</h3>
                <h1>WHO AM I?</h1>
                <span><b>Hi, I'm Mert Kaya </b>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</span>
                <span>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</span>
            </header>
            <section className='about-exp'>
                <div className='animateBox bd-bt1'>
                    <div className='ab-img-cont'>
                        <div className='ab-img1'></div>
                    </div>
                    <div className='ab-pr-cont'>
                        <h3> HTML </h3>
                    </div>
                </div>
                <div className='animateBox bd-bt2'>
                    <div className='ab-img-cont'>
                        <div className='ab-img2'></div>
                    </div>
                    <div className='ab-pr-cont'>
                        <h3> CSS </h3>
                    </div>
                </div>
                <div className='animateBox bd-bt3'>
                    <div className='ab-img-cont'>
                        <div className='ab-img3'></div>
                    </div>
                    <div className='ab-pr-cont'>
                        <h3> JS </h3>
                    </div>
                </div>
                <div className='animateBox bd-bt4'>
                    <div className='ab-img-cont'>
                        <div className='ab-img4'></div>
                    </div>
                    <div className='ab-pr-cont'>
                        <h3> REACT </h3>
                    </div>
                </div>
            </section>
            <footer className='hire-me'>
                <h2>I am happy to know you. We will be happy to see you among us !</h2>
                <a>HIRE ME</a>
            </footer>
        </section>
    );
}

export default about;

