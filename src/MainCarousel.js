import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

import ShopButton from './ShopButton';
const MainCarousel = (props) => {
	return (
		<>
			<Carousel>
				<Carousel.Item interval={1000}>
					<img className='d-block w-100 img-height' src='https://preview.colorlib.com/theme/capitalshop/assets/img/hero/xh1_hero2.jpg.pagespeed.ic.nn0ycp9QdZ.webp' alt='First slide' />
					<Carousel.Caption className='car-head'>
						<h5 className='font-change'>{props.title}</h5>
						<h2>{props.heading}</h2>
						<p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, mollitia.</p>
						<ShopButton />
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100 img-height' src='https://preview.colorlib.com/theme/capitalshop/assets/img/hero/xh1_hero1.jpg.pagespeed.ic.i78C8XcvnM.webp' alt='Second slide' />
					<Carousel.Caption className='car-head1 custom '>
						<h5 className='font-change'>{props.title}</h5>
						<h2>{props.heading}</h2>
						<p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, illo!</p>
						<ShopButton />
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default MainCarousel;
