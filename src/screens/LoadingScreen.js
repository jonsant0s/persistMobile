import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, } from 'react-native'
import {Text, Icon, Image, Button} from 'react-native-elements';

import firebase from 'react-native-firebase';
import { firebaseAuth } from '../firebase/config';

export class LoadingScreen extends Component {

    static navigationOptions = {
      headerShown: false,
    };

    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Home' : 'Loading')
      })
    }

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.headerContainer}>
                <Icon name="md-body" size={80} type="ionicon" />
                <Text h4>Welcome to Persist</Text>
                <Text h5 style={{textAlign:'center'}}>
                  Track your habits and become a better you
                </Text>
              </View>
              <View style={styles.contentView}>
                <Button
                  onPress={() => this.props.navigation.navigate('RegisterScreen')}
                  title="Get started"
                  loading={false}
                  loadingProps={{size: 'small', color: 'white'}}
                  buttonStyle={{
                    backgroundColor: '#FFD300',
                    borderRadius: 5,
                  }}
                  titleStyle={{fontWeight: 'bold', fontSize: 23}}
                  containerStyle={{marginVertical: 10, height: 50, width: 300}}
                  underlayColor="transparent"
                />
                <Text h4 style={{textAlign: 'center', color: 'grey'}}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <Text h4 style={{textAlign: 'center', color: 'blue'}}>
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F6FA',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerContainer: {
    //top: 30,
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
  contentView: {
    //marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LoadingScreen
