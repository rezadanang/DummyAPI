import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Post from './Post';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./home";
import Tag from "./tag";
import UPage1 from "./User Page/page1";
import UPage2 from "./User Page/page2";
import UPage3 from "./User Page/page3";

function App() {
  return (
  <Router>
      <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/post" exact component={Post} />
      <Route path="/tag" exact component={Tag} />
      <Route path="/User Page/page1" exact component={UPage1} />
      <Route path="/User Page/page2" exact component={UPage2} />
      <Route path="/User Page/page3" exact component={UPage3} />
    </Switch>
  </Router>
  );
}


export default App;
