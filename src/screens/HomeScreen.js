import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, Icon, Input, Button, SocialIcon} from 'react-native-elements';
import firebase from 'react-native-firebase'

export class HomeScreen extends Component {
    render() {
        return (
          <ScrollView
            style={styles.container}
            keyboardShouldPersistTaps="handled">
            <React.Fragment>
              <View style={styles.headerContainer}>
                <Icon name="md-body" size={80} type="ionicon" color={'#FFD300'} />
                <Text h4 style={{textAlign: 'center'}}>Home</Text>
              </View>
                <View style={styles.btnWrapper}>
                    <Button
                    title="Sign out"
                    loading={false}
                    loadingProps={{size: 'small', color: 'white'}}
                    buttonStyle={{
                      backgroundColor: '#FFD300',
                      borderRadius: 15,
                    }}
                   onPress={() => firebase.auth().signOut().then(() => {
                     alert('User Logged Out');
                     setTimeout(() => {
                       this.props.navigation.navigate('Intro');
                     }, 2000);
                   })}
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
});

export default HomeScreen
