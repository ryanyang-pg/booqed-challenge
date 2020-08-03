import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import BasicPagination from './BasicPagination';
import Spinner from './Spinner';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

class App extends React.Component {

  state = {
    searchResults: [],
    page: 1,
    term: '',
    totalPages: 0,
    loading: false,
  };

  onSearchSubmit = async (term, page) => {

    if (!this.state.loading && term) {
      this.setState({
        loading: true,
        term: term,
        page: page,
      });

      try {
        const result = await axios.get('https://api.github.com/search/repositories', {
          params: {
            q: term,
            page: page,
          },
          auth: {
            username: 'ryanyang-pg',
            password: '31eae963b5a63fa8cea3e79cdcf7fb7e4fbc31e7'
          }
        });
        // {
        //   "message": "Only the first 1000 search results are available",
        //   "documentation_url": "https://developer.github.com/v3/search/"
        // }
        if (result.data) {
          this.setState({
            searchResults: result.data,
            totalPages: (result.data.total_count < 1000) ? Math.round(result.data.total_count / result.data.items.length) : Math.round(1000 / result.data.items.length),
          });
        }
      } catch (e) {
        alert('There is an error with Github API. Please try again later');
      }

      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { loading } = this.state;

    return (
      <Container component="main" maxWidth="sm" position="relative">
        <CssBaseline />
        <SearchForm onSubmit={this.onSearchSubmit} />
        <SearchResults searchResults={this.state.searchResults} loading={this.state.loading} />
        <BasicPagination page={this.state.page} term={this.state.term} totalPages={this.state.totalPages} onSubmit={this.onSearchSubmit} />
        <Box m={2}>
          <Typography p="20" variant="body2" color="textSecondary" align="center">
            {'Ryan Yang.  Booqed Challenge. '}{new Date().getFullYear()}{'.'}
          </Typography>
        </Box>
        <Spinner loading={loading} />
      </Container>
    )
  }
}

export default App;