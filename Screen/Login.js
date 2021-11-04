import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

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
      <View style={styles.container}>
        <View style={{alignItems: 'center', justifyContent: 'center', height: 400, width: 400, backgroundColor: 'yellow', borderRadius: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>User Login account</Text>
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
      </View>
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
