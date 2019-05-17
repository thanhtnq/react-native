import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import Register from './Practice/Register';
import Login from './Practice/Login';

export default class App extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<Login />
			</SafeAreaView>
		);
	}
}
