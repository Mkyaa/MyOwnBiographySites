import React from 'react';

function Contact(props) {
    return (
        <section className='general-container'>
            <header className='general-header'>
                <h3>GET IN TOUCH</h3>
                <h1>CONTACT</h1>
            </header>
            <section className='contact-content'>
                <div className='contact-info'>
                    <div className='contact-info-box'>
                        <i className='contact-ico icon-sphere'></i>
                        <span><a>kayamert@live.com</a></span>
                    </div>
                    <div className='contact-info-box'>
                        <i className='contact-ico icon-map2'></i>
                        <span>Beylikdüzü, İstanbul</span>
                    </div>
                    <div className='contact-info-box'>
                        <i className='contact-ico icon-phone'></i>
                        <span>+90 544 510 66 34</span>
                    </div>
                </div>
                <div className='contact-form'>
                    <form>
                        <input type="text" name='name' placeholder='Name'></input>
                        <input type="text" name='email' placeholder='Email'></input>
                        <input type="text" name='subject' placeholder='Subject'></input>
                        <textarea type="text" name='message' placeholder='Message'></textarea>
                        <input type="submit" value="Send Message"></input>
                    </form>
                </div>
            </section>
        </section>
    );
}

export default Contact;