import React from 'react';
import { Router,Routes,Route } from 'react-router-dom';
import GraphicDesign from './GraphicDesign';
import Apps from './Apps';
import WebDesign from './WebDesign';
import Software from './Software';

function WorkContentRouter(props) {
    return (
        <div className='work-router-container'>
        <Routes>
            <Route path='/' element={<GraphicDesign/>}></Route>
            <Route path='/GraphicDesign' element={<GraphicDesign/>}></Route>
            <Route path='/WebDesign' element={<WebDesign/>}></Route>
            <Route path='Software' element={<Software/>}></Route>
            <Route path='Apps' element={<Apps/>}></Route>
        </Routes>
        </div>
    );
}

export default WorkContentRouter;