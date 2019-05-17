import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default class Register extends Component {
	constructor(props) {
		super(props);
		// state
		this.state = {
			email: '',
            password: '',
            name: '',
            address: '',
		};
	}

	register = () => {
		axios
			.post('https://softech.dev/api/training/users/register', {
				email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                age: this.state.age,
			})
			.then(response => {
				const result = response.data;
				if (result.register === true) {
					Alert.alert('THÔNG BÁO', 'Đăng ký thành công');
				} else {
					Alert.alert('THÔNG BÁO', 'Đăng ký thất bại');
				}
			})
			.catch(error => {
				Alert.alert('THÔNG BÁO', 'Có lỗi xảy ra');
			});
	};
	render() {
		return (
			<View>
				<View />
				{/* EMAIL --------------------------------- */}
				<View>
					<TextInput
						placeholder='Enter your email'
						onChangeText={text => {
							this.setState({ email: text });
						}}
					/>
				</View>
				{/* PASSWORD ------------------------------ */}
				<View>
					<TextInput
						placeholder='Enter your password'
						secureTextEntry={true}
						onChangeText={text => {
							this.setState({ password: text });
						}}
					/>
				</View>
                {/* NAME ------------------------------ */}
				<View>
					<TextInput
						placeholder='Enter your name'
						onChangeText={text => {
							this.setState({ name: text });
						}}
					/>
				</View>
                {/* AGE ------------------------------ */}
				<View>
					<TextInput
						placeholder='Enter your age'
						onChangeText={text => {
							this.setState({ age: text });
						}}
					/>
				</View>
				<View>
					<Button title='Register' onPress={this.register} />
				</View>
			</View>
		);
	}
}
