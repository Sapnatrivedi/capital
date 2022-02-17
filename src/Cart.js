import React from 'react';
import CartTable from './CartTable';
import Category from './Category';
const Cart = () => {
	return (
		<>
			<Category cateHead='Cart' home='Home' other='Cart' />
			<CartTable />
		</>
	);
};

export default Cart;
