import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import App2 from './App2';

let app = <App />
const DontUseMeForReal = () => {
  return (
      <div className="App" onClick={handleSelect}>
       <a href="/"  className="x" id="lsu1">State 1</a> &nbsp;
       <a href="/"  className="x" id="lsu2">State 2</a> &nbsp;


       {/* Add as many as you have exercises, but remember className="x" */}
       {app}
      </div>
  )
}
function handleSelect(event) {
  event.preventDefault();
  if(event.target.className!=="x"){
    return
  }  
  const id = event.target.id;
  switch (id) {
      case "lsu1": app = <App />; break;
      case "lsu2": app = <App2 />; break;

  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));

