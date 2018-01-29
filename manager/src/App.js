import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm  from'./components/LoginForm';


class App extends Component {
  
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCSnudl7KRq22VzN3TvgGxewpfVfzATurE',
      authDomain: 'manager-2985a.firebaseapp.com',
      databaseURL: 'https://manager-2985a.firebaseio.com',
      projectId: 'manager-2985a',
      storageBucket: '',
      messagingSenderId: '487752672179'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return( 
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
