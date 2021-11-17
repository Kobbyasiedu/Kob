import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1637152740336-da2baefdbf2e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}} style={styles.container}>
        <View style={{alignItems: 'center', justifyContent: 'center', height: 500, width: 400, backgroundColor: '#ced0d0', borderRadius: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20, marginTop: 40}}>Sign In</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

        <TouchableOpacity style={{marginBottom: 10}}><Text style={{color: 'gray', fontWeight: 'bold'}}>forgot password</Text></TouchableOpacity>

        <TouchableOpacity
            style={{width: 150, height: 40, backgroundColor: 'black', borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}
        >
            <Text style={{color: 'white', padding: 5}}>Login</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginTop: 100}}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity><Text style={{color: 'white', fontWeight: 'bold'}}>SignUp</Text></TouchableOpacity>
        </View>

      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    borderRadius: 10,
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 20
  },
});
