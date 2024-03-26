import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
