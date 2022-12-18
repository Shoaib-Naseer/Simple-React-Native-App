import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setcourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  function goalHandler(enteredGoalText) {
    setcourseGoals((courseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  function deleteHandler(id) {
    setcourseGoals((courseGoals) => {
      return courseGoals.filter((item) => item.id != id);
    });
  }
  function startModalHandler() {
    setModalVisible(true);
  }
  function closeModalHandler() {
    setModalVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.btnStyle}>
          <Button title="Click " onPress={startModalHandler} color="#9f66fa" />
        </View>
        <GoalInput
          onAddHandler={goalHandler}
          visibility={modalVisible}
          closeModal={closeModalHandler}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem text={itemData.item} ondelete={deleteHandler} />
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalContainer: {
    flex: 5,
  },
  btnStyle: {
    marginBottom: 8,
  },
});
