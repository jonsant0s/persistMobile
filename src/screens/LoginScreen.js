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

const LoginSchema = Yup.object().shape({
  email:Yup.string()
    .email('Invalid email')
    .required('Email is Required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});


export class LoginScreen extends Component {
    static navigationOptions = {
      headerShown: false,
    };

    Login = (values, navigation) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(response => {
          let {user} = response;
          this.setState({user});

          alert('Registration success');
          setTimeout(() => {
            navigation.navigate('Home');
          }, 2000);
        })
        .catch(err => {
          alert(err);
        });
      };

    render() {
        return (
          <KeyboardAvoidingView
               behavior={'padding'}
               enabled
          >
          <ScrollView
                 style={styles.container}
                 keyboardShouldPersistTaps="handled">
                 <View style={styles.headerContainer}>
                   <Icon
                     name="md-body"
                     size={80}
                     type="ionicon"
                     color={'#FFD300'}
                   />
                 </View>
                 <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                     this.Login(values, this.props.navigation);
                     setSubmitting(false);
                   }}
                   validationSchema={LoginSchema}>
                   {formikProps => (
                     <React.Fragment>
                       <View style = {styles.wrapper}>
                       <Input
                        leftIcon = {
                          <Icon
                          name="email-outline"
                          type="material-community"
                          color="rgba(255,211,0,1)"
                          size={25}
                          />
                        }
                        onChangeText={formikProps.handleChange('email')}
                        placeholder="Email"
                        inputContainerStyle={styles.input}
                        placeholderTextColor="grey"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                      />
                      {formikProps.errors.email ? (
                        <Text style={{color: 'red'}}>
                          {formikProps.errors.email}
                        </Text>
                      ) : null}
                      <Input
                        leftIcon={
                         <Icon
                           name="lock"
                           type="simple-line-icon"
                           color="rgba(255,211,0,1)"
                           size={25}
                         />
                         }
                         onChangeText={formikProps.handleChange('password')}
                         inputContainerStyle={styles.input}
                         placeholderTextColor="grey"
                         placeholder="Password"
                         autoCapitalize="none"
                         secureTextEntry={true}
                         autoCorrect={false}
                         keyboardType="default"
                         returnKeyType="next"
                      />
                    </View>
                        <View style={styles.socialWrapper}>

                          <Button
                            title="Login"
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{
                              backgroundColor: '#FFD300',
                              borderRadius: 15,
                            }}
                            titleStyle={{fontWeight: 'bold', fontSize: 23}}
                            containerStyle={{marginVertical: 10, height: 50, width: 300}}
                            onPress={formikProps.handleSubmit}
                            disabled={!(formikProps.isValid && formikProps.dirty)}
                            underlayColor="transparent"
                          />

                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('ForgotPassword')
                        }>
                        <Text h5 style={{textAlign: 'center', color: 'blue'}}>
                          Forgot Password?
                        </Text>
                      </TouchableOpacity>
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
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  headerContainer: {
   top: 30,
   justifyContent: 'center',
   alignItems: 'center',
   padding: 40,
  },
  wrapper:{
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderLeftWidth: 0,
    height: 50,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  socialWrapper: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLogin: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
export default LoginScreen
