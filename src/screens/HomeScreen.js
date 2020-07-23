import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { Text, Icon, Input, Button, SocialIcon} from 'react-native-elements';

import CalendarStrip from 'react-native-calendar-strip';

import firebase from 'react-native-firebase'

export class HomeScreen extends Component {
    render() {
        return (
          <ScrollView
            style={styles.container}
            keyboardShouldPersistTaps="handled">
            <React.Fragment>
              <SafeAreaView style={styles.calendar}>
                <CalendarStrip
                  style = {{height:150, paddingTop:20, paddingBottom:10}}
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
  calendar: {
    flex: 1,
  },
});

export default HomeScreen
