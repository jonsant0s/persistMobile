import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, } from 'react-native';
import {Text, Icon, Image, Button} from 'react-native-elements';

export class AddHabitScreen extends Component {
  render(){
    return(
      <View>
        <Text> AddHabit </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F6FA',
    height: '100%',
  },
  headerContainer: {
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  btnWrapper: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    // marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerStyle: {
    marginTop: 16,
    width: '90%',
  },
  keyboardAvoidingView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  calendar: {
    flex: 1,
  },
});

export default AddHabitScreen;
