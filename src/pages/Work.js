import React from 'react';
import { Link } from 'react-router-dom';
import WorkContentRouter from '../components/Works/WorkContentRouter';


function Work(props) {
    return (
        <section className='general-container'>
            <header className='general-header'>
                <h3>MY WORK</h3>
                <h1>RECENT WORK</h1>
            </header>
            <nav className='work-menu'>
                <ul>
                    <li className='work-menu-li'>
                        <Link to={'/Work/GraphicDesign'} className='work-link'>Graphic Design</Link>
                    </li>
                    <li className='work-menu-li'>
                    <Link to={'/Work/WebDesign'} className='work-link'>Web Design</Link>
                    </li>
                    <li className='work-menu-li'>
                        <Link to={'/Work/Software'} className='work-link'>Software</Link>
                    </li>
                    <li className='work-menu-li'>
                        <Link to={'/Work/Apps'} className='work-link'>Apps</Link>
                    </li>
                </ul> 
            </nav>
            <section className='work-content'>
                <WorkContentRouter/>
            </section>
        </section>
    );
}

export default Work;