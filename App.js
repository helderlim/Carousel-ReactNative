import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from './components/Slider';


const images = [
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
  'https://images.unsplash.com/photo-1562003389-902303a38425?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=829&q=80',
  'https://images.unsplash.com/reserve/RONyPwknRQOO3ag4xf3R_Kinsey.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1575935523712-065ca1df3660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
]

export default class App extends React.Component {
  

  render() {
    return (
      <View style={style.container}>
        <Slider images={images}/>
      </View>
    )
  }
};

const style = StyleSheet.create({
  container:{ 
    marginTop: 50, 
  }

})