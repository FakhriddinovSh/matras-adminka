import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import searchIcon from '../../assets/images/icons/header-search.svg';

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px 30px;
	padding-right: 60px;
	background: #01384d;
`;

export const HeaderLeft = styled.div`
	display: flex;
	align-items: center;
`;
export const HeaderRight = styled.div`
	display: flex;
	align-items: center;
`;

export const HeaderLogoLink = styled(NavLink)`
	display: inline-block;
	width: 219px;
`;
export const HeaderLogoImg = styled.img``;
export const HeaderLogoForm = styled.form``;
export const HeaderLogoInput = styled.input`
	width: 400px;
	padding: 12px 20px;
	font-weight: 500;
	font-size: 13px;
	line-height: 16px;
	color: #000000;
	background: #ffffff;
	border-color: transparent;
	border-radius: 7px;
`;

export const HeaderFormIcon = styled.span`
	position: relative;
	&::after {
		position: absolute;
		left: -42px;
		top: 0;
		width: 22px;
		height: 22px;
		background-image: url(${searchIcon});
		background-repeat: no-repeat;
		content: '';
	}
`;

export const ProfileImage = styled.img``;
export const ProfileName = styled.p`
	margin: 0;
	margin-left: 10px;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
`;
