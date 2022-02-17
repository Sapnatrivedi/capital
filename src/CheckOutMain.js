import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import CheckOutForm from './CheckOutForm';
import CheckOutSecond from './CheckOutSecond';
const CheckOutMain = () => {
	return (
		<>
			<Container>
				<Row>
					<div class='return mt-5 pt-3'>
						<p>
							Returning customer?<Link to='/Login'> Click here to login </Link>
						</p>
					</div>
					<div className='mt-3'>
						<p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
					</div>
					<div>
						<Form>
							<Row className='mb-3'>
								<Col lg={4} className=''>
									<Form.Group controlId='formGridEmail'>
										<Form.Control type='email' placeholder='Username or Email ' />
									</Form.Group>
								</Col>
								<Col lg={4} className=''>
									<Form.Group controlId='formGridPassword'>
										<Form.Control type='password' placeholder='Password' />
									</Form.Group>
								</Col>
								<div className='mt-3 d-flex'>
									<CartButton btnHead='Login' className='' />
									<div className='mt-2' style={{ marginLeft: '8px' }}>
										<Form.Group className='' id='formGridCheckbox'>
											<Form.Check type='checkbox' label='Create an account?' />
										</Form.Group>
									</div>
								</div>
							</Row>
						</Form>
					</div>
					<div className='return mb-4 pt-3'>
						<p>
							Have a coupon? <Link to=''>Click here to enter your code</Link>
						</p>
					</div>

					<div>
						<Form>
							<Row className='mb-3'>
								<Col lg={9} className=''>
									<Form.Group controlId='formGridEmail'>
										<Form.Control type='email' placeholder='Username or Email ' />
									</Form.Group>
								</Col>
							</Row>
							<CartButton btnHead='Apply Coupon' />
						</Form>
					</div>
				</Row>

				<Row className='my-5'>
					<div className='mb-5'>
						<h4>Billing Details</h4>
					</div>
					<Col lg={7} md={12} xs={12}>
						<CheckOutForm />
					</Col>
					<Col lg={5} md={12} xs={12}>
						<CheckOutSecond />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CheckOutMain;
