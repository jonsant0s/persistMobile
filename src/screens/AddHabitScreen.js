import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import {Text, Icon, Input, Button, SocialIcon} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';

import firebase from 'react-native-firebase';

export class AddHabitScreen extends Component {
  addHabit = (values, navigation) => {
    this.setState({loading:true});
    firebase.database().ref('Users/' + firebase.auth().currentUser.uid + '/Habits').push({
      goals: values.goals
    }).then(() => {
      navigation.navigate('Home');
    })
  };

  render(){
    return(
      <KeyboardAvoidingView
        style = {styles.keyboardAvoidingView}
        behaviour = {'padding'}
        enabled
        keyboardVerticalOffset={Platform.OS==='ios' ? 64 : 84}>
        <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps="handled">
          <Formik
            initialValues={{goals: ''}}
            onSubmit={(values, {setSubmitting}) => {
              this.addHabit(values, this.props.navigation);
            }}
          >
          {formikProps => (
            <React.Fragment>
              <Input
                leftIcon={
                  <Icon/>
                }
                placeholder="Habit"
                inputContainerStyle={{
                  borderWidth: 1,
                  borderColor: 'white',
                  borderLeftWidth: 0,
                  height: 50,
                  backgroundColor: 'white',
                  marginBottom: 20,
                }}
                placeholderTextColor="grey"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                onChangeText={formikProps.handleChange('goals')}
              />
              <View style={styles.btnWrapper}>
                 <Button
                  disabled={!(formikProps.isValid && formikProps.dirty)}
                  title="Add Habit"
                  loading={false}
                  loadingProps={{size: 'small', color: 'white'}}
                  buttonStyle={{
                    backgroundColor: '#FFD300',
                    borderRadius: 15,
                  }}
                  titleStyle={{fontWeight: 'bold', fontSize: 23}}
                  containerStyle={{marginVertical: 10, height: 50, width: 300}}
                  onPress={formikProps.handleSubmit}
                  underlayColor="transparent"
                />
              </View>
            </React.Fragment>
          )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
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
