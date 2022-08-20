# Assignment
## Requirements
 - UI must be developed in react
    - Two components
      - Input for the user only accepts numbers
      - Display of list of jokes
- Application should use Redux for state management
  - List of jokes should be on the global state and be consume for the component list.
- Application should use react-sagas for async dispatch of calls.
  - Sagas should be used for API calls (Do not use redux-thunk)
- API calls should be executed against Free opensource “Chuck Norris API”
Example.
In the following API call we choose 10 jokes with the category nerdy and explicit
http://api.icndb.com/jokes/random/10?limitTo=[nerdy,explicit]

## Specifications
- node version 16.17.0
## Run the app
```bash 
npm i && npm start
```
