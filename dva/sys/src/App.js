import React from 'react';
import 'antd/dist/antd.css'
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Menudown from './components/Menudown'
import Goodlist from './router/Goodlist'
import Detail from './router/Detail'
import Addgood from './router/Addgood';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>XXX后台管理系统</h2>
        </header>
        <div style={{ 'height': '90%', 'width': '100%' }}>
          <article>
            <Menudown></Menudown>
          </article>
          <article>
            <Route path="/goodlist" component={Goodlist} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/addgood" component={Addgood} />
          </article>
        </div>
      </div>
    </Router>
  );
}

export default App;
