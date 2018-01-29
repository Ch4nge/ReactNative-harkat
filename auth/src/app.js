import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyAKZ2UQz9JqXU6iFwTUawyWmckO3J2SNJo',
            authDomain: 'auth-3e409.firebaseapp.com',
            databaseURL: 'https://auth-3e409.firebaseio.com',
            projectId: 'auth-3e409',
            storageBucket: 'auth-3e409.appspot.com',
            messagingSenderId: '444099915091'
          });

          firebase.auth().onAuthStateChanged( (user) => {
            if(user) {
                this.setState({ loggedIn: true });
            }else{
                this.setState({ loggedIn: false });
            }
          });
    }

    renderContent() {
        
        switch (this.state.loggedIn){
            case true:
            return(
                <CardSection>
                  <Button onPress={() => firebase.auth().signOut() }>
                    Log Out
                  </Button>
                </CardSection>
            );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />
        }

        if(this.state.loggedIn){
            
        }
        
        
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }

}


export default App;
