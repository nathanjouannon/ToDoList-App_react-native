import React, {useState} from 'react';
import { Text, View, ScrollView, StyleSheet, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity}from 'react-native';
import Task from './components/Task'

const ToDoListApp = () => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([])

  const handelAddTasks = () => {
    setTaskItems([...taskItems, task]);
    setTask('');
  }

  const completTasks = (index) => {
    let itemsCpoie = [...taskItems];
    itemsCpoie.splice(index, 1)
    setTaskItems(itemsCpoie)
  }

  return(
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Tasks to complete </Text>
        
        <View>
        {
          taskItems.map( (item, index) => {
            return (
              <TouchableOpacity onPress={() => completTasks(index)}>
                <Task key={index} text={item} />
              </TouchableOpacity>
            )
          })
        }
        </View>
      </View>

      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height" }
      style={styles.writtingTasks}>

        <TextInput 
        style={styles.textInput}
        placeholder = { "whrite a task"} 
        value = {task}
        onChangeText={text => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => handelAddTasks()}>
          <View style={styles.addWraper}>
            <Text style={styles.plusButton}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView> 

    </View>
  )
}

//styles
const styles = StyleSheet.create({
  container : {
    background : '#E8EAED',
    flex : '1',
    height : '700px',
  },
  tasksWrapper : {
    marginHorizontal : '20px',
    marginVertical : '50px',
  },
  sectionTitle : {
    marginBottom : '20px',
    fontSize : '24px',
    fontWeight : 'bold',
  },
  writtingTasks : {
    position : 'absolute',
    bottom : 20,
    marginHorizontal : '10px',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems :'center',
  },
  textInput : {
    background : 'white',
    padding : 15,
    width : '215px',
    borderRadius : '20px',
    marginRight : '45px',
    borderColor : '#C0C0C0',
    borderWidth : 0.5,
  },
  addButton : {
    width: 50,
    height : 50,
    background : 'white',
    borderRadius  : '50px',
    alignItems : 'center', 
    justifyContent : 'center',
    borderColor : '#C0C0C0',
    borderWidth : 0.5,
  },
  plusButton : {
    fontSize : '25px',
    opacity : 0.4,
    textAlign : 'center'
  }
})
export default ToDoListApp; 