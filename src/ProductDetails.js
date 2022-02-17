import React from 'react';
import Category from './Category';
import ProductContainer from './ProductContainer';
import ProductTabs from './ProductTabs';

const ProductDetails = () => {
	return (
		<>
			<Category cateHead='Product Details' home='Home' other='Product Details' />
			<ProductContainer />
			<ProductTabs />
		</>
	);
};

export default ProductDetails;
