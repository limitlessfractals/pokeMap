import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Form, Item, Label, Input, Button} from 'native-base';

var myBackground = require('../assets/landing.jpg');

class SignIn extends React.Component{
   state = {
      email: "",
      password: ""
   }
   login = () =>{

   }
   render(){
      return(
         <View style={{flex: 1}}>
            <ImageBackground source={myBackground} style={styles.background}>
               <View style={styles.inputStyle}>
                  <Form>
                     <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                           autoCorrect={false}
                           onChangeText={(email)=>this.setState({email})}
                        />
                     </Item>
                     <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                           autoCorrect={false}
                           onChangeText={(password)=>this.setState({password})}
                           secureTextEntry
                        />
                     </Item>
                  </Form>
                  <View style={{marginTop: 10}}>
                     <Button
                        primary
                        block
                        onPress={this.login}
                     >
                        <Text style={styles.buttonText}>Sign In/Sign Up</Text>
                     </Button>
                  </View>
               </View>
            </ImageBackground>
         </View>
      )
   }
}

const styles = {
   background: {
      flex: 1,
      width: null,
      height: null
   },
   inputStyle: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      margin: 10
   },
   buttonText: {
      color: 'white',
      fontWeight: 'bold'
   }
}

export default SignIn;