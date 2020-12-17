import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Alt + Up-Arrow takes it up */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/reports" component={Reports}></Route>
          <Route path="/products" component={Products}></Route>
        </Switch>
      </Router>
      <p>Kelbox loading...</p>
    </div>
  );
}

export default App;
