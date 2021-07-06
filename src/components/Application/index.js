import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TextInput, SafeAreaView } from 'react-native';
import Login from '../Login';


const Application = (props) => {
  console.log(props,'dfffdd4444')
  return (
    <>
      <Login />
    </>
  );
}

export default connect()(Application);