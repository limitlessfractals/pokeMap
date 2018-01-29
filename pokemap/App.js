import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/SignIn';
import Meteor, {createContainer, Accounts} from 'react-native-meteor';

export default class App extends React.Component {
  logIn = (email, password) =>{
    Meteor.loginWithPassword(email, password, (error, data)=>{
      if(error){
        if(error.reason === "User not found"){
          console.log('there was no email');
          Accounts.createUser({email,password}, (error)=>{
            console.log(error);
          })
        }
      }
      else{
        console.log('email found');
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
      <SignIn logIn={this.logIn}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
