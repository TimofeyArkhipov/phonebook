import './App.scss';
import {Route, BrowserRouter as Router, Link, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';

function App() {

  
  return (
    <div className="App">
      
      <Router>
        <ul className='menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
        <Routes className='content'>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
