import React from 'react';
import 'antd/dist/antd.css'
import './App.css';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import Menudown from './components/Menudown'
import Goodlist from './router/Goodlist'
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <div style={{ 'height': '90%', 'width': '100%' }}>
          <article>
            <Menudown></Menudown>
          </article>
          <article>
            <Route path="/goodlist" component={Goodlist} />
          </article>
        </div>
      </div>
    </Router>
  );
}

export default App;
