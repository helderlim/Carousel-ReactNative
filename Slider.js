import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");
const height = width * 0.6;


export default class Slider extends React.Component {
  state={
    active: 0
  }

  change= ({nativeEvent}) =>{
     const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
     if(slide !==this.state.active){
        this.setState({active: slide});
     }
  }
  render() {
    return (
      <View style={style.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={style.container}
        >
          {
           this.props.images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={style.image} />
            ))
          }
        </ScrollView>
         {/*função anonima */}
        <View style={style.pagination}>
          {
            this.props.images.map((i,k) =>(
              <Text key={k} style={k==this.state.active ? style.pagingActiveText : style.pagingText}>⬤</Text>
            ))
          }
         
        </View>

      </View>
    )
  }
};

const style = StyleSheet.create({
  container:{ 
    
    width, 
    height 
  },
  image: { 
    width, 
    height, 
    resizeMode: 'cover' 
  },
  pagination:{
    flexDirection:'row',
    position:'absolute', 
    bottom:0, 
    alignSelf:'center'
  },
  pagingText:{ 
    fontSize:(width / 30),
    color:'#888', 
    margin:3,
  },
  pagingActiveText:{
    fontSize:(width / 30),
    color:'#fff', 
    margin:3,
  }

})