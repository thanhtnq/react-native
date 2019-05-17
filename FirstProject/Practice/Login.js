import React, { Component } from 'react';
import { ImageBackground, ActivityIndicator, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ZIcon from 'react-native-vector-icons/Zocial';
import * as Animatable from 'react-native-animatable';

export default class Login extends Component {
	constructor(props) {
		super(props);
		// state
		this.state = {
			loading: false,
			email: '',
			emailError: false,
			passError: false,
			password: '',
		};
	}

	login = () => {
		if (this.state.email.length === 0) {
			this.setState({ emailError: true });
			return;
		}

		if (this.state.password.length === 0) {
			this.setState({ passError: true });
			return;
		}

		this.setState({ loading: true });
		axios
			.post('https://softech.dev/api/training/users/login', {
				email: this.state.email,
				password: this.state.password,
			})
			.then(response => {
				this.setState({ loading: false });
				const result = response.data;
				if (result.login === true) {
					Alert.alert('THÔNG BÁO', 'Đăng nhập thành công');
				} else {
					Alert.alert('THÔNG BÁO', 'Sai email hoặc mật khẩu');
				}
			})
			.catch(error => {
				this.setState({ loading: false });
				console.log(error);
				Alert.alert('THÔNG BÁO', 'Có lỗi xảy ra');
			});
	};
	render() {
		return (
			<ImageBackground source={{uri:'https://i.pinimg.com/564x/3f/4e/73/3f4e73e456281e4ea54476a051e18e26.jpg'}} style={{width: '100%', height: '100%'}}>

			<Animatable.View animation='zoomIn' duration={1000} style={{ flex: 1, padding: 12, justifyContent: 'center' }}>
				{/* EMAIL --------------------------------- */}
				<View style={{ flexDirection: 'row', backgroundColor: '#ffda79', borderRadius: 24 }}>
					<View style={{ justifyContent: 'center', paddingLeft: 16 }}>
						<ZIcon name='email' size={24} />
					</View>
					<View style={{ flex: 1 }}>
						<TextInput
							style={{ height: 48, paddingHorizontal: 8, fontSize: 20}}
							placeholder='Enter your email'
							onChangeText={text => {
								this.setState({ emailError: text.length === 0 });
								this.setState({ email: text });
							}}
						/>
					</View>
					{this.state.emailError && (
						<Animatable.View
							animation='flash'
							duration={1000}
							delay={200}
							style={{ justifyContent: 'center', paddingRight: 16 }}
						>
							<Icon name='alert-circle' size={24} color='red' />
						</Animatable.View>
					)}
				</View>

				<View style={{height: 12}}></View>

				{/* PASSWORD ------------------------------ */}
				<View style={{ flexDirection: 'row', backgroundColor: '#ffda79', borderRadius: 24 }}>
					<View style={{ justifyContent: 'center', paddingLeft: 16 }}>
						<Icon name='textbox-password' size={24} />
					</View>
					<View style={{flex:1}}>
						<TextInput
							style={{height: 48, paddingHorizontal: 8, fontSize: 20}}
							placeholder='Enter your password'
							secureTextEntry={true}
							onChangeText={text => {
								this.setState({ passError: text.length === 0 });
								this.setState({ password: text });
							}}
						/>
					</View>
					{this.state.passError && (
						<Animatable.View
							animation='flash'
							duration={1000}
							delay={200}
							style={{ justifyContent: 'center', paddingRight: 16 }}
						>
							<Icon name='alert-circle' size={24} color='red' />
						</Animatable.View>
					)}
				</View>

				<View style={{height: 12}}></View>

				{/* LOGIN ------------------------------ */}
				<View style={{alignItems: 'center', justifyContent: 'center'}}>
					{this.state.loading && (
						<View>
							<ActivityIndicator size='large' />
						</View>
					)}
					{this.state.loading === false && (
						<TouchableOpacity onPress={this.login} style={{alignItems: 'center', justifyContent:'center', height: 48, width: 200, borderRadius: 24, backgroundColor: '#474787' }}>
							<Text style={{color:'white', fontSize: 26}}>LOGIN</Text>
						</TouchableOpacity>
					)}	
				</View>					 	

			</Animatable.View>

			</ImageBackground>
		);
	}
}
