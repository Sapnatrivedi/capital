import React from 'react';
import { Container, Row, Col, Form, Nav, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
const Footer = () => {
	return (
		<>
			<Container fluid className='footer-color'>
				<Container className='footer-padding'>
					<Row>
						<Col lg={3} md={12} sm={12}>
							<h6 className='footer-font-color'>Subscribe Newsletter</h6>
							<p className='footer-font-color'>Subscribe Newsletter to get all 5% on all products</p>
						</Col>
						<Col lg={6} md={12} sm={12}>
							<Row>
								<Col lg={9} md={7} sm={12}>
									<Form>
										<Form.Control type='email' placeholder='Enter Your Email' className='change-input' />
									</Form>
								</Col>
								<Col lg={3} md={5} sm={12}>
									<button type='button' className='change-button'>
										Subscribe
									</button>
								</Col>
							</Row>
						</Col>
						<Col lg={3} md={12} sm={12}>
							<div className='d-flex'>
								<Nav.Link>
									<BsFacebook className='footer-social-icon' />
								</Nav.Link>
								<Nav.Link>
									<BsInstagram className='footer-social-icon' />
								</Nav.Link>
								<Nav.Link>
									<BsYoutube className='footer-social-icon' />
								</Nav.Link>
							</div>
						</Col>
						<div className='mt-2 mb-2'>
							<hr style={{ border: '1px solid white' }} />
						</div>
					</Row>
					<Row>
						<Col lg={4} md={6}>
							<img src='https://preview.colorlib.com/theme/capitalshop/assets/img/logo/xlogo2_footer.png.pagespeed.ic.DUxRn4vG1w.webp' alt='' />
						</Col>
						<Col lg={2} md={6}>
							<h6 className='footer-font-color'>Shop Men</h6>
							<ul className='list'>
								<li>Clothing Fashion</li>
								<li>Winter</li>
								<li>Summer</li>
								<li>Formal</li>
								<li>Casual</li>
							</ul>
						</Col>
						<Col lg={2} md={4}>
							<h6 className='footer-font-color'>Shop Women</h6>
							<ul className='list'>
								<li>Clothing Fashion</li>
								<li>Winter</li>
								<li>Summer</li>
								<li>Formal</li>
								<li>Casual</li>
							</ul>
						</Col>
						<Col lg={2} md={4}>
							<h6 className='footer-font-color'>Baby Collection</h6>
							<ul className='list'>
								<li>Clothing Fashion</li>
								<li>Winter</li>
								<li>Summer</li>
								<li>Formal</li>
								<li>Casual</li>
							</ul>
						</Col>
						<Col lg={2} md={4}>
							<h6 className='footer-font-color'>Quick Links</h6>
							<ul className='list'>
								<li>Track Your Order</li>
								<li>Support</li>
								<li>FAQ</li>
								<li>Carrier</li>
								<li>About</li>
								<li>Contact Us</li>
							</ul>
						</Col>
					</Row>
					<Row className='last-link'>
						<p className='footer-font-color text-center'>
							Copyright ©2021 All rights reserved | This template is made with by{' '}
							<a href='https://www.google.co.in/' className='link-color'>
								Colorlib
							</a>
						</p>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default Footer;
