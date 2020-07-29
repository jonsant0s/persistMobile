import React, { Component, useState } from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { Text, Icon, Input, Button, SocialIcon} from 'react-native-elements';
import CheckBox from 'react-native-check-box';

import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

import firebase from 'react-native-firebase'

const HabitItem = ({goals: {goals: name, done}, id}) => {
  const [doneState, setDone] = useState(done);
  const onCheck = () => {
    setDone(!doneState);
  };

  return(
    <View style={styles.todoItem}>
      <CheckBox
        checkBoxColor = "skyblue"
        onClick={onCheck}
        isChecked={doneState}
        disabled={doneState}
      />
      <Text style={[styles.todoText, {opacity: doneState ? 0.2 : 1}]}>
        {name}
      </Text>
    </View>
  );
};

export class HomeScreen extends Component {
    constructor() {
      super();
      this.state = {
        habits: {},
        presentHabit: '',
      }
    }
    componentDidMount(){
      this.setState({ loading: true });

      firebase.auth().onAuthStateChanged(authUser => {
        if (authUser) {
          firebase.database().ref('Users/' + firebase.auth().currentUser.uid + '/Habits/').on('value', snapshot => {
            let data = snapshot.val() ? snapshot.val() : {};
            let habitList = {... data};

              this.setState({
                habits:habitList,
                loading:false,
              });
          });
        }
      })
    }

    componentWillUnmount(){
      firebase.auth().onAuthStateChanged(authUser => {
        if (authUser) {
          firebase.database().ref('Users/' + firebase.auth().currentUser.uid)
          .orderByChild('Habits').off();
        }
      })
    }
    render() {

        let habitKeys = Object.keys(this.state.habits);

        return (
          <ScrollView
            style={styles.container}
            keyboardShouldPersistTaps="handled">
            <React.Fragment>
              <SafeAreaView style={styles.calendar}>
                <CalendarStrip
                  startingDate = {moment()}
                  selectedDate = {moment()}
                  style = {{height:150, paddingTop:20, paddingBottom:10}}
                  maxDate = {moment()}
                  />
              </SafeAreaView>
              <View style={styles.btnWrapper}>
                  <Button
                  loading={false}
                  loadingProps={{size: 'small', color: 'white'}}
                  buttonStyle={{
                    backgroundColor: '#FFD300',
                    borderRadius: 15,
                  }}
                 onPress={() => this.props.navigation.navigate('AddHabit') }
               />
               </View>
               <View>
                  {habitKeys.length > 0 ? (
                    habitKeys.map(key => (
                      <HabitItem
                        key={key}
                        id={key}
                        goals={this.state.habits[key]}
                      />
                    ))
                  ): (
                    <Text> No Habits </Text>
                  )}
               </View>
              </React.Fragment>
            </ScrollView>
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
  textInput: {
  borderWidth: 1,
  borderColor: '#afafaf',
  width: '80%',
  borderRadius: 5,
  paddingHorizontal: 10,
  marginVertical: 20,
  fontSize: 20,
  },
  habitItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  habitText: {
    borderColor: '#afafaf',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    minWidth: '50%',
    textAlign: 'center',
  },
  calendar: {
    flex: 1,
  },
});

export default HomeScreen
