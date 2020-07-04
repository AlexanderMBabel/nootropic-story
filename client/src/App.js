import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Shop from './pages/Shop';
import About from './pages/About';
import NavBar from './components/NavBar';
import Shipping from './pages/Shipping';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <SideNav />

      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/Shipping' component={Shipping} />
        <Route exact path='/About' component={About} />
      </Switch>
    </div>
  );
}

export default App;
