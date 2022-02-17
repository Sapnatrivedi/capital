import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

const CartButton = (props) => {
	return (
		<>
			<div>
				<Link to=''>
					<Button type='button' className='update-cart'>
						{props.btnHead}
					</Button>
				</Link>
			</div>
		</>
	);
};

export default CartButton;
