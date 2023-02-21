import styled from 'styled-components';
import userIcon from '../../assets/images/icons/user-icon.svg';
import passwordIcon from '../../assets/images/icons/password-icon.svg';

export const LoginWrapper = styled.div`
	width: 330px;
	margin: auto;
	margin-top: 150px;
	padding: 35px 30px;
	background: #ffffff;
	opacity: 0.3;
	border: 1px solid #01384d;
	border-radius: 10px;
`;

export const LoginTitle = styled.h2`
	margin: 0;
	margin-bottom: 40px;
	font-family: 'Montserrat';
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	color: #01384d;
`;

export const LoginForm = styled.form``;
export const LoginInput = styled.input`
	width: 100%;
	margin-bottom: ${(props) => (props.margin ? '13px' : '')};
	padding: 16px 0;
	padding-left: 50px;
	font-family: 'Montserrat';
	font-size: 14px;
	line-height: 17px;
	color: #01384d;
	opacity: 0.5;
	background: #ffffff;
	opacity: 0.5;
	border: 1px solid #01384d;
	border-radius: 7px;
	&:hover {
		opacity: 1;
		background: #ffffff;
		border: 1px solid #01384d;
		border-radius: 7px;
	}
`;

export const LoginUserIcon = styled.span`
	position: relative;
	&::before {
		position: absolute;
		left: -250px;
		top: 0px;
		width: 20px;
		height: 20px;
		background-image: url(${userIcon});
		background-repeat: no-repeat;
		content: '';
	}
`;

export const LoginPasswordIcon = styled.span`
	position: relative;
	&::before {
		position: absolute;
		left: -250px;
		top: 0px;
		width: 20px;
		height: 20px;
		background-image: url(${passwordIcon});
		background-repeat: no-repeat;
		content: '';
	}
`;

export const LoginButton = styled.button`
	width: 100%;
	margin-top: 35px;
	padding: 17px 0;
	font-family: 'Montserrat';
	font-weight: 600;
	line-height: 20px;
	text-align: center;
	color: #ffffff;
	background: #01384d;
	border-radius: 7px;
	border-color: transparent;
`;
