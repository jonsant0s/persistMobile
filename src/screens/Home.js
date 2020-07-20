import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import firebase from 'react-native-firebase'

export class Home extends Component {
    render() {
        return (
            <View>
                <Text> Home </Text>
                <Button
                 title="Sign out"
                 onPress={() => firebase.auth().signOut().then(() => {
                   alert('User Logged Out');
                   setTimeout(() => {
                     this.props.navigation.navigate('Intro');
                   }, 2000);
                 })}
                 />
            </View>
        )
    }
}

export default Home
