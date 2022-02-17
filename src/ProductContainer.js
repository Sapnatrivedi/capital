import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';
import { FaShareAlt } from 'react-icons/fa';

const ProductContainer = () => {
	return (
		<>
			<Container className='product-color my-5'>
				<Row className='pb-5 pt-5'>
					<Col lg={4} md={12} sm={12}>
						<img src='https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xlatest7.jpg.pagespeed.ic.hx4jI0dHK5.webp' alt='' />
					</Col>
					<Col lg={6} md={12} sm={12}>
						<h1>The Rage of Dragons </h1>
						<span>By Evan Winter</span>
						<div className='mt-5 mb-5'>
							<h4>$50.00</h4>
							<span>
								<AiOutlineStar size='25px' />
							</span>
							<span>
								<AiOutlineStar size='25px' />
							</span>
							<span>
								<AiOutlineStar size='25px' />
							</span>
							<span>
								<AiOutlineStar size='25px' />
							</span>
							<span>
								<AiOutlineStar size='25px' />
							</span>
							<span>(120 Review)</span>
						</div>
						<div>
							<Button type='button' className='add-to-cart'>
								Add to cart
							</Button>

							<Button type='button' className='share'>
								<FaShareAlt />
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ProductContainer;
