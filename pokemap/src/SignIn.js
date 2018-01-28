import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Form, Item, Label, Input} from 'native-base';

var myBackground = require('../assets/landing.jpg');

class SignIn extends React.Component{
   state = {
      email: ""
   }
   render(){
      return(
         <View style={{flex: 1}}>
            <ImageBackground source={myBackground} style={styles.background}>
               <View style={{}}>
                  <Form>
                     <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                           style={{}}
                           autoCorrect={false}
                           onChangeText={(email)=>this.setState({email})}
                        />
                     </Item>
                  </Form>
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
   }
}

export default SignIn;