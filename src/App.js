import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { HeaderResponsive } from './components/Header';
import Pricing from './components/Pricing';
import Chat from './components/Chat';


function App() {

  const links = [
    { link: '/home', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/contact', label: 'Contact' },
    { link: '/pricing', label: 'Pricing' },
    { link: '/chat', label: 'Chat' },

  ];
  
  return (
    <section>

    <HeaderResponsive links={links}/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/pricing' element={<Pricing/>}/>
       <Route path='/chat' element={<Chat/>}/>
    </Routes>
    </section>
  );
}

export default App;
