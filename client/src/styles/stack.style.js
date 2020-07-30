import { makeStyles } from '@material-ui/core/';
import { grey } from '@material-ui/core/colors';

export const styles = makeStyles((theme) => ({
  '@keyframes fade': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },

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
    '& h3': {
      marginBottom: 0,
      paddingBottom: 0,
      color: grey[800],
      fontSize: '1.3rem',
    },
    '& p': {
      margin: 0,
      padding: 0,
      color: grey[600],
    },
  },
  card: {
    margin: 20,
    transition: 'all 500ms ease-in',
    animation: '$fade 500ms forwards ease-in',
    minHeight: 225,
  },

  primaryIcon: {
    color: theme.palette.primary.main,
  },
  form: {
    display: 'flex',
  },
  formGroup: {
    paddingTop: 20,
    paddingButtom: 20,
  },
  formControlSelect: {
    marginTop: 20,
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

  span: {
    marginLeft: 7,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '300px',
    width: '100%',
    '& p': {
      width: '33%',
    },
  },
  cartButton: {
    color: 'white',
    marginLeft: 5,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
