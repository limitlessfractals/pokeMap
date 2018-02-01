import React from 'react';
import {View, Text, Image} from 'react-native';
import {Header, Left, Button, Icon, Body, Title, Right, Fab} from 'native-base';
import {MapView} from 'expo';
import Meteor, {createContainer} from 'react-native-meteor';

class PokeMap extends React.Component{
   render(){
      return(
         <View style={{flex: 1}}>
            <Header>
               <Left>
               </Left>
               <Body>
                  <Title>PokeMap</Title>
               </Body>
               <Right>
                  <Button transparent>
                     <Icon name="power"/>
                  </Button>
               </Right>
            </Header>
            <MapView
               style={{flex: 1}}
               initialRegion={{
                  latitude: 37.788,
                  longitude: -122.432,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
               }}
            >

            </MapView>
         </View>
      )
   }
}

export default PokeMap;