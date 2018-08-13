import React, { Component } from 'react'; 
// import { View, Text } from 'react-native'; 
import ReduxThunk from 'redux-thunk'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import reducers from './reducers'; 
import firebase from 'firebase'; 
import LoginForm from './components/LoginForm'; 

class App extends Component {

    componentWillMount(){
      // Initialize Firebase
      const config = {
        apiKey: "AIzaSyC8XwMPnu38QnRkgXyLsTLeR7Dc3RHmbP8",
        authDomain: "manager-26e44.firebaseapp.com",
        databaseURL: "https://manager-26e44.firebaseio.com",
        projectId: "manager-26e44",
        storageBucket: "manager-26e44.appspot.com",
        messagingSenderId: "1031671567419"
      };
      firebase.initializeApp(config);
    }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 

    return (
      <Provider store={ store }>
          <LoginForm /> 
      </Provider> 
    );
  }
}

export default App; 