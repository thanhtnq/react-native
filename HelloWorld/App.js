/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/

class Avatar extends Component {
  render () {
    return (
      <View style={{ width: 48, backgroundColor: 'gray' }} />
    );
  }
}

export default class Instagram2 extends Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', height: 48, backgroundColor: 'yellow' }}>
          <View style={{ width: 48, backgroundColor: 'gray' }} />
          <View style={{ flex: 1, backgroundColor: 'black' }} />
          <View style={{ width: 48, backgroundColor: 'gray' }} />
        </View>

        <View style={{ flexDirection: 'row', height: 60, backgroundColor: 'green' }}>
          <View style={{ width: 48, backgroundColor: 'gray' }} />
          <View style={{ width: 48, backgroundColor: 'gray' }} />
        </View>

        <View style={{ height: 40, backgroundColor: 'pink' }}></View>
        <View style={{ height: 400, backgroundColor: 'violet' }}></View>
        <View style={{ height: 48, backgroundColor: 'orange' }}></View>
        <View style={{ height: 32, backgroundColor: 'blue' }}></View>
        <View style={{ height: 60, backgroundColor: 'red' }}></View>

        <Icon name='rightcircle' size={24} />
      </View>
    );
  }
}


export default class GetUsers extends Component {
  constructor(props) {
    super(props);
  }
  this.state = {

  }

  componentDidMount() {
    fetch('').then(Response => {
      return Response
    })
  }
}