import React from 'react';

import { Container, Tab, Tabs } from 'react-bootstrap';
import ProductDescription from './ProductDescription';
const ProductTabs = () => {
	return (
		<>
			<Container className='product-container'>
				<Tabs defaultActiveKey='Description' id='uncontrolled-tab-example' className='mb-3'>
					<Tab eventKey='Description' title='Description'>
						<ProductDescription />
					</Tab>
					<Tab eventKey='Author' title='Author'>
						<ProductDescription />
					</Tab>
					<Tab eventKey='Comment' title='Comment'>
						<ProductDescription />
					</Tab>
					<Tab eventKey='Review' title='Review'>
						<ProductDescription />
					</Tab>
				</Tabs>
			</Container>
		</>
	);
};

export default ProductTabs;
