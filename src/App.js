import logo from './logo.svg';
import './App.css';
import Header from './components/header.component';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Services from './components/services.component';
import About from './components/about.component';
import Contact from './components/contact.component';

function App() {
  return (
    <div className="App" >
<Router style={{ textDecoration: 'none' }}>
  <Header />
      <Route path="/services" exact component={Services} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      
      </Router>
      


    </div>
  );
}

export default App;
