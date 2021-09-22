import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    margin: '0',
    width: '50%',
  },

  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse"
    },
    image: {
      margin: '0',
      width: '100%',
      borderRadius: '10px',
    },
    appBar: { 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
     }
    }

}));