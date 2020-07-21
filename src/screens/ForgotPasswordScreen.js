import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Text, Icon, Input, Button, SocialIcon} from 'react-native-elements';
import firebase from 'react-native-firebase'
import {Formik} from 'formik';
import * as Yup from 'yup';

const ForgotPasswordSchema = Yup.object().shape({
  email:Yup.string()
    .email('Invalid email')
    .required('Email is Required'),
});

export class ForgotPasswordScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  handlePasswordReset = (values, navigation) => {
      firebase.auth().sendPasswordResetEmail(values.email).then(() => {
        alert('Password reset email sent');
        setTimeout(() => {
          this.props.navigation.navigate('Login');
        }, 2000);
      })
      .catch(err => {
        alert(err);
      });
  };


  render() {
      return (
          <KeyboardAvoidingView
            style = {styles.keyboardAvoidingView}
            behaviour = {'padding'}
            enabled
            keyboardVerticalOffset={Platform.OS==='ios' ? 64 : 84}>
            <ScrollView
              style={styles.container}
              keyboardShouldPersistTaps="handled">
              <Formik
                initialValues={{email: ''}}
                onSubmit={(values, {setSubmitting}) => {
                  this.handlePasswordReset(values);
                  setSubmitting(false);
                }}
                 validationSchema={ForgotPasswordSchema}>
                 {formikProps => (
                   <React.Fragment>
                     <View style={styles.headerContainer}>
                       <Icon name="md-body" size={80} type="ionicon" color={'#FFD300'} />
                       <Text h4 style={{textAlign: 'center'}}>Forgot Your Password?</Text>
                     </View>
                     <Input
                       leftIcon={
                         <Icon
                           name="email"
                           color="rgba(110, 120, 170, 1)"
                           size={25}
                         />
                       }
                       placeholder="Email"
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
                       onChangeText={formikProps.handleChange('email')}
                     />
                     {formikProps.errors.email ? (
                       <Text style={{color: 'red'}}>{formikProps.errors.email}</Text>
                     ) : null}
                     <View style={styles.btnWrapper}>
                        <Button
                         disabled={!(formikProps.isValid && formikProps.dirty)}
                         title="Send Email"
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
        )}
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
});

export default ForgotPasswordScreen
