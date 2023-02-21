import {
	OrderClient,
	OrderCount,
	OrderDate,
	OrderForm,
	OrderId,
	OrderPhone,
	OrdersList,
	OrdersListItem,
	OrdersWrapper,
	OrderTime,
	UnOrderedList,
	UnOrderedListItem,
} from './Orders.styled';
import { Switcher } from '../Switch/Switch';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRef } from 'react';

export const Orders = () => {
	const [orders, setOrders] = useState([]);
	const token = localStorage.getItem('login-token');
	const [page, setPage] = useState(1);

	useEffect(() => {
		axios
			.get('http://localhost:1212/admin/orders/' + page, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => setOrders(res.data.data))
			.catch((error) => console.log(error));
	}, [page]);

	return (
		<OrdersWrapper>
			<OrdersList>
				<OrdersListItem>ID</OrdersListItem>
				<OrdersListItem>Ismi</OrdersListItem>
				<OrdersListItem>Telefon raqami</OrdersListItem>
				<OrdersListItem>Mahsulot nomlari</OrdersListItem>
				<OrdersListItem>Miqdori</OrdersListItem>
				<OrdersListItem>Qayta aloqa</OrdersListItem>
			</OrdersList>
			<UnOrderedList>
				{orders.map((item) => (
					<UnOrderedListItem key={item.id}>
						<OrderId>{item.id}</OrderId>
						<OrderDate>{item.name}</OrderDate>
						<OrderPhone>{item.number}</OrderPhone>
						<OrderClient>{item.product_name}</OrderClient>
						<OrderCount>{item.count}</OrderCount>
						<OrderForm>
							<Switcher checked={true} />
						</OrderForm>
					</UnOrderedListItem>
				))}
			</UnOrderedList>
			<label htmlFor="page">Enter page</label>
			<input
				type="number"
				id="page"
				defaultValue={1}
				onChange={(evt) => setPage(+evt.target.value)}
			/>
		</OrdersWrapper>
	);
};
