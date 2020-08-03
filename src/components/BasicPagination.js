import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(7),
    },
  },
});

class BasicPagination extends React.Component {
  handleChange = (event, value) => {
    event.preventDefault();
    this.props.onSubmit(this.props.term, value);
  }

  render() {
    const { classes } = this.props;

    if (this.props.totalPages === 0) {
      return null;
    }

    return (
      <div className={classes.root}>
        <Pagination count={this.props.totalPages} page={this.props.page} onChange={this.handleChange} />
      </div>
    );
  }
}
export default withStyles(useStyles)(BasicPagination);