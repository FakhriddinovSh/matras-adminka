import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	LoginButton,
	LoginForm,
	LoginInput,
	LoginPasswordIcon,
	LoginTitle,
	LoginUserIcon,
	LoginWrapper,
} from './Login.styled';

export const Login = () => {
	const formSubmit = (evt) => {
		evt.preventDefault();

		axios
			.post('http://localhost:1212/admin/login', {
				userName: 'admin',
				password: 'admin',
			})
			.then((res) => {
				if (res.status === 200) {
					localStorage.setItem('login-token', res.data.token);
					window.location.reload();
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<LoginWrapper>
			<LoginTitle>Kirish</LoginTitle>
			<LoginForm onSubmit={formSubmit}>
				<LoginInput
					type="text"
					placeholder="Login"
					name="user_name"
					margin
					required
				/>
				<LoginUserIcon></LoginUserIcon>
				<LoginInput
					type="password"
					placeholder="Parol"
					name="user_password"
					required
				/>
				<LoginPasswordIcon></LoginPasswordIcon>
				<LoginButton type="submit">Kirish</LoginButton>
			</LoginForm>
		</LoginWrapper>
	);
};
