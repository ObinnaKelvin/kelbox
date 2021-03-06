import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Operations from './pages/Operations';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Support from './pages/Support';
import Team from './pages/Team';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Alt + Up-Arrow takes it up */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/operations" component={Operations}></Route>
          <Route path="/reports" component={Reports}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/support" component={Support}></Route>
          <Route path="/team" component={Team}></Route>
        </Switch>
      </Router>
      {/* <p>Kelbox loading...</p> */}
    </div>
  );
}

export default App;
