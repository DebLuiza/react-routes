import './App.scss';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import More from './Components/Pages/More/More';
import Pag1More from './Components/Pages/Generic Pages/Pag1/Pag1';
import Pag2More from './Components/Pages/Generic Pages/Pag2/Pag2';
import Pag1 from './Components/Pages/Generic Pages copy/Pag1/Pag1';
import Pag2 from './Components/Pages/Generic Pages copy/Pag2/Pag2';


function App() {
  return (
    <div className='body' >
      <Router>
          <nav className='nav'>
            <Link to='/Pag1' className='link-nav'>Home</Link>
            <Link to='/more/Pag1' className='link-nav'>More</Link>
          </nav>
          <Routes>
              <Route path='/' element={<Home/>}>
                <Route path='Pag1' element={<Pag1/>}/>
                <Route path='Pag2' element={<Pag2/>}/>
              </Route>
              <Route path='more' element={<More/>}>
                <Route path='Pag1' element={<Pag1More/>}/>
                <Route path='Pag2' element={<Pag2More/>}/>
              </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
