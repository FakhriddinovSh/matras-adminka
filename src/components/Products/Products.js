import {
	DeleteButton,
	OrderClient,
	OrderCount,
	OrderDate,
	OrderForm,
	OrderId,
	OrderPhone,
	OrdersList,
	OrdersListItem,
	OrdersWrapper,
	ProductModalCarouselWrapper,
	ProductModalClose,
	ProductModalDesc,
	ProductModalFirstInput,
	ProductModalFirstLabel,
	ProductModalForm,
	ProductModalInput,
	ProductModalLastWrapper,
	ProductModalNavinlaWrapper,
	ProductModalOption,
	ProductModalSecondWrapper,
	ProductModalSelect,
	ProductModalSelectLabel,
	ProductModalTextarea,
	ProductModalThirdWrapper,
	ProductModalTitle,
	ProductModalWrapper,
	ProductSubmitBtn,
	UnOrderedList,
	UnOrderedListItem,
} from './Products.styled';
import { Switcher } from '../Switch/Switch';
import { AddButton, EditButton } from '../Types/Types.styled';
import { Modal } from '../TypeModal/TypeModal';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import axios from 'axios';
import { useRef } from 'react';
import { Checkbox } from '@mui/material';

export const Products = () => {
	const [orderModal, setOrderModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [categories, setCategories] = useState([]);
	const [imageOne, setImageOne] = useState(null);
	const [imageTwo, setImageTwo] = useState(null);
	const [imageThree, setImageThree] = useState(null);
	const productType = useRef();
	const productTypeOne = useRef();
	const productName = useRef();
	const productNameOne = useRef();
	const productCost = useRef();
	const productCostOne = useRef();
	const productWeight = useRef();
	const productWeightOne = useRef();
	const productSize = useRef();
	const productSizeOne = useRef();
	const productGuaranty = useRef();
	const productGuarantyOne = useRef();
	const productHole = useRef();
	const productHoleOne = useRef();
	const productDiscount = useRef();
	const productDiscountOne = useRef();
	const productInfo = useRef();
	const productInfoOne = useRef();
	const [isActive, productActive] = useState();
	const [products, setProducts] = useState([]);
	const [secondProducts, setSecondProducts] = useState([]);
	const token = localStorage.getItem('login-token');
	const [checked, setChecked] = useState(true);
	const [navinla, setNavinla] = useState(true);
	const [editId, setEditId] = useState(0);

	useEffect(() => {
		axios
			.get('https://matras-bekend.onrender.com/admin/categories', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				setCategories(res.data);
				setSecondProducts(res.data);
			})
			.catch((err) => console.log(err));

		axios
			.get('https://matras-bekend.onrender.com/admin/products', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => setProducts(res.data.products))
			.catch((err) => console.log(err));
	}, []);

	const imageValue = (props) => {
		setImageOne(props.target.files[0]);
	};
	const imageValueTwo = (props) => {
		setImageTwo(props.target.files[0]);
	};
	const imageValueThree = (props) => {
		setImageThree(props.target.files[0]);
	};

	const handleFormSubmit = (evt) => {
		evt?.preventDefault();

		const formData = new FormData();

		console.log(
			imageOne,
			imageTwo,
			imageThree,
			productTypeOne.current.value,
			productName.current.value,
			productWeightOne.current.value,
			productGuarantyOne.current.value,
			productSizeOne.current.value,
			productHoleOne.current.value,
			productInfoOne.current.value,
			productCostOne.current.value,
			productCostOne.current.value,
		);

		formData.append('category', productTypeOne.current.value);
		formData.append('name', productName.current.value);
		formData.append('weight', Number(productWeightOne.current.value));
		formData.append('images', imageOne);
		formData.append('images', imageTwo);
		formData.append('images', imageThree);
		formData.append('isActive', isActive);
		formData.append('warranty', Number(productGuarantyOne.current.value));
		formData.append('size', productSizeOne.current.value);
		formData.append('capacity', productHoleOne.current.value);
		formData.append('body', productInfoOne.current.value);
		formData.append('cost', Number(productCostOne.current.value));
		formData.append('newCost', Number(productDiscountOne.current.value));
		formData.append('discount', checked);
		formData.append('new', navinla);

		axios
			.post(
				`https://matras-bekend.onrender.com/admin/products/${productTypeOne.current.value}`,
				formData,
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) =>
				res.status === 201
					? alert('Product added')
					: alert('Product not added'),
			)
			.catch((err) => console.log(err));
	};

	const deleteProduct = (id) => {
		axios
			.delete(`https://matras-bekend.onrender.com/admin/products/` + id, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					alert('Succesfully deleted');
					window.location.reload();
				}
			})
			.catch((err) => console.log(err));
	};

	const editProduct = (evt) => {
		evt.preventDefault();

		const formData = new FormData();
		formData.append('category', productType.current.value);
		formData.append('name', productNameOne.current.value);
		formData.append('weight', Number(productWeight.current.value));
		formData.append('images', imageOne);
		formData.append('images', imageTwo);
		formData.append('images', imageThree);
		formData.append('isActive', isActive);
		formData.append('warranty', productGuaranty.current.value);
		formData.append('size', productSize.current.value);
		formData.append('capacity', productHole.current.value);
		formData.append('body', productInfo.current.value);
		formData.append('cost', Number(productCost.current.value));
		formData.append('newCost', Number(productDiscount.current.value));
		formData.append('discount', checked);
		formData.append('new', navinla);

		axios
			.put(
				`https://matras-bekend.onrender.com/admin/products/${editId}`,
				formData,
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) => {
				if (res.status > 199 || res.status < 210) {
					window.location.reload();
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<OrdersWrapper>
			<OrdersList>
				<OrdersListItem>Mahsulat nomlari</OrdersListItem>
				<OrdersListItem>Toifalar</OrdersListItem>
				<OrdersListItem>Narxi</OrdersListItem>
				<OrdersListItem>Yuklama</OrdersListItem>
				<OrdersListItem>Razmeri</OrdersListItem>
				<OrdersListItem>Status</OrdersListItem>
			</OrdersList>

			<UnOrderedList>
				{products.map((item) => (
					<UnOrderedListItem key={item.id}>
						<OrderId>{item.name}</OrderId>
						<OrderDate>Model C</OrderDate>
						<OrderPhone>{item.cost} so’m</OrderPhone>
						<OrderClient>{item.weight} kg</OrderClient>
						<OrderCount>{item.size}</OrderCount>
						<OrderForm>
							<Switcher />
						</OrderForm>
						<div>
							<EditButton
								onClick={() => {
									setEditId(item.id);
									setEditModal(true);
								}}
							/>
							<DeleteButton
								onClick={() => deleteProduct(item.id)}
							/>
						</div>
					</UnOrderedListItem>
				))}
			</UnOrderedList>

			<AddButton onClick={() => setOrderModal(true)}>Qo’shish</AddButton>

			<Modal modal={orderModal} setModal={setOrderModal}>
				<ProductModalWrapper>
					<ProductModalClose
						onClick={() => setOrderModal(false)}
					></ProductModalClose>
					<ProductModalTitle>Qo'shish</ProductModalTitle>
					<ProductModalForm onSubmit={handleFormSubmit}>
						<ProductModalCarouselWrapper>
							<Swiper
								pagination={true}
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

						<ProductModalSecondWrapper>
							<ProductModalSelectLabel>
								<ProductModalDesc>Toifalar</ProductModalDesc>
								<ProductModalSelect
									type="text"
									placeholder="masalan: Model C"
									name="product_model"
									ref={productTypeOne}
								>
									<ProductModalOption hidden>
										masalan: Model C
									</ProductModalOption>
									{secondProducts.map((item) => (
										<ProductModalOption
											key={item.id}
											value={item.id}
										>
											{item.category}
										</ProductModalOption>
									))}
								</ProductModalSelect>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Tovar nomi</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: Lux Soft Memory"
									name="product_name"
									ref={productName}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Narxi</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: 20 000"
									name="product__cost"
									ref={productCostOne}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Yuklama</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: 200 kg"
									name="product__weight"
									ref={productWeightOne}
								/>
							</ProductModalSelectLabel>
						</ProductModalSecondWrapper>

						<ProductModalThirdWrapper>
							<ProductModalSelectLabel>
								<ProductModalDesc>Razmeri</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: 200 x 140 x 40"
									name="product_sie"
									ref={productSizeOne}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Kafolat</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: 1 yil"
									name="product_guaranty"
									ref={productGuarantyOne}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Sig’m</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: 2"
									name="product__hole"
									ref={productHoleOne}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>
									Aksiya Narxi
								</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: 1 200 000"
									name="product__discount"
									ref={productDiscountOne}
								/>
								<Checkbox
									checked={checked}
									onChange={() => setChecked(!checked)}
									inputProps={{ 'aria-label': 'controlled' }}
									className="isDiscount"
								/>
							</ProductModalSelectLabel>
						</ProductModalThirdWrapper>

						<ProductModalLastWrapper>
							<ProductModalSelectLabel>
								<ProductModalDesc>Ma'lumot</ProductModalDesc>
								<ProductModalTextarea
									name="product_description"
									cols="30"
									rows="10"
									placeholder="info..."
									ref={productInfoOne}
								></ProductModalTextarea>
							</ProductModalSelectLabel>
							<ProductModalNavinlaWrapper>
								<ProductModalSelectLabel htmlFor="navinla">
									Navinla
								</ProductModalSelectLabel>
								<Switcher
									id="navinla"
									onChange={() => setNavinla(!navinla)}
								/>
							</ProductModalNavinlaWrapper>
							<ProductModalNavinlaWrapper>
								<ProductModalSelectLabel htmlFor="active">
									Active
								</ProductModalSelectLabel>
								<Switcher
									id="active"
									onChange={() => productActive(!isActive)}
								/>
							</ProductModalNavinlaWrapper>
							<ProductSubmitBtn type="submit">
								Qo’shish
							</ProductSubmitBtn>
						</ProductModalLastWrapper>
					</ProductModalForm>
				</ProductModalWrapper>
			</Modal>

			<Modal modal={editModal} setModal={setEditModal}>
				<ProductModalWrapper>
					<ProductModalClose
						onClick={() => setEditModal(false)}
					></ProductModalClose>
					<ProductModalTitle>O'zgartirish</ProductModalTitle>
					<ProductModalForm onSubmit={editProduct}>
						<ProductModalCarouselWrapper>
							<Swiper
								pagination={true}
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

						<ProductModalSecondWrapper>
							<ProductModalSelectLabel>
								<ProductModalDesc>Toifalar</ProductModalDesc>
								<ProductModalSelect
									type="text"
									placeholder="masalan: Model C"
									name="product_model"
									ref={productType}
								>
									<ProductModalOption value="ww" hidden>
										masalan: Model C
									</ProductModalOption>
									{categories.map((item) => (
										<ProductModalOption
											key={item.id}
											value={item.id}
										>
											{item.category}
										</ProductModalOption>
									))}
								</ProductModalSelect>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Tovar nomi</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: Lux Soft Memory"
									name="product_name"
									ref={productNameOne}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Narxi</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: 20 000"
									name="product__cost"
									ref={productCost}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Yuklama</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: 200 kg"
									name="product__weight"
									ref={productWeight}
								/>
							</ProductModalSelectLabel>
						</ProductModalSecondWrapper>

						<ProductModalThirdWrapper>
							<ProductModalSelectLabel>
								<ProductModalDesc>Razmeri</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: 200 x 140 x 40"
									name="product_sie"
									ref={productSize}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Kafolat</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: 1 yil"
									name="product_guaranty"
									ref={productGuaranty}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>Sig’m</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: 2"
									name="product__hole"
									ref={productHole}
								/>
							</ProductModalSelectLabel>
							<ProductModalSelectLabel>
								<ProductModalDesc>
									Aksiya Narxi
								</ProductModalDesc>
								<ProductModalInput
									type="text"
									placeholder="masalan: 1 200 000"
									name="product__discount"
									ref={productDiscount}
								/>
								<Checkbox
									checked={checked}
									onChange={() => setChecked(!checked)}
									inputProps={{ 'aria-label': 'controlled' }}
									className="isDiscount"
								/>
							</ProductModalSelectLabel>
						</ProductModalThirdWrapper>

						<ProductModalLastWrapper>
							<ProductModalSelectLabel>
								<ProductModalDesc>Ma'lumot</ProductModalDesc>
								<ProductModalTextarea
									name="product_description"
									cols="30"
									rows="10"
									placeholder="info..."
									ref={productInfo}
								></ProductModalTextarea>
							</ProductModalSelectLabel>
							<ProductModalNavinlaWrapper>
								<ProductModalSelectLabel htmlFor="navinla">
									Navinla
								</ProductModalSelectLabel>
								<Switcher
									id="navinla"
									onChange={() => setNavinla(!navinla)}
								/>
							</ProductModalNavinlaWrapper>
							<ProductModalNavinlaWrapper>
								<ProductModalSelectLabel htmlFor="active">
									Active
								</ProductModalSelectLabel>
								<Switcher
									id="active"
									onChange={() => productActive(!isActive)}
								/>
							</ProductModalNavinlaWrapper>
							<ProductSubmitBtn type="submit">
								Qo’shish
							</ProductSubmitBtn>
						</ProductModalLastWrapper>
					</ProductModalForm>
				</ProductModalWrapper>
			</Modal>
		</OrdersWrapper>
	);
};
