import Navbar from './components/Navbar'
import Content from './components/Content'
import './css/main.css'
import './css/icon.css'

function App() {
  return (
    <div className='site-page'>
      <div className='aside-burger-menu icon-menu'></div>
      <div className='aside-left'>
        <div className='aside-navbar'>
          <div className='text-center'>
            <div className='prof-pic'></div>
            <h1><a>Mert Kaya</a></h1>
            <span><a>FRONT-END DEVELOPER</a> IN TURKEY</span>
          </div>
          <div className='main-menu'>
            <Navbar/>
          </div>
          <div className='footer'>
            <div className='copyright'>
            <p>© Copyright ©2022 All rights reserved | <br/> This template is made with React by <a>MertKaya</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className='main-content'>
        <Content/>
      </div>
    </div>
  );
}

export default App;
