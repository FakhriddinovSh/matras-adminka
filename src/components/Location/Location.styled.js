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

export const OrderForm = styled.form`
	display: flex;
`;

export const LocationModalWrapper = styled.div`
	position: relative;
	width: 815px;
	margin: 0 auto;
	margin-top: 100px;
	padding: 20px;
	background-color: #fff;
`;

export const ProductModalInnerWrapper = styled.div`
	width: 223px;
	margin-left: 40px;
`;

export const ProductModalTextareaWrapper = styled.div`
	margin-left: 65px;
`;

export const CarouselButton = styled.button`
	position: absolute;
	bottom: 37px;
	right: 200px;
	padding: 8px 31px;
	color: #fff;
	background: #01384d;
	border-color: transparent;
	border-radius: 8px;
`;

export const CarouselWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 15px;
`;

export const CarouselTitle = styled.p`
	margin-top: 25px;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 17px;
	color: #000000;
`;

export const CarouseLabel = styled.label`
	margin-right: 50px;
`;
export const CarouseInput = styled.input`
	width: 250px;
	padding-top: 13px;
	padding-bottom: 13px;
	padding-left: 15px;
	font-family: 'Montserrat';
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	color: #000000;
	opacity: 0.4;
	border-radius: 5px;
`;
