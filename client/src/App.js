import React, { useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Shop from './pages/Shop';
import About from './pages/About';
import NavBar from './components/NavBar';
import Shipping from './pages/Shipping';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import axios from 'axios';
import Product from './pages/Product';
import { AppContext } from './context/app.context';
import { TOGGLE_LOADING, ADD_ALERT } from './reducers/types';
import Cart from './pages/Cart';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    height: '90vh',
  },
}));

function App() {
  const { dispatch } = useContext(AppContext);
  const classes = useStyles();
  useEffect(() => {
    axios.interceptors.request.use(
      function (config) {
        dispatch({ type: TOGGLE_LOADING });
        return config;
      },
      function (err) {
        dispatch({ type: ADD_ALERT, payload: err });
      }
    );
    axios.interceptors.response.use(
      function (data) {
        dispatch({ type: TOGGLE_LOADING });
        return data;
      },
      function (err) {
        dispatch({ type: ADD_ALERT, payload: err });
      }
    );
  }, [dispatch]);
  return (
    <div className={classes.app}>
      <NavBar />
      <SideNav />

      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/Shop' component={Shop} />
        <Route
          exact
          path='/Shop/:category'
          render={(routeProps) => (
            <Shop category={routeProps.match.params.category} />
          )}
        />
        <Route
          exact
          path='/product/:product'
          render={(routeProp) => (
            <Product product={routeProp.match.params.product} />
          )}
        />
        <Route exact path='/Shipping' component={Shipping} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Cart' component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
