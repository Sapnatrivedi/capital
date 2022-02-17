import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BsCart4, BsHeart, BsZoomIn } from 'react-icons/bs';
const SocialIcon = () => {
	return (
		<>
			<Container>
				<div className='d-flex text-center'>
					<div className='cart-icon '>
						<BsCart4 size='25px' />
					</div>

					<div className='cart-icon '>
						<BsHeart size='25px' />
					</div>
					<div className='cart-icon'>
						<BsZoomIn size='25px' />
					</div>
				</div>
			</Container>
		</>
	);
};

export default SocialIcon;
