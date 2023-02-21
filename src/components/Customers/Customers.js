import axios from 'axios';
import { useEffect, useState } from 'react';
import {
	DeleteButton,
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
} from '../Customers/Customers.styled';
import { Switcher } from '../Switch/Switch';

export const Customers = () => {
	const [contact, setContact] = useState([]);
	const token = window.localStorage.getItem('login-token');
	const [page, setPage] = useState(1);

	useEffect(() => {
		axios
			.get('http://localhost:1212/admin/contact/' + page, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => setContact(res.data.data))
			.catch((err) => console.log(err));
	}, [page]);

	const handleDeleteContact = (id) => {
		axios
			.delete('http://localhost:1212/admin/contact/' + id, {
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
				<OrdersListItem>ID</OrdersListItem>
				<OrdersListItem>Sana</OrdersListItem>
				<OrdersListItem>Telefon raqami</OrdersListItem>
				<OrdersListItem>Qayta aloqa</OrdersListItem>
			</OrdersList>
			<UnOrderedList>
				{contact.map((item) => (
					<UnOrderedListItem key={item.id}>
						<OrderId>{item.id}</OrderId>
						<OrderDate>
							{item.time}
							{/* <OrderTime>12:13 -</OrderTime> 12.05.2021 */}
						</OrderDate>
						<OrderPhone>{item.number}</OrderPhone>
						<OrderForm>
							<Switcher checked={true} />
						</OrderForm>
						<DeleteButton
							onClick={() => handleDeleteContact(item.id)}
						></DeleteButton>
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
