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
import { TOGGLE_LOADING, ADD_ALERT, CLEAR_ALERTS } from './reducers/types';
import Cart from './pages/Cart';
import { makeStyles, Snackbar, IconButton } from '@material-ui/core';
import { FaWindowClose } from 'react-icons/fa';
import Stack from './pages/Stack';
import CreateStack from './pages/CreateStack';
import ReviewStack from './pages/ReviewStack';
import ProductSearch from './components/ProductSearch';

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'space-between',
    height: '100vh',
  },
}));

function App() {
  const { state, dispatch } = useContext(AppContext);
  const { alerts } = state;
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
        dispatch({ type: ADD_ALERT, payload: err.message });
      }
    );
  }, [dispatch]);

  const handleSnackClose = () => {
    dispatch({ type: CLEAR_ALERTS });
  };
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
        <Route exact path='/Stack' component={Stack} />
        <Route exact path='/Stack/create' component={CreateStack} />
        <Route exact path='/Stack/review' component={ReviewStack} />
        <Route
          exact
          path='/Shop/Search/:query'
          render={(routeProps) => (
            <ProductSearch query={routeProps.match.params.query} />
          )}
        />
      </Switch>
      <Footer />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={alerts.length > 0}
        autoHideDuration={4000}
        onClose={handleSnackClose}
        message={alerts.map((alert) => (
          <p>{alert}</p>
        ))}
        action={
          <IconButton
            size='small'
            aria-label='close'
            onClick={handleSnackClose}>
            <FaWindowClose />
          </IconButton>
        }
      />
    </div>
  );
}

export default App;
