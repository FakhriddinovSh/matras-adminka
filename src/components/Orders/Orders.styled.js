import styled from 'styled-components';
import DeleteIcon from '../../assets/images/icons/delete-icon.svg';

export const OrdersWrapper = styled.div`
	width: 1215px;
`;
export const OrdersList = styled.ol`
	display: flex;
	align-items: center;
	width: 100%;
	margin: 0;
	padding: 16px 30px;
	color: #fff;
	background-color: #01384d;
	list-style: none;
`;
export const OrdersListItem = styled.li`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 15px;
	line-height: 18px;
	&:nth-child(2) {
		width: 110px;
		margin-right: 59px;
		margin-left: 68px;
		text-align: center;
	}
	&:nth-child(3) {
		width: 132px;
		margin-right: 94px;
	}
	&:nth-child(4) {
		margin-right: 100px;
	}
	&:nth-child(5) {
		margin-right: 100px;
	}
`;

export const UnOrderedList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;
export const UnOrderedListItem = styled.li`
	position: relative;
	display: flex;
	align-items: center;
	padding: 20px 0;
	padding-left: 34px;
	border: 1px solid #b3c3ca;
`;
export const OrderId = styled.span`
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	color: #000000;
`;
export const OrderTime = styled.span`
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	color: #000000;
`;

export const OrderDate = styled.span`
	display: flex;
	align-items: center;
	width: 120px;
	margin-left: 68px;
	margin-right: 59px;
	text-align: center;
`;
export const OrderPhone = styled.span`
	margin-right: 72px;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	color: #000000;
`;
export const DeleteButton = styled.button`
	position: absolute;
	right: 28px;
	top: 13px;
	width: 34px;
	height: 34px;
	border-radius: 5px;
	border: none;
	background-color: #fbe9e9;
	background-image: url(${DeleteIcon});
	background-position: center;
	background-repeat: no-repeat;
`;
export const OrderForm = styled.form``;

export const OrderClient = styled.span`
	margin-right: 104px;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	color: #000000;
`;

export const OrderCount = styled.span`
	margin-right: 146px;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	color: #000000;
`;
