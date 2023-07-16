import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { HeaderResponsive } from './components/Header';
import Pricing from './components/Pricing';

function App() {

  const links = [
    { link: '/home', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/contact', label: 'Contact' },
    { link: '/pricing', label: 'Pricing' },

  ];
  
  return (
    <section>

    <HeaderResponsive links={links}/>
    <Routes>
       <Route path='/home' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/pricing' element={<Pricing/>}/>
    </Routes>
    </section>
  );
}

export default App;
