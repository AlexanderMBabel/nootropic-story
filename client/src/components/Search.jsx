import React, { useState, useContext } from 'react';
import { InputAdornment, TextField, Button } from '@material-ui/core';
import { FaSearch } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/app.context';
import { ADD_ALERT } from '../reducers/types';

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    color: theme.palette.secondary.main,
  },
  searchButton: {
    '&:focus': {
      outline: 'none',
    },
  },
}));

const Search = () => {
  const [search, setSearch] = useState('');
  const classes = useStyles();
  const history = useHistory();
  const { dispatch } = useContext(AppContext);

  const handleSearch = () => {
    if (search.length < 3) {
      dispatch({
        type: ADD_ALERT,
        payload: 'search term must be greater than 2 characters',
      });
    } else {
      history.push(`/Shop/Search/${search}`);
    }
  };
  return (
    <div className='p-3 flex justify-between'>
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        variant='outlined'
        label='Search'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <FaSearch className={classes.searchIcon} />
            </InputAdornment>
          ),
        }}
      />
      <Button className={classes.searchButton} onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default Search;
