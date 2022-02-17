import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
const CheckOutForm = () => {
	return (
		<>
			<Form>
				<Row className='mb-3'>
					<Form.Group as={Col} controlId='formGridEmail'>
						<Form.Control type='text' placeholder='First Name' />
					</Form.Group>

					<Form.Group as={Col} controlId='formGridPassword'>
						<Form.Control type='text' placeholder='Last Name' />
					</Form.Group>
					<Form.Group className='mb-3 mt-3' controlId='formGridAddress1'>
						<Form.Control type='text' placeholder='Company Name' />
					</Form.Group>
					<Form.Group controlId='formGridState'>
						<Form.Select defaultValue='Country'>
							<option>India</option>
							<option>America</option>
							<option>London</option>
							<option>Singapore</option>
						</Form.Select>
					</Form.Group>
				</Row>

				<Row className='mb-3'>
					<Form.Group as={Col} controlId='formGridEmail'>
						<Form.Control type='text' placeholder='Phone Number' />
					</Form.Group>

					<Form.Group as={Col} controlId='formGridPassword'>
						<Form.Control type='email' placeholder='Email Address' />
					</Form.Group>
				</Row>
				<Row className='mt-5'>
					<Form.Group className='mb-3' controlId='formGridAddress2'>
						<Form.Control placeholder='Address 1' />
					</Form.Group>
					<Form.Group className='mb-3' controlId='formGridAddress2'>
						<Form.Control placeholder='Address 2' />
					</Form.Group>
					<Form.Group className='mb-3' controlId='formGridAddress2'>
						<Form.Control placeholder='Town / City' />
					</Form.Group>
					<Form.Group controlId='formGridState'>
						<Form.Select defaultValue='District'>
							<option>Dewas</option>
							<option>Harda</option>
							<option>Sehore</option>
							<option>vidisha</option>
						</Form.Select>
					</Form.Group>
				</Row>
				<Row className='mt-5'>
					<Form.Group className='mb-3' controlId='formGridAddress2'>
						<Form.Control type='text' placeholder='Postcode / Zip' />
					</Form.Group>
				</Row>

				<Form.Group className='mb-3' id='formGridCheckbox'>
					<Form.Check type='checkbox' label='Create an account' />
				</Form.Group>
				<Row className='mt-5'>
					<h4>Shipping Details</h4>
					<Form.Group className='mb-3 mt-2' id='formGridCheckbox'>
						<Form.Check type='checkbox' label='Ship to a different address' />
					</Form.Group>
					<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
						<Form.Control as='textarea' rows={7} placeholder='Order Notes' />
					</Form.Group>
				</Row>
			</Form>
		</>
	);
};

export default CheckOutForm;
