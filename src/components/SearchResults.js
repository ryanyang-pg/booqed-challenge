import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import StarIcon from '@material-ui/icons/Star';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import Avatar from '@material-ui/core/Avatar';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const useStyles = theme => ({
  root: {
    position: 'relative',
    minWidth: 275,
    marginBottom: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 7,
    marginBottom: 12,
    backgroundColor: '#dc004e',
    color: '#fff',
    display: 'inline-block',
    borderRadius: 7,
  },
  searchTotal: {
    paddingBottom: '15px',
  },
  githubAvatar: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 30,
    left: 20,
  },
  githubIcons: {
    top: 5,
    position: 'relative',
    left: 0,
    marginLeft: 5,
  },
  githubCounters: {
    padding: 2,
    borderRadius: 5,
    fontSize: '0.9rem',
    marginRight: 5,
  },
  githubCard: {
    paddingLeft: 140,
  },
  githubButton: {
    fontSize: '0.7rem',
    color: '#0000008a',
    padding: 10,
    textTransform: 'uppercase',
    borderRadius: 3,
    backgroundColor: '#efefef',
    margin: 10,
    '&:hover': {
      backgroundColor: '#ccc',
      textDecoration: 'none',
    },
  },
});

class SearchResults extends React.Component {
  
  renderFound(count) {
    if (count === 0)
      return (<div>No repository found.</div>)
    if (count === 1)
      return (<div>1 repository found.</div>)
    if (count > 1000)
      return (
        <div>{count} repositories found, but Github only provide first 1000 for search. <a href="https://developer.github.com/v3/search/#about-the-search-api">https://developer.github.com/v3/search/#about-the-search-api</a></div>
      )
    if (count <= 1000)
      return (
        <div>{count} repositories found.</div>
      )
  }

  render() {
    const { classes } = this.props;
    const results = this.props.searchResults;
    const count = results.total_count;

    if (results['items']) {
      TimeAgo.addLocale(en)
      const timeAgo = new TimeAgo('en-US')
      const main = results['items'].map(element => {
        const ago = timeAgo.format(new Date(element['updated_at']));

        return (
          <Card className={classes.root}>
            <CardContent className={classes.githubCard}>
              <Avatar alt="Remy Sharp" src={element['owner']['avatar_url']} className={classes.githubAvatar} />
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Last updated {ago}
              </Typography>
              <Typography variant="h5" component="h2">
                <Link href={element['html_url']} target="_blank">
                  {element['full_name']}
                </Link>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                <StarIcon fontSize="small" className={classes.githubIcons} />
                <span className={classes.githubCounters}>{element['stargazers_count']}</span>
                <CallSplitIcon fontSize="small" className={classes.githubIcons} />
                <span className={classes.githubCounters}>{element['forks_count']}</span>
              </Typography>

              <Typography variant="body2" component="p">
                {element['description']}
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={element['html_url']} target="_blank" className={classes.githubButton}>Learn More</Link>
            </CardActions>
          </Card>
        )
      });

      return (
        <div className={classes.searchResultsContainer}>
          <Typography className={classes.searchTotal}>
            {this.renderFound(count)}
          </Typography>
          <box m={2} >
            {main}
          </box>
        </div>
      );
    }

    return null;
  }
}

export default withStyles(useStyles)(SearchResults);