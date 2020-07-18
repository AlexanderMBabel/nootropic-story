import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormGroup,
  Slider,
  Button,
} from '@material-ui/core';
import { AppContext } from '../context/app.context';
import axios from 'axios';
import { ADD_ALERT, UPDATE_STACK } from '../reducers/types';
import { FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '60vh',
    backgroundColor: '#d96666',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23d96666' width='11' height='11'/%3E%3Crect fill='%23d96964' x='10' width='11' height='11'/%3E%3Crect fill='%23da6b61' y='10' width='11' height='11'/%3E%3Crect fill='%23da6e5f' x='20' width='11' height='11'/%3E%3Crect fill='%23da705d' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23da735b' y='20' width='11' height='11'/%3E%3Crect fill='%23d97659' x='30' width='11' height='11'/%3E%3Crect fill='%23d97957' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23d87c56' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23d77e54' y='30' width='11' height='11'/%3E%3Crect fill='%23d68153' x='40' width='11' height='11'/%3E%3Crect fill='%23d58452' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23d48751' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23d38a50' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23d28d4f' y='40' width='11' height='11'/%3E%3Crect fill='%23d0904f' x='50' width='11' height='11'/%3E%3Crect fill='%23cf924f' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23cd954f' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23cb984f' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23c99b4f' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23c79e50' y='50' width='11' height='11'/%3E%3Crect fill='%23c5a051' x='60' width='11' height='11'/%3E%3Crect fill='%23c3a352' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23c1a653' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23bfa855' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23bdab57' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23baad59' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23b8b05b' x='70' width='11' height='11'/%3E%3Crect fill='%23b5b25e' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23b3b560' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23b0b763' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23aeba66' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23abbc69' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23a9be6d' x='80' width='11' height='11'/%3E%3Crect fill='%23a6c170' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23a3c374' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23a0c578' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%239ec77c' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%239bc980' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%2398cc84' x='90' width='11' height='11'/%3E%3Crect fill='%2395ce89' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%2392d08d' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%238fd292' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%238cd496' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%238ad69b' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%2387d7a0' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%2384d9a5' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%2381dbaa' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%237eddaf' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%237cdfb4' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%2379e0b9' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%2376e2be' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%2374e4c3' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%2372e5c8' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%2370e7cd' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%236ee8d2' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%236cead7' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%236bebdc' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%236aede1' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%2369eee6' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'fill',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2d3748',
    '& h1': {
      fontSize: '3rem',
      fontWieght: 'semibold',
      letterSpacing: '-3px',
    },
    '& p': {
      padding: '10px 20px',
    },
  },
  paper: {
    marginTop: 30,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '4rem',
    color: theme.palette.secondary.main,
    margin: 20,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    margin: 20,
  },
  primaryIcon: {
    color: theme.palette.primary.main,
  },
  form: {
    display: 'flex',
  },
  formGroup: {
    padding: 20,
  },
  select: {
    minWidth: '200px',
  },
  formControl: {
    minWidth: '300px',
    paddingBottom: 30,
  },
  button: {
    margin: theme.spacing(4),
    color: 'white',
  },
  rightArrow: {
    marginLeft: 10,
  },
  outlineButton: {
    margin: theme.spacing(4),
    color: grey[800],
  },
}));

const PrettoSlider = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
}))(Slider);

const numbers = {
  1: 'first',
  2: 'second',
  3: 'third',
  4: 'forth',
  5: 'fifth',
  6: 'sixth',
};

const CreateStack = () => {
  const classes = useStyles();
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
            <InputLabel id='amount-label'>Amount in mgs</InputLabel>
            <PrettoSlider
              // labelId='amount-label'
              aria-label='Amount Slider'
              valueLabelDisplay='auto'
              value={amount}
              min={1}
              max={maxAmount}
              // defaultValue={1}
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
