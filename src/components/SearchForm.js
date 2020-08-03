import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import logo from './assets/img/logo.png'; // Tell webpack this JS file uses this image
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  logo: {
    width: 300,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


class SearchForm extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const term = data.get('search');
    this.props.onSubmit(term, 1);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.paper}>
        <a href="/"><img src={logo} alt="Logo" className={classes.logo} /></a>
        <Typography component="h1" variant="h5">
          Search Github Repositories
                </Typography>
        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="search"
            name="search"
            autoFocus
            placeholder="Search repositories in Github..."
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Search
                    </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(SearchForm);