import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginStatus } from '../../actions/index';
import { StyleSheet, Text, TextInput, Button, View, Alert } from 'react-native';
import store from '../../store';

const Login = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  console.log('prop11s', props)
  const show = () => {
    // console.log(props, login)
  }

  const handleLogin = () => {

    if(login && password) {
      props.loginStatus('LOGIN')
    }
  }

  const onChangeLogin = (event) => {
    setLogin(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  console.log('store.getState', store.getState())

  return (
    <View style={styles.container}>
      <Text>Login --{show()}--</Text>
      <TextInput
        onChange={onChangeLogin}
        style={styles.input}
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        onChange={onChangePassword}
        style={styles.input}
      />
      <Button
        onPress={handleLogin}
        title="Login"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    border: '1px solid #000',
    marginBottom: '20px',
    marginTop: '5px'
  }
});

const mapStateToProps = (state) => ({
  login: state.login
})

const mapDispatchToProps = {
  loginStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);