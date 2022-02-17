import React from 'react';
import { Container, Table, Row, Col, Form } from 'react-bootstrap';
import CartButton from './CartButton';

import SelectOption from './SelectOption';

const CartTable = () => {
	return (
		<>
			<Container className='my-5'>
				<Row>
					<Table className='table-change'>
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Minimalistic shop for multipurpose use</td>
								<td>$36.00</td>
								<td></td>
								<td>$72.00</td>
							</tr>
							<tr>
								<td>Minimalistic shop for multipurpose use</td>
								<td>$36.00</td>
								<td></td>
								<td>$72.00</td>
							</tr>
							<tr>
								<td>
									<CartButton btnHead='Update Cart' />
								</td>
								<td></td>
								<td>Subtotal</td>
								<td>$216.00</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td>Shipping</td>
								<td>
									<Form>
										{['radio'].map((type) => (
											<div key={`default-${type}`} className='mb-3'>
												<Form.Check type={type} id={`default-${type}`} label={`Flat Rate: $5.00`} />
												<Form.Check type={type} id={`default-${type}`} label={`Flat Rate: $5.00`} />
												<Form.Check type={type} id={`default-${type}`} label={`Flat Rate: $5.00`} />
												<Form.Check type={type} id={`default-${type}`} label={`Flat Rate: $5.00`} />
											</div>
										))}
									</Form>
								</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td>
									{' '}
									<div className=''>
										<CartButton btnHead='update detail' />
									</div>
								</td>
							</tr>
						</tbody>
					</Table>
				</Row>
				<div className='place'>
					<div className='d-flex mt-4'>
						<CartButton btnHead='Continue Shopping' />

						<div>
							<CartButton btnHead='Proceed to Checkout' />
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default CartTable;
