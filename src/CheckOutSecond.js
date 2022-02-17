import React from 'react';
import { Row, Col, Table, Container, Form, Button } from 'react-bootstrap';
import CartButton from './CartButton';
const CheckOutSecond = () => {
	return (
		<>
			<div className='product-color'>
				<Container className='pt-5 pb-5'>
					{' '}
					<h6>Your Order</h6>
					<Table>
						<tbody>
							<tr>
								<td>Product</td>
								<td></td>
								<td>Total</td>
							</tr>
							<tr>
								<td>Fresh Blackberry</td>
								<td>* 02</td>
								<td>$72.00</td>
							</tr>
							<tr>
								<td>Fresh Tomatoes</td>
								<td>* 02</td>
								<td>$72.00</td>
							</tr>
							<tr>
								<td>Fresh Brocoli</td>
								<td>* 02</td>
								<td>$72.00</td>
							</tr>
							<tr>
								<td>SUBTOTAL</td>
								<td></td>
								<td>$216.00</td>
							</tr>
							<tr>
								<td>SHIPPING</td>
								<td></td>
								<td>Flat rate: $50.00</td>
							</tr>
							<tr>
								<td>TOTAL</td>
								<td></td>
								<td>$221.00</td>
							</tr>
						</tbody>
					</Table>
					<Form.Group className='mt-4 mb-3' id='formGridCheckbox'>
						<Form.Check type='checkbox' label='CHECK PAYMENTS' />
					</Form.Group>
					<div className='check-payment'>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</div>
					<Form.Group className='mt-4 mb-3' id='formGridCheckbox'>
						<Form.Check type='checkbox' label='PAYPAL' />
					</Form.Group>
					<div className='check-payment'>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</div>
					<Form.Group className='mt-4 mb-3' id='formGridCheckbox'>
						<Form.Check type='checkbox' label='I have read and accept term and conditions' />
					</Form.Group>
					<div className='mt-5'>
						<CartButton btnHead='Proceed to Paypal' />
					</div>
				</Container>
			</div>
		</>
	);
};

export default CheckOutSecond;
