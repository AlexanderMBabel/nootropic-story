import { makeStyles } from '@material-ui/core';

export const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  paper: {
    padding: 20,
  },
  avatar: {
    width: '200px',
    height: '200px',
    marginRight: 30,
  },
  prices: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '& p': {
      fontSize: '2rem',
    },
  },
  select: {
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  trash: {
    marginRight: 5,
  },
  divider: {
    width: '100%',
  },
  totals: {
    padding: '30px 12px 12px 12px',
    display: 'flex',
    flexDirection: 'column',
  },
  checkOutBtn: {
    justifySelf: 'center',
  },
  paperEmpty: {
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
