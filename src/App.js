import './App.css';
import { FirstComponent } from './components/FirstComponent';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Teams } from './components/Teams'

function App() {
  let Component
  switch (window.location.pathname) {
    case "/Teams":
      Component = <Teams />
      break;
  
    default:
      Component = <FirstComponent />
      break;
  }
  return (
    <div className="App">
        <NavBar/>
        {Component}
        <Footer/>
    </div>
  );
}

export default App;
