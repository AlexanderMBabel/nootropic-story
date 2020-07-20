import React, { useState, useContext, useEffect } from 'react';

import {
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormGroup,
  Button,
} from '@material-ui/core';
import { AppContext } from '../context/app.context';
import axios from 'axios';
import { ADD_ALERT, UPDATE_STACK } from '../reducers/types';
import { FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { styles } from '../styles/stack.style';
import { StyledSlider } from '../components/StyledSlider';

const numbers = {
  1: 'first',
  2: 'second',
  3: 'third',
  4: 'forth',
  5: 'fifth',
  6: 'sixth',
};

const CreateStack = () => {
  const classes = styles();
  const history = useHistory();
  const { dispatch } = useContext(AppContext);
  const [supplement, setSupplement] = useState('');
  const [allSupplements, setAllSupplements] = useState([]);
  const [stack, setStack] = useState([]);
  const [itemNum, setItemNum] = useState(1);
  const [amount, setAmount] = useState(1);
  const [maxAmount, setMaxAmount] = useState(2);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_PRODUCT_DB)
      .then((response) => {
        setAllSupplements(response.data);
      })
      .catch((err) => dispatch({ type: ADD_ALERT, payload: err }));
  }, [dispatch]);
  useEffect(() => {
    if (supplement) {
      let selectedSupplement = allSupplements.find(
        (s) => s.product === supplement
      );
      setMaxAmount(selectedSupplement.maximumDosage);
    }
  }, [supplement, allSupplements]);

  const handleNext = () => {
    if (supplement === '') {
      dispatch({ type: ADD_ALERT, payload: 'Must select a supplement' });
    } else if (amount === null) {
      dispatch({ type: ADD_ALERT, payload: 'Must Select Amount' });
    } else {
      if (itemNum < 6) {
        setStack([...stack, { supplement, amount }]);
        setItemNum(itemNum + 1);
        setAmount(1);
        setSupplement('');
        setMaxAmount(2);
      }
    }
  };
  const handleDone = () => {
    dispatch({ type: UPDATE_STACK, payload: stack });

    history.push('/Stack/review');
  };
  return (
    <div className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <h1>
          <span>{numbers[itemNum]}</span> Supplement
        </h1>
        <FormGroup className={classes.form}>
          <FormControl className={classes.formControl}>
            <InputLabel id='supplement-label'>Supplement</InputLabel>
            <Select
              className={classes.select}
              labelId='supplement-label'
              value={supplement}
              label='Supplement'
              onChange={(e) => setSupplement(e.target.value)}>
              {allSupplements.map((supplement) => (
                <MenuItem value={supplement.product} key={supplement.product}>
                  {supplement.product}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id='amount-label' className='m-2'>
              Amount in mgs
            </InputLabel>
            <StyledSlider
              aria-label='Amount Slider'
              valueLabelDisplay='auto'
              value={amount}
              min={1}
              max={maxAmount}
              onChange={(e, value) => setAmount(value)}
            />
          </FormControl>
        </FormGroup>
        <div id='button-group' className='flex '>
          <Button
            size='large'
            color='secondary'
            variant='outlined'
            className={classes.outlineButton}
            onClick={handleDone}>
            Done
          </Button>
          <Button
            size='large'
            color='secondary'
            variant='contained'
            className={classes.button}
            onClick={handleNext}>
            Next
            <FaArrowRight className={classes.rightArrow} />
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default CreateStack;
