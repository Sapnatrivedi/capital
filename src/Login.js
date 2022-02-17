import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';
function Login() {
	return (
		<>
			<Container className='my-5'>
				<Row className='justify-content-center'>
					<Col lg={8} md={10} className='login-form-color'>
						<div>
							<span className='text-center login-heading'>Login</span>
							<p className='text-center'>Enter Login Details To Get Access</p>
						</div>
						<Form>
							<Form.Group className='mb-3' controlId='formBasicEmail'>
								<Form.Label className='login-label'>Username Or Email Address</Form.Label>
								<Form.Control type='email' placeholder='Username / Email address' className='login-control' />
							</Form.Group>

							<Form.Group className='mb-3' controlId='formBasicPassword'>
								<Form.Label className='login-label'>Password</Form.Label>
								<Form.Control type='password' placeholder='Enter Password' className='login-control' />
							</Form.Group>
							<Row className='justify-content-between'>
								<Col md={7} xs={12}>
									<Form.Group className='mb-3 login-label' controlId='formBasicCheckbox'>
										<Form.Check type='checkbox' label='Keep me Logged In' />
									</Form.Group>
								</Col>
								<Col md={5} xs={12}>
									<p className='float-md-end flex-xs-start'>Forgot Password?</p>
								</Col>
							</Row>
							<Row className='justify-content-between align-items-center my-lg-5 my-sm-3'>
								<Col md={8} xs={12}>
									<p className=''>
										Don't have an account?<Link to='/Signup'> Sign Up </Link>here
									</p>
								</Col>
								<Col md={4} xs={12}>
									<button type='button' className='login-button float-md-end flex-xs-start'>
										Login
									</button>
								</Col>
							</Row>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Login;
