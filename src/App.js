import logo from './logo.svg';
import './App.css';
import Header from './components/header.component';

function App() {
  return (
    <div className="App" >

      <Header />
      
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
      </header>


    </div>
  );
}

export default App;
