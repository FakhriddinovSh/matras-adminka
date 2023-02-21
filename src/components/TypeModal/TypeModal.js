import { ModalWrapper } from './TypeModal.styled';

export const Modal = ({ children, modal }) => {
	return <ModalWrapper opener={modal}>{children}</ModalWrapper>;
};
