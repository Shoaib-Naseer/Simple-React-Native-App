import { Text, View ,StyleSheet , Pressable} from 'react-native';
const GoalItem=({text,ondelete})=>{
  function deleteHandler(){
    ondelete(text.id);
  }
  return (
    <View  style={styles.goalContainerInside} > 
      <Pressable onPress={deleteHandler} android_ripple={{color:'white'}} style={({pressed})=> pressed && styles.pressedItems}>
            <Text style={styles.goalContainerText}>{text.text}</Text>
            </Pressable>
      </View> 
  )
}
export default GoalItem;
const styles = StyleSheet.create({
  goalContainerInside:{
   backgroundColor:"#5e0acc",
   marginTop:8,
   borderRadius:8

 },
 goalContainerText:{
   color:"white",
   padding:8,
 },
 pressedItems:{
   opacity:0.5
 }
})