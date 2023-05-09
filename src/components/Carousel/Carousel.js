import axios from 'axios';
import React, { useRef, useState } from 'react';
import {
	CarouselButton,
	CarouselForm,
	CarouselInput,
	CarouselLabel,
	CarouselWrapper,
	InnerWrapper,
} from './Carousel.styled';

export const Carousel = () => {
	const InputTitle = useRef();
	const token = window.localStorage.getItem('login-token');
	const [imageOne, setImageOne] = useState(null);

	const imageValue = (props) => {
		setImageOne(props.target.files[0]);
	};

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		console.log(InputTitle.current.value, imageOne);

		const formData = new FormData();

		formData.append('image', imageOne);
		formData.append('title', InputTitle.current.value);

		axios
			.post(
				'https://matras-bekend.onrender.com/admin/carousel',
				formData,
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) => {
				if (res.status === 201) {
					alert('Created');
				} else {
					alert('Not Created');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<CarouselWrapper>
			<CarouselForm onSubmit={handleFormSubmit}>
				<CarouselLabel htmlFor="carousel-image"></CarouselLabel>
				<CarouselInput
					display
					type="file"
					id="carousel-image"
					onChange={imageValue}
				/>
				<InnerWrapper>
					<CarouselInput
						type="text"
						name="carousel__title"
						ref={InputTitle}
						placeholder="Carousel Sarlavhasini kiriting"
					/>
					<CarouselButton type="submit">Send</CarouselButton>
				</InnerWrapper>
			</CarouselForm>
		</CarouselWrapper>
	);
};
