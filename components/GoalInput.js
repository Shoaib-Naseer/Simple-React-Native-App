import {  View, TextInput,Button,Image, StyleSheet, Modal} from 'react-native';
import {useState} from 'react';
const GoalInput=({onAddHandler,visibility,closeModal})=>{
    const [enteredGoalText,setEnteredGoalText] = useState('');

    function goalInputHandler (e){
      setEnteredGoalText(e)
    }
    function goalHandler (){
      onAddHandler(enteredGoalText)
      setEnteredGoalText('')
      closeModal()
    }
  return (
      <Modal visible={visibility} animationType="slide">
      <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput  style={styles.input} placeholder="Your Course Goal" onChangeText={goalInputHandler}        value=      {enteredGoalText}/>
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button  title="Add Goal" onPress={goalHandler} color="#b180f0"/>
        </View>
       <View style={styles.button}>
        <Button  title="Cancel" color="#f31282" onPress={closeModal} />
       </View>
        </View>
      </View
      ></Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:"center",
   borderBottomWidth:1,
   borderColor:'#cccccc',
   backgroundColor:'#311b6b',
   padding:16,
 },
 input:{
   backgroundColor:'#e4d0ff',
   borderRadius:8,
   width:'100%',
   padding:8,
   marginBottom:8
 },
 buttonContainer:{
   flexDirection:'row'
 },
 button:{
   width:100,
   marginRight:10,
 },
 image:{
   width:100,
   height:100,
   margin:20,
 },
})