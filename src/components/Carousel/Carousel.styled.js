import styled from 'styled-components';
import LabelBg from '../../assets/images/product-add.png';

export const CarouselWrapper = styled.div``;
export const CarouselForm = styled.form`
	display: flex;
`;
export const CarouselLabel = styled.label`
	width: 230px;
	height: 230px;
	background-image: url(${LabelBg});
	background-repeat: no-repeat;
`;
export const CarouselInput = styled.input`
	display: ${(props) => (props.display ? 'none' : 'inline-block')};
	width: 320px;
	margin-left: 30px;
	margin-bottom: 40px;
	padding: 13px 0;
	padding-left: 15px;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	color: #000000;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
`;
export const CarouselButton = styled.button`
	margin-left: 30px;
	padding: 17px 79px;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
	border-color: transparent;
	background: #01384d;
	border-radius: 7px;
`;

export const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;
