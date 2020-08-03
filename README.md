This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Design Choices

### Theme
This project is build with from the [Material UI](https://material-ui.com/) framework. This makes for consistent UI design across devices following best practices for usability, mobile compatibility and speed of development.

### Pagination
Using buttons instead of lazy loading for clarity as to how many pages to be viewed.

### React Components
Designate key components in the application to segregate responsiblity and ease of maintainance.

### No OAuth
Since it would require user to have GitHub account, basic authentication is opted, sufficient for the exercise and requirement specified.

## Deployment

This app is deployed in Heroku for purpose of simplicity and free of cost. It is deployable via [CLI tool](https://devcenter.heroku.com/articles/heroku-cli), via Heroku dashboard console and also [GitHub integration](https://devcenter.heroku.com/articles/github-integration) auto-triggered build upon merge to master.


## GitHub API Limitations

1. Gihub search API provides up to 1,000 results for each search. Thus, even though the total maybe be above 1,000. The number of pages will not exceed that limit.

1. For requests using authentication, the limit is 30 requests per minute. Thus, in the event if the API is throttle, there will be an alert and you should wait for a while before trying another search.

## Scope
Some areas to illustrate that could be considered if expanded.

* Accessibility and security
* Unit tests
* Nested API calls for more detailed info
* Using GraphQL
* Container app deployment
* Code extensibility
