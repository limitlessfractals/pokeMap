import { Meteor } from 'meteor/meteor';
import {Pokemon} from '../imports/collections/pokemon';
var fs = Npm.require("fs");

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  'pokemon.add':function(loc){
    var user = this.userId;
    if(!user){
      console.log('user not signed in');
      return;
    }
    console.log('Adding Pokemon...');
    var range = 0.035;
    // y axis
    var range1 = Math.random() > 0.5 ? range: -range;
    // x axis
    var range2 = Math.random() > 0.5 ? range: -range;
    var long = loc.longitude;
    long = long + Math.random() * (range1);
    var lat = loc.latitude;
    lat = lat + Math.random() * (range2);

    var iconPath = process.env.PWD + '/public';
    var icons = fs.readdirSync(iconPath);

    //keep to only gen1&2 pokemon
    var min = Math.ceil(0);
    var max = Math.ceil(251);
    var random = Math.floor(Math.random()*(max-min))+min;

    return Pokemon.insert({image: icons[random], longitude: long, latitude: lat});
  }
});