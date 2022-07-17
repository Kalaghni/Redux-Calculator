import reactLogo from './react.png';
import reduxLogo from './redux.png';
import './App.css';
import Calculator from './components/calculator';
import {useDispatch} from "react-redux";
import {appendSymbol, appendNum, back, equals, clear} from "./actions";

function App() {

  const dispatch = useDispatch();

  window.onkeydown = (event) => {
    if (!isNaN(event.key)) {
      dispatch(appendNum(event.key));
    }
    else if (event.key.toLowerCase() === "c") {
      dispatch(clear());
    }
    else if (event.key.toLowerCase() === "x") {
      dispatch(appendSymbol("*"));
    }
    else if (event.keyCode === 8) {
      dispatch(back());
    }
    else if (event.keyCode === 13 || event.key === "=") {
      dispatch(equals());
    }
    else if (!event.key.match(/[a-z]/i)) {
      dispatch(appendSymbol(event.key))
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='logos'>
          <img 
            className='App-logo' 
            src={reactLogo}
            alt="react-logo"/>
          <img 
            className='Redux-logo' 
            src={reduxLogo}
            alt="redux-logo"/>
        </div>
          <h3 className='App-title'>Redux Calculator</h3>
          <Calculator/>
          <br/>
          <small>&copy; Josh Wood - 2022</small>
      </header>
    </div>
  );
}

export default App;
