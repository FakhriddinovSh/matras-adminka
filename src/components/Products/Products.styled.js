import styled from 'styled-components';
import DeleteIcon from '../../assets/images/icons/delete-icon.svg';
import CloseIcon from '../../assets/images/icons/close-icon.svg';
import ProductAdd from '../../assets/images/product-add.png';

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
		margin-right: 14px;
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
	width: 150px;
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
	margin-right: 0px;
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
	margin-right: 70px;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	color: #000000;
`;

export const ProductModalWrapper = styled.div`
	position: relative;
	width: 80%;
	margin: 0 auto;
	margin-top: 50px;
	padding: 25px;
	background-color: #fff;
`;

export const ProductModalTitle = styled.h3`
	margin: 0;
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	color: #000000;
`;

export const ProductModalForm = styled.form`
	display: flex;
	/* align-items: center; */
	justify-content: space-between;
`;

export const ProductModalSecondWrapper = styled.div`
	margin: 0 50px;
`;

export const ProductModalSelectLabel = styled.label`
	margin-right: ${(props) => (props.margin ? '30px' : '')};
`;
export const ProductModalDesc = styled.p`
	margin: 0;

	margin-bottom: 10px;
`;

export const ProductModalSelect = styled.select`
	width: 230px;
	margin-bottom: 20px;
	padding: 12px 0;
	padding-left: 15px;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
`;

export const ProductModalOption = styled.option``;

export const ProductModalInput = styled.input`
	width: 230px;
	margin-bottom: 20px;
	padding: 12px 0;
	padding-left: 15px;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
`;

export const ProductModalCarouselWrapper = styled.div`
	width: 230px;
	margin-top: 25px;
`;

export const ProductModalThirdWrapper = styled.div``;
export const ProductModalLastWrapper = styled.div``;
export const ProductModalNavinlaWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	margin-top: 30px;
`;
export const ProductModalTextarea = styled.textarea`
	width: 220px;
	height: 127px;
	padding: 15px;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	resize: none;
`;

export const ProductModalClose = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	width: 30px;
	height: 30px;
	background-color: #01384d;
	background-image: url(${CloseIcon});
	background-position: center;
	border-color: transparent;
	background-repeat: no-repeat;
`;

export const ProductModalFirstInput = styled.input`
	display: none;
`;

export const ProductModalFirstLabel = styled.label`
	width: 230px;
	height: 230px;
	background-image: url(${ProductAdd});
`;

export const ProductSubmitBtn = styled.button`
	width: 100%;
	margin-top: 40px;
	padding: 14px 0;
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
	text-align: center;
	background: #01384d;
	border-color: transparent;
	border-radius: 7px;
`;
