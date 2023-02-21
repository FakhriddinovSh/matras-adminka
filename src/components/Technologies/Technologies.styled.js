import styled from 'styled-components';
import DeleteIcon from '../../assets/images/icons/delete-icon.svg';
import EditIcon from '../../assets/images/icons/edit-icon.svg';

export const OrdersWrapper = styled.div`
	width: 1215px;
`;
export const OrdersList = styled.ol`
	display: flex;
	align-items: center;
	width: 100%;
	margin: 0;
	padding: 16px 40px;
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
		margin-right: 120px;
		margin-left: 120px;
		text-align: center;
	}
	&:nth-child(3) {
		width: 132px;
		margin-right: 94px;
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
	width: 100px;
	margin-right: 102px;
	font-weight: 700;
	font-size: 15px;
	line-height: 18px;
	color: #000000;
`;

export const OrderLink = styled.a`
	margin-right: 102px;
	font-weight: 700;
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
	margin-right: 114px;
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

export const EditButton = styled.button`
	position: absolute;
	right: 75px;
	top: 13px;
	width: 34px;
	height: 34px;
	border-radius: 5px;
	border: none;
	background-color: #e6ebed;
	background-image: url(${EditIcon});
	background-position: center;
	background-repeat: no-repeat;
`;

export const OrderForm = styled.form``;

export const TechnologiesModalWrapper = styled.div`
	position: relative;
	width: 515px;
	margin: 0 auto;
	margin-top: 80px;
	padding: 25px;
	background-color: #fff;
`;

export const TechnologiesModalForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin-top: 30px;
`;

export const TechnologiesModalInnerWrapper = styled.div`
	display: flex;
`;

export const TechnologiesModalSubmitWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

export const TechnologiesModalInner = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
`;

export const TechnologiesModalSubmit = styled.button`
	width: 50%;
	margin-left: 20px;
	margin-right: -12px;
	padding: 12px 0;
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
	text-align: center;
	background: #01384d;
	border-radius: 7px;
`;
