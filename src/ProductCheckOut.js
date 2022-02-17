import React from 'react';
import Category from './Category';
import CheckOutMain from './CheckOutMain';
const ProductCheckOut = () => {
	return (
		<>
			<Category cateHead='Checkout' home='Home' other='Checkout' />
			<CheckOutMain/>
		</>
	);
};

export default ProductCheckOut;
