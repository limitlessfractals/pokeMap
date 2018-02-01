import React from 'react';
import {View, Text, Image} from 'react-native';
import {Header, Left, Button, Icon, Body, Title, Right, Fab} from 'native-base';
import {MapView} from 'expo';
import Meteor, {createContainer} from 'react-native-meteor';

//snazzymaps.com custom google map
const mapStyle = [{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#AFFFA0"}]},{"featureType":"poi","elementType":"all","stylers":[{"color":"#EAFFE5"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#59A499"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#F0FF8D"},{"weight":2.2}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#1A87D6"}]}];


class PokeMap extends React.Component{
   state = {
      location: {
         latitude: 37.788,
         longitude: -122.432,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421
      }
   }
   recordEvent = (x) =>{
      console.log(x);
      this.setState({location: x});
   }
   render(){
      return(
         <View style={{flex: 1}}>
            <Header>
               <Left>
               </Left>
               <Body>
                  <Title>PokéMap</Title>
               </Body>
               <Right>
                  <Button transparent>
                     <Icon name="power"/>
                  </Button>
               </Right>
            </Header>
            <MapView
               style={{flex: 1}}
               provider={'google'}
               customMapStyle={mapStyle}
               region={this.state.location}
               onRegionChangeComplete={(x)=>this.recordEvent(x)}
            >

            </MapView>
            <Fab 
               direction="left" 
               position="bottomRight"
               style={{backgroundColor:'green'}}
            >
               <Icon name="add" />
            </Fab>
            <Fab 
               direction="right" 
               position="bottomLeft"
               style={{backgroundColor:'red'}}
            >
               <Icon name="remove" />
            </Fab>
         </View>        
      )
   }
}

export default PokeMap;