import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Experience from './pages/Experience';
import SideNav from './components/SideNav';
import Projects from './pages/Projects';
import Webdev from './pages/Webdev';

function App() {
  return (
    <div className='App'>
    <div className='content'>
      <Home />
      <Webdev />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
    <SideNav />
    </div>
  );
}

export default App;
