import React from 'react';
import { Text,View,StyleSheet, TouchableOpacity}  from 'react-native';

const Task = (props) => {
  return(
    <View style={styles.taskItemBlock}>
      <View style={styles.rowComponent}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  taskItemBlock : {
    background : 'white',
    marginVertical : '10px',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    padding : '10px',
    minHeight : '50px',
    borderRadius : '10px',
  },
  rowComponent : {
    flexDirection : 'row',
    alignItems : 'center',
  },
  square : {
    width : 24,
    height : 24,
    background : '#55BCF6',
    borderRadius : '5px',
    marginRight : 10,
    opacity : 0.4
  },
  itemText : {
    maxWidth : '200px', 
  },
  circular : {
    width : 15,
    height : 15,
    borderColor : '#55BCF6',
    borderWidth : 2,
    borderRadius : 10,
    alignItems : 'center',
  },
})

export default Task