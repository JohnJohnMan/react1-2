import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import CommentList from './CommentList';
import Counter from './Counter';
import MeasureEx from './MeasureEx';
import Accommodate from './Accommodate';
import Toggle from './Amrk';
import MyButton from './MyButton';
import LoginControl from './LoginControl';
import MainPage from './MainPage';
import LandingPage from './LandingPage';

function App() {
  return (
    <>
      <LandingPage />
    </>
    /*<div className="App">
      <CommentList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello !!!Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Welcome name = "전준만"/> 
    </div> */
  );
}

export default App;

//npx create-react-app name