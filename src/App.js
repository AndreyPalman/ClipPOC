import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import ClipIt from "./ClipIt";
import Chat from "./Chat";

const App = () => (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
        <Route path="/clipit" element={<ClipIt/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </Router>
);
export default App;