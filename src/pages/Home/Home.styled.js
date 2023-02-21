import styled from 'styled-components';
import HomeIcon from '../../assets/images/icons/home-icon.svg';
import HomeUser from '../../assets/images/icons/home-user.svg';
import HomeIconType from '../../assets/images/icons/home-type.svg';
import HomeIconCart from '../../assets/images/icons/home-cart.svg';
import HomeIconConstruction from '../../assets/images/icons/home-construction.svg';
import HomeIconLocation from '../../assets/images/icons/home-location.svg';
import { MdViewCarousel } from 'react-icons/md';

export const HomeWrapper = styled.div`
	display: flex;
`;

export const HomeList = styled.ul`
	width: 219px;
	height: 100vh;
	margin: 0;
	padding: 0;
	color: #fff;
	background: #01384d;
	list-style: none;
`;
export const HomeListItem = styled.li`
	position: relative;
	cursor: pointer;
	&::before {
		position: absolute;
		left: 27px;
		top: 28px;
		width: 20px;
		height: 20px;
		background-image: url(${HomeIcon});
		background-repeat: no-repeat;
		content: '';
	}
	&:nth-child(2)::before {
		background-image: url(${HomeUser});
	}
	&:nth-child(3)::before {
		background-image: url(${HomeIconType});
	}
	&:nth-child(4)::before {
		background-image: url(${HomeIconCart});
	}
	&:nth-child(5)::before {
		background-image: url(${HomeIconConstruction});
	}
	&:nth-child(6)::before {
		background-image: url(${HomeIconLocation});
	}
`;

export const HomeRoutesWrapper = styled.div`
	padding: 30px;
`;
