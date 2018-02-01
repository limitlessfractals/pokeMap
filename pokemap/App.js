import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/SignIn';
import Meteor, {createContainer, Accounts} from 'react-native-meteor';
import PokeMap from './src/PokeMap';

// run meteor in directory
// replace localhost with your IP address while phone and computer are on same network
// ifconfig -> en0 or en1: inet: 172.20.10.5, replace localhost
const SERVER_URL = 'ws://172.20.10.5:3000/websocket';

export default class App extends React.Component {
  state = {
    loggedIn: true
  }
  componentWillMount(){
    Meteor.connect(SERVER_URL);
    if(Meteor.userId()){
      this.flipLogin(true);
    }
  }
  flipLogin = (x) =>{
    this.setState({loggedIn: x});
  }
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
        //TODO
        this.flipLogin(true);
      }
    });
    console.log(Meteor.userId());
  }
  renderView = () =>{
    if(!this.state.loggedIn){
      return(
        <SignIn logIn={this.logIn}/>
      )
    }
    else{
      return(
        <PokeMap/>
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderView()}
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
