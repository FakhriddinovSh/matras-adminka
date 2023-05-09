import { useEffect, useMemo, useRef, useState } from 'react';
import {
	CarouseInput,
	CarouseLabel,
	CarouselButton,
	CarouselTitle,
	CarouselWrapper,
	DeleteButton,
	EditButton,
	LocationModalWrapper,
	OrderForm,
	OrderId,
	OrdersList,
	OrdersListItem,
	OrdersWrapper,
	ProductModalInnerWrapper,
	ProductModalTextareaWrapper,
	UnOrderedList,
	UnOrderedListItem,
} from '../Location/Location.styled';
import {
	ProductModalCarouselWrapper,
	ProductModalClose,
	ProductModalDesc,
	ProductModalFirstInput,
	ProductModalFirstLabel,
	ProductModalInput,
	ProductModalNavinlaWrapper,
	ProductModalSelectLabel,
	ProductModalTextarea,
	ProductModalTitle,
	ProductSubmitBtn,
} from '../Products/Products.styled';
import { Switcher } from '../Switch/Switch';
import { Modal } from '../TypeModal/TypeModal';
import { AddButton } from '../Types/Types.styled';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import axios from 'axios';

export const Location = () => {
	const [orderModal, setOrderModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [navinka, setNavinka] = useState(false);
	const location = useRef();
	const locationOne = useRef();
	const locationLink = useRef();
	const locationLinkOne = useRef();
	const information = useRef();
	const informationOne = useRef();
	const [imageOne, setImageOne] = useState(null);
	const [imageTwo, setImageTwo] = useState(null);
	const [imageThree, setImageThree] = useState(null);
	const token = localStorage.getItem('login-token');
	const [address, setAddress] = useState([]);
	const [editId, setEditId] = useState(0);

	const imageValue = (props) => {
		setImageOne(props.target.files[0]);
	};
	const imageValueTwo = (props) => {
		setImageTwo(props.target.files[0]);
	};
	const imageValueThree = (props) => {
		setImageThree(props.target.files[0]);
	};

	const handleLocationSubmit = (evt) => {
		evt.preventDefault();

		const formData = new FormData();
		formData.append('location', locationOne.current.value);
		formData.append('destination', informationOne.current.value);
		formData.append('geolocation', locationLinkOne.current.value);
		formData.append('isActive', true);
		formData.append('images', imageOne);
		formData.append('images', imageTwo);
		formData.append('images', imageThree);
		axios
			.post(
				`https://matras-bekend.onrender.com/admin/address`,
				formData,
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then(
				(res) =>
					res.status === 201
						? alert('address added')
						: alert('address not added'),
				((location.current.value = ''),
				information.current.value,
				locationLink.current.value),
			)
			.catch((err) => console.log(err));
	};

	const handleLocationEdit = (evt) => {
		evt.preventDefault();

		const formData = new FormData();
		formData.append('location', location.current.value);
		formData.append('destination', information.current.value);
		formData.append('geolocation', locationLink.current.value);
		formData.append('isActive', true);
		formData.append('images', imageOne);
		formData.append('images', imageTwo);
		formData.append('images', imageThree);
		console.log(formData);
		axios
			.put(
				`https://matras-bekend.onrender.com/admin/address/` + editId,
				formData,
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) => {
				if (res.status === 200) {
					window.location.reload();
				}
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		axios
			.get('https://matras-bekend.onrender.com/admin/address', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				setAddress(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const deleteFunc = (id) => {
		axios
			.delete(`https://matras-bekend.onrender.com/admin/address/${id}`, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					window.location.reload();
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<OrdersWrapper>
			<OrdersList>
				<OrdersListItem>Manzil</OrdersListItem>
				<OrdersListItem>Matn</OrdersListItem>
				<OrdersListItem>Location</OrdersListItem>
			</OrdersList>
			<UnOrderedList>
				{address.length
					? address.map((item) => (
							<UnOrderedListItem key={item.id}>
								<OrderId>{item.location}</OrderId>
								<OrderId>{item.destination}</OrderId>
								<OrderId>{item.geolacation}</OrderId>
								<div>
									<EditButton
										onClick={() => {
											setEditId(item.id);
											setEditModal(true);
										}}
									/>
									<DeleteButton
										onClick={() => deleteFunc(item.id)}
									/>
								</div>
							</UnOrderedListItem>
					  ))
					: console.log('Not found')}
			</UnOrderedList>

			<AddButton onClick={() => setOrderModal(true)}>Qo’shish</AddButton>
			{/* <CarouselButton onClick={() => setCarousel(true)}>
				Carousel Qo’shish
			</CarouselButton> */}

			<Modal modal={orderModal} setModal={setOrderModal}>
				<LocationModalWrapper>
					<ProductModalClose
						onClick={() => setOrderModal(false)}
					></ProductModalClose>

					<ProductModalTitle>Qo'shish</ProductModalTitle>

					<OrderForm onSubmit={handleLocationSubmit}>
						<ProductModalCarouselWrapper>
							<Swiper
								spaceBetween={30}
								pagination={{
									clickable: true,
								}}
								modules={[Pagination]}
								className="mySwiper"
							>
								<SwiperSlide>
									<ProductModalFirstLabel htmlFor="form-image"></ProductModalFirstLabel>
									<ProductModalFirstInput
										type="file"
										id="form-image"
										onChange={imageValue}
									/>
								</SwiperSlide>
								<SwiperSlide>
									<ProductModalFirstLabel htmlFor="form-image-2"></ProductModalFirstLabel>
									<ProductModalFirstInput
										type="file"
										id="form-image-2"
										onChange={imageValueTwo}
									/>
								</SwiperSlide>
								<SwiperSlide>
									<ProductModalFirstLabel htmlFor="form-image-3"></ProductModalFirstLabel>
									<ProductModalFirstInput
										type="file"
										id="form-image-3"
										onChange={imageValueThree}
									/>
								</SwiperSlide>
							</Swiper>
						</ProductModalCarouselWrapper>
						<ProductModalInnerWrapper>
							<ProductModalSelectLabel>
								<ProductModalDesc>Manzil</ProductModalDesc>
								<ProductModalInput
									type="text"
									name="product_type"
									ref={locationOne}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Location</ProductModalDesc>
								<ProductModalInput
									type="text"
									name="product_type"
									ref={locationLinkOne}
								/>
							</ProductModalSelectLabel>
							<ProductModalNavinlaWrapper>
								<ProductModalSelectLabel htmlFor="navinla">
									Navinla
								</ProductModalSelectLabel>
								<Switcher
									id="navinla"
									onClick={() => setNavinka(!navinka)}
								/>
							</ProductModalNavinlaWrapper>
						</ProductModalInnerWrapper>
						<ProductModalTextareaWrapper>
							<ProductModalSelectLabel>
								<ProductModalDesc>Matn</ProductModalDesc>
								<ProductModalTextarea
									name="product_description"
									cols="30"
									rows="10"
									ref={informationOne}
									placeholder="info..."
								></ProductModalTextarea>
							</ProductModalSelectLabel>
							<ProductSubmitBtn type="submit">
								Saqlash
							</ProductSubmitBtn>
						</ProductModalTextareaWrapper>
					</OrderForm>
				</LocationModalWrapper>
			</Modal>

			<Modal modal={editModal} setModal={setEditModal}>
				<LocationModalWrapper>
					<ProductModalClose
						onClick={() => setEditModal(false)}
					></ProductModalClose>

					<ProductModalTitle>O'zgartirish</ProductModalTitle>

					<OrderForm onSubmit={handleLocationEdit}>
						<ProductModalCarouselWrapper>
							<Swiper
								spaceBetween={30}
								pagination={{
									clickable: true,
								}}
								modules={[Pagination]}
								className="mySwiper"
							>
								<SwiperSlide>
									<ProductModalFirstLabel htmlFor="form-image"></ProductModalFirstLabel>
									<ProductModalFirstInput
										type="file"
										id="form-image"
										onChange={imageValue}
									/>
								</SwiperSlide>
								<SwiperSlide>
									<ProductModalFirstLabel htmlFor="form-image-2"></ProductModalFirstLabel>
									<ProductModalFirstInput
										type="file"
										id="form-image-2"
										onChange={imageValueTwo}
									/>
								</SwiperSlide>
								<SwiperSlide>
									<ProductModalFirstLabel htmlFor="form-image-3"></ProductModalFirstLabel>
									<ProductModalFirstInput
										type="file"
										id="form-image-3"
										onChange={imageValueThree}
									/>
								</SwiperSlide>
							</Swiper>
						</ProductModalCarouselWrapper>
						<ProductModalInnerWrapper>
							<ProductModalSelectLabel>
								<ProductModalDesc>Manzil</ProductModalDesc>
								<ProductModalInput
									type="text"
									name="product_type"
									ref={location}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Location</ProductModalDesc>
								<ProductModalInput
									type="text"
									name="product_type"
									ref={locationLink}
								/>
							</ProductModalSelectLabel>
							<ProductModalNavinlaWrapper>
								<ProductModalSelectLabel htmlFor="navinla">
									Navinla
								</ProductModalSelectLabel>
								<Switcher
									id="navinla"
									onClick={() => setNavinka(!navinka)}
								/>
							</ProductModalNavinlaWrapper>
						</ProductModalInnerWrapper>
						<ProductModalTextareaWrapper>
							<ProductModalSelectLabel>
								<ProductModalDesc>Matn</ProductModalDesc>
								<ProductModalTextarea
									name="product_description"
									cols="30"
									rows="10"
									ref={information}
									placeholder="info..."
								></ProductModalTextarea>
							</ProductModalSelectLabel>
							<ProductSubmitBtn type="submit">
								Saqlash
							</ProductSubmitBtn>
						</ProductModalTextareaWrapper>
					</OrderForm>
				</LocationModalWrapper>
			</Modal>
		</OrdersWrapper>
	);
};
