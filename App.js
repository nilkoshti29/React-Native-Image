import React,{ Component } from 'react';
import { Image,View } from 'react-native';

export default class App extends Component{

  render(){
    return(
      <View>
        <Image source={require('./Images/react-native.png')} style={{width: 500,height:500}}>

        </Image>
      </View>
    );
  }
}
