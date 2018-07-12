import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        
        <WebView
        source={{uri: "http://f818e019.ngrok.io/"}}
        style={{width: "100%", height: "100%", margin:30, borderColor: "#fff"}}
      />
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
