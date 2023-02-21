import styled from 'styled-components';
import CloseIcon from '../../assets/images/icons/close-icon.svg';

export const ModalWrapper = styled.div`
	position: fixed;
	overflow-y: hidden;
	top: 0;
	left: 0;
	display: ${(props) => (props.opener === true ? 'block' : 'none')};
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
`;

export const TypeModalWrapper = styled.div`
	position: relative;
	width: 270px;
	margin: 0 auto;
	padding: 25px;
	padding-bottom: 8px;
	margin-top: 100px;
	background-color: #fff;
`;

export const TypeModalTitle = styled.h3`
	margin: 0;
	margin-bottom: 30px;
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	color: #000000;
`;

export const TypeModalForm = styled.form`
	margin-bottom: 25px;
`;
export const TypeModalLabel = styled.label`
	display: inline-block;
	margin-bottom: 10px;
	font-family: 'Montserrat';
	font-size: 14px;
	line-height: 17px;
	color: #000000;
`;
export const TypeModalInput = styled.input`
	width: 100%;
	margin-top: 10px;
	padding-top: 13px;
	padding-bottom: 12px;
	padding-left: 15px;
	font-family: 'Montserrat';
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	color: #000000;
	opacity: 0.4;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
`;

export const TypeModalCheckboxWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 41px;
	margin-top: 27px;
`;

export const TypeModalDesc = styled.p`
	margin: 0;
	font-family: 'Montserrat';
	font-size: 14px;
	line-height: 17px;
	color: #000000;
`;

export const TypeModalButton = styled.button`
	width: 100%;
	display: block;
	font-family: 'Montserrat';
	font-weight: 600;
	padding: 14px 0;
	font-size: 14px;
	line-height: 17px;
	text-align: center;
	color: #ffffff;
	background: #01384d;
	border-radius: 7px;
`;

export const CloseModal = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	width: 30px;
	height: 30px;
	background-color: #01384d;
	background-image: url(${CloseIcon});
	background-repeat: no-repeat;
	background-position: center;
	border: transparent;
`;
