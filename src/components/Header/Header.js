import React from 'react';
import {
	HeaderFormIcon,
	HeaderLeft,
	HeaderLogoForm,
	HeaderLogoImg,
	HeaderLogoInput,
	HeaderLogoLink,
	HeaderRight,
	HeaderWrapper,
	ProfileImage,
	ProfileName,
} from './Header.styled';
import Logo from '../../assets/images/icons/logo.svg';
import ImageProfile from '../../assets/images/icons/profile-icon.svg';

export const Header = () => {
	const userSearch = (evt) => {
		evt.preventDefault();
	};

	return (
		<HeaderWrapper>
			<HeaderLeft>
				<HeaderLogoLink to="/">
					<HeaderLogoImg src={Logo} width="142" height="30" />
				</HeaderLogoLink>
				<HeaderLogoForm onSubmit={userSearch} autoComplete="off">
					<HeaderLogoInput
						type="text"
						placeholder="User"
						name="user_search"
					/>
					<HeaderFormIcon></HeaderFormIcon>
				</HeaderLogoForm>
			</HeaderLeft>
			<HeaderRight>
				<ProfileImage src={ImageProfile} alt="User image" />
				<ProfileName>John Doe</ProfileName>
			</HeaderRight>
		</HeaderWrapper>
	);
};
