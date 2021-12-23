
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import ClipIt from "./ClipIt";
import Chat from "./Chat";
import Home from "./Home";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/clipit">clip it</Link>
              </li>
              <li>
                <Link to="/chat">Chat</Link>
              </li>
            </ul>
            <Routes>
              <Route exact path='/' element={< Home/>}/>
              <Route exact path='/clipit' element={< ClipIt/>}/>
              <Route exact path='/chat' element={< Chat/>}/>
            </Routes>
          </div>
        </Router>
    );
  }
}

export default App;
