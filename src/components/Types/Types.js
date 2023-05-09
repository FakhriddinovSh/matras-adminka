import {
	AddButton,
	DeleteButton,
	EditButton,
	OrderId,
	OrdersList,
	OrdersListItem,
	OrdersWrapper,
	UnOrderedList,
	UnOrderedListItem,
} from '../Types/Types.styled';
import { useRef, useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { Modal } from '../TypeModal/TypeModal';
import axios from 'axios';
import {
	CloseModal,
	TypeModalButton,
	TypeModalCheckboxWrapper,
	TypeModalDesc,
	TypeModalForm,
	TypeModalInput,
	TypeModalLabel,
	TypeModalTitle,
	TypeModalWrapper,
} from '../TypeModal/TypeModal.styled';
import { Switcher } from '../Switch/Switch';
import { useEffect } from 'react';

export const Types = () => {
	const [orderModal, setOrderModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const inputVal = useRef();
	const inputValOne = useRef();
	const token = localStorage.getItem('login-token');
	const [checked, setChecked] = useState(false);
	const [categoires, setCategories] = useState([]);
	const [getId, setGetId] = useState('');

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		let formData = new FormData();

		formData.append('category', inputValOne.current?.value);
		formData.append('isActive', true);

		axios
			.post(
				'https://matras-bekend.onrender.com/admin/categories',
				{
					category: inputValOne.current.value,
					isActive: checked,
				},
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) => {
				if (res.status === 201) {
					setChecked(false);
				}
			})
			.catch((err) => console.log(err));
	};

	const handleCheckInput = (e) => {
		let isChecked = e.target?.checked;
		setChecked(isChecked);
	};

	useEffect(() => {
		axios
			.get('https://matras-bekend.onrender.com/admin/categories', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => setCategories(res.data))
			.catch((err) => console.log(err));
	}, []);

	const deleteFunc = (id) => {
		axios
			.delete(
				`https://matras-bekend.onrender.com/admin/categories/${id}`,
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) => window.location.reload())
			.catch((err) => console.log(err));
	};

	const handleEditForm = (evt) => {
		evt.preventDefault();

		console.log(getId);

		axios
			.put(
				`https://matras-bekend.onrender.com/admin/categories/${getId}`,
				{
					category: inputVal?.current?.value,
					isActive: checked,
				},
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) => window.location.reload())
			.catch((err) => console.log(err));
	};

	return (
		<OrdersWrapper>
			<OrdersList>
				<OrdersListItem>Toifalar</OrdersListItem>
			</OrdersList>
			<UnOrderedList>
				{categoires.map((item) => (
					<UnOrderedListItem key={item.id}>
						<OrderId>{item.category}</OrderId>
						<EditButton
							onClick={() => {
								setGetId(item.id);
								setEditModal(true);
							}}
						/>
						<DeleteButton onClick={() => deleteFunc(item.id)} />
					</UnOrderedListItem>
				))}
			</UnOrderedList>

			<AddButton onClick={() => setOrderModal(true)}>Qo’shish</AddButton>

			<Modal modal={orderModal} setModal={setOrderModal}>
				<TypeModalWrapper>
					<TypeModalTitle>Qo’shish</TypeModalTitle>
					<TypeModalForm onSubmit={handleFormSubmit}>
						<TypeModalLabel>
							Kategoriya nomi
							<TypeModalInput
								ref={inputValOne}
								type="text"
								placeholder="masalan: Model B"
							/>
						</TypeModalLabel>
						<TypeModalCheckboxWrapper>
							<TypeModalDesc>Holat</TypeModalDesc>
							<Switcher onChange={(e) => handleCheckInput(e)} />
						</TypeModalCheckboxWrapper>
						<TypeModalButton type="submit">
							Qo’shish
						</TypeModalButton>
					</TypeModalForm>
					<CloseModal
						onClick={() => setOrderModal(false)}
					></CloseModal>
				</TypeModalWrapper>
			</Modal>

			<Modal modal={editModal} setModal={setEditModal}>
				<TypeModalWrapper>
					<TypeModalTitle>O'zgartirish</TypeModalTitle>
					<TypeModalForm onSubmit={handleEditForm}>
						<TypeModalLabel>
							Kategoriya nomi
							<TypeModalInput
								ref={inputVal}
								type="text"
								placeholder="masalan: Model B"
							/>
						</TypeModalLabel>
						<TypeModalCheckboxWrapper>
							<TypeModalDesc>Holat</TypeModalDesc>
							<Switcher onChange={(e) => handleCheckInput(e)} />
						</TypeModalCheckboxWrapper>
						<TypeModalButton type="submit">
							O'zgartirish
						</TypeModalButton>
					</TypeModalForm>
					<CloseModal
						onClick={() => setEditModal(false)}
					></CloseModal>
				</TypeModalWrapper>
			</Modal>
		</OrdersWrapper>
	);
};
