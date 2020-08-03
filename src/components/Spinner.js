import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = theme => ({
  spinner: {
    position: 'fixed',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
});

class Spinner extends React.Component {

  render() {
    const { classes } = this.props;
    if (this.props.loading) {
      return (
        <div className={classes.spinner}>
          <div style={{
            position: 'absolute', 
            left: '50%', 
            top: '50%',
            transform: 'translate(-50%, -50%)'}}>
            <CircularProgress />
          </div>
        </div>
      );
    }

    return null;
  }
}
export default withStyles(useStyles)(Spinner);