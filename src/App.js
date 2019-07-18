import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
} from 'react-native';

class App extends Component {

  render() {
    // const spin = this.state.spinValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['0deg', '360deg']
    // });

    return (
      <View style={styles.container}>
        {/*<Animated.Image source={logo} style={[styles.logo, { transform: [{rotate: spin}] }]}/>*/}
        {/*<Text style={styles.title}>Create React Native Web App</Text>*/}
        {/*<Text>Open up src/App.js to start working on your app!</Text>*/}
        {/*<Text>Changes you make will automatically reload.</Text>*/}
        {/*<Text>Changes you make will automatically reload.</Text>*/}
        {/*<Text>Changes you make will automatically reload.</Text>*/}
        {/*<Text>Changes you make will automatically reload.</Text>*/}
        {/*<Text>Changes you make will automatically reload.</Text>*/}
        {/*<Text>Changes you make will automatically reload.</Text>*/}
        {/*{Platform.OS !== 'web' && <Text>Shake your phone to open the developer menu.</Text>}*/}
        <TouchableHighlight
          style={styles.button}
          underlayColor={'#0A84D0'}
        >
          <Text style={styles.buttonText}>Rotate Logo</Text>
        </TouchableHighlight>
      </View>
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
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: '#1B95E0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default App;
