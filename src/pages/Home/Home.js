import React from 'react';
import { Header } from '../../components/Header/Header';
import {
	HomeWrapper,
	HomeList,
	HomeListItem,
	HomeListLink,
	HomeRoutesWrapper,
} from '../Home/Home.styled';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Customers } from '../../components/Customers/Customers';
import { Technologies } from '../../components/Technologies/Technologies';
import { Types } from '../../components/Types/Types';
import { Orders } from '../../components/Orders/Orders';
import { Location } from '../../components/Location/Location';
import { Products } from '../../components/Products/Products';
import { Carousel } from '../../components/Carousel/Carousel';

export const Home = () => {
	return (
		<>
			<Header />
			<HomeWrapper>
				<HomeList>
					<HomeListItem>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'list-link list-link--active'
									: 'list-link'
							}
							to={'/'}
						>
							Buyurtmalar
						</NavLink>
					</HomeListItem>
					<HomeListItem>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'list-link list-link--active'
									: 'list-link'
							}
							to={'/customer'}
						>
							Сustomers
						</NavLink>
					</HomeListItem>
					<HomeListItem>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'list-link list-link--active'
									: 'list-link'
							}
							to={'/types'}
						>
							Toifalar
						</NavLink>
					</HomeListItem>
					<HomeListItem>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'list-link list-link--active'
									: 'list-link'
							}
							to={'/products'}
						>
							Mahsulotlar
						</NavLink>
					</HomeListItem>
					<HomeListItem>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'list-link list-link--active'
									: 'list-link'
							}
							to={'/technologies'}
						>
							Texnologiyalar
						</NavLink>
					</HomeListItem>
					<HomeListItem>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'list-link list-link--active'
									: 'list-link'
							}
							to={'/location'}
						>
							Manzil
						</NavLink>
					</HomeListItem>
					<HomeListItem>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'list-link list-link--active'
									: 'list-link'
							}
							to={'/carousel'}
						>
							Carousel
						</NavLink>
					</HomeListItem>
				</HomeList>

				<HomeRoutesWrapper>
					<Routes>
						<Route path="/" element={<Orders />} />
						<Route path="/customer" element={<Customers />} />
						<Route path="/types" element={<Types />} />
						<Route path="/location" element={<Location />} />
						<Route path="/products" element={<Products />} />
						<Route path="/carousel" element={<Carousel />} />
						<Route
							path="/technologies"
							element={<Technologies />}
						/>
					</Routes>
				</HomeRoutesWrapper>
			</HomeWrapper>
		</>
	);
};
