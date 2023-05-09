import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import {
	ProductModalClose,
	ProductModalDesc,
	ProductModalInput,
	ProductModalSelectLabel,
	ProductModalTitle,
} from '../Products/Products.styled';
import { Switcher } from '../Switch/Switch';
import {
	DeleteButton,
	EditButton,
	OrderId,
	OrderLink,
	OrdersList,
	OrdersListItem,
	OrdersWrapper,
	TechnologiesModalForm,
	TechnologiesModalInner,
	TechnologiesModalInnerWrapper,
	TechnologiesModalSubmit,
	TechnologiesModalSubmitWrapper,
	TechnologiesModalWrapper,
	UnOrderedList,
	UnOrderedListItem,
} from '../Technologies/Technologies.styled';
import { Modal } from '../TypeModal/TypeModal';
import { AddButton } from '../Types/Types.styled';

export const Technologies = () => {
	const [orderModal, setOrderModal] = useState(false);
	const [navinka, setNavinka] = useState(false);
	const [technology, setTechnology] = useState([]);
	const [editModal, setEditModal] = useState(false);
	const [editId, setEditId] = useState(0);
	const token = localStorage.getItem('login-token');
	const photoName = useRef();
	const photoNameOne = useRef();
	const photoLink = useRef();
	const photoLinkOne = useRef();
	const videoName = useRef();
	const videoNameOne = useRef();
	const videoLink = useRef();
	const videoLinkOne = useRef();

	const handleTechnologySubmit = (evt) => {
		evt.preventDefault();

		axios
			.post(
				'http://localhost:1212/admin/technology',
				{
					name: photoNameOne.current.value,
					thumbnail: photoLinkOne.current.value,
					link: videoLinkOne.current.value,
					description: videoNameOne.current.value,
					isActive: true,
				},
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) => {
				if (res.status === 201) {
					window.location.reload();
				}
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		axios
			.get('https://matras-bekend.onrender.com/admin/technology', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => setTechnology(res.data))
			.catch((err) => console.log(err));
	}, []);

	const deleteTechnology = (id) => {
		axios
			.delete(
				'https://matras-bekend.onrender.com/admin/technology/' + id,
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	const handleTechnologyEdit = (evt) => {
		evt.preventDefault();

		axios
			.put(
				'https://matras-bekend.onrender.com/admin/technology/' + editId,
				{
					name: photoName.current.value,
					thumbnail: photoLink.current.value,
					link: videoLink.current.value,
					description: videoName.current.value,
					isActive: navinka,
				},
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) => {
				if (res.status === 200) {
					alert('edited');
					window.location.reload();
					setEditModal(false);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<OrdersWrapper>
			<OrdersList>
				<OrdersListItem>Nomlari</OrdersListItem>
				<OrdersListItem>Matn</OrdersListItem>
				<OrdersListItem>Video</OrdersListItem>
			</OrdersList>
			<UnOrderedList>
				{/* Map items */}
				{technology.map((item) => (
					<UnOrderedListItem key={item.id}>
						<OrderId>{item.name}</OrderId>
						<OrderId>{item.description}</OrderId>
						<OrderLink href={'https://youtu.be/' + item.link}>
							youtube.com...
						</OrderLink>
						<div>
							<EditButton
								onClick={() => {
									setEditId(item.id);
									setEditModal(true);
								}}
							/>
							<DeleteButton
								onClick={() => deleteTechnology(item.id)}
							/>
						</div>
					</UnOrderedListItem>
				))}
			</UnOrderedList>
			<AddButton onClick={() => setOrderModal(true)}>Qo’shish</AddButton>

			<Modal modal={orderModal} setModal={setOrderModal}>
				<TechnologiesModalWrapper>
					<ProductModalClose
						onClick={() => setOrderModal(false)}
					></ProductModalClose>
					<ProductModalTitle>Qo'shish</ProductModalTitle>
					<TechnologiesModalForm onSubmit={handleTechnologySubmit}>
						<TechnologiesModalInnerWrapper>
							<ProductModalSelectLabel margin>
								<ProductModalDesc>Nomi</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan:"
									name="technology_photo_name"
									ref={photoNameOne}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Rasm</ProductModalDesc>
								<ProductModalInput
									type="text"
									name="technology_photo_link"
									ref={photoLinkOne}
								/>
							</ProductModalSelectLabel>
						</TechnologiesModalInnerWrapper>

						<TechnologiesModalInnerWrapper>
							<ProductModalSelectLabel margin>
								<ProductModalDesc>Nomi</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan:"
									name="technology_video_name"
									ref={videoNameOne}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Video</ProductModalDesc>
								<ProductModalInput
									type="text"
									name="technology_video_link"
									ref={videoLinkOne}
								/>
							</ProductModalSelectLabel>
						</TechnologiesModalInnerWrapper>

						<TechnologiesModalSubmitWrapper>
							<TechnologiesModalInner>
								<label htmlFor="check">Navinka</label>
								<Switcher
									id="check"
									onClick={() => setNavinka(!navinka)}
								/>
							</TechnologiesModalInner>
							<TechnologiesModalSubmit type="submit">
								Qo'shish
							</TechnologiesModalSubmit>
						</TechnologiesModalSubmitWrapper>
					</TechnologiesModalForm>
				</TechnologiesModalWrapper>
			</Modal>

			<Modal modal={editModal} setModal={setEditModal}>
				<TechnologiesModalWrapper>
					<ProductModalClose
						onClick={() => setEditModal(false)}
					></ProductModalClose>
					<ProductModalTitle>O'zgaritirish</ProductModalTitle>
					<TechnologiesModalForm onSubmit={handleTechnologyEdit}>
						<TechnologiesModalInnerWrapper>
							<ProductModalSelectLabel margin>
								<ProductModalDesc>Nomi</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan:"
									name="technology_photo_name"
									ref={photoName}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Rasm</ProductModalDesc>
								<ProductModalInput
									type="text"
									name="technology_photo_link"
									ref={photoLink}
								/>
							</ProductModalSelectLabel>
						</TechnologiesModalInnerWrapper>

						<TechnologiesModalInnerWrapper>
							<ProductModalSelectLabel margin>
								<ProductModalDesc>Nomi</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan:"
									name="technology_video_name"
									ref={videoName}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Video</ProductModalDesc>
								<ProductModalInput
									type="text"
									name="technology_video_link"
									ref={videoLink}
								/>
							</ProductModalSelectLabel>
						</TechnologiesModalInnerWrapper>

						<TechnologiesModalSubmitWrapper>
							<TechnologiesModalInner>
								<label htmlFor="check">Navinka</label>
								<Switcher
									id="check"
									onClick={() => setNavinka(!navinka)}
								/>
							</TechnologiesModalInner>
							<TechnologiesModalSubmit type="submit">
								O'zgartirish
							</TechnologiesModalSubmit>
						</TechnologiesModalSubmitWrapper>
					</TechnologiesModalForm>
				</TechnologiesModalWrapper>
			</Modal>
		</OrdersWrapper>
	);
};
