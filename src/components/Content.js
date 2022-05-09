import React from 'react';
import { Router,Routes,Route } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Skills from '../pages/Skills'
import Education from '../pages/Education'
import Experience from '../pages/Experience'
import Work from '../pages/Work'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'


function Content(props) {
    return (
        <div className='main-container'>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/Home' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Services' element={<Services/>}></Route>
            <Route path='/Skills' element={<Skills/>}></Route>
            <Route path='/Education' element={<Education/>}></Route>
            <Route path='/Experience' element={<Experience/>}></Route>
            <Route path='/Work' element={<Work/>}></Route>
            <Route path='/Work/*' element={<Work/>}></Route>
            <Route path='/Blog' element={<Blog/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
        </div>
    );
}

export default Content;