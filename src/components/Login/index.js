import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { loginStatus } from '../../actions/index';
import { StyleSheet, Text, TextInput, Button, View, Alert } from 'react-native';
import store from '../../store';

const Login = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const show = () => {
    // console.log(props, login)
  }

  const handleLogin = () => {
    // Alert.alert('Right button pressed');
    // Waiting for API
    // fetch(`https://api.themoviedb.org/3/movie/600?api_key=ab2dc1b907dfee9c3091ee52c576239e`, {
    //   login: login,
    //   password: password
    // })
    // .then((res) => res.json())
    // .then(data => {
    //   console.log(data)
    // });

    if(login && password) {
      props.loginStatus('LOGIN');
      // store.dispatch(props.loginStatus('LOGIN'))
      console.log(props)
    }
  }

  const onChangeLogin = (event) => {
    setLogin(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

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

const mapStateToProps = (state) => {
  console.log(state, 'werrrr')
  return {
    login: state.login
  }
}

// const matchDispatchToProps = (dispatch) => {
//   return bindActionCreators({loginStatus}, dispatch);
// }

export default connect(mapStateToProps, {loginStatus})(Login);