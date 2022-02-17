import React from 'react';
import { Navbar, Container, Row } from 'react-bootstrap';
const NavbarSecond = () => {
	return (
		<>
			
				<Navbar bg='color-change'>
					<Container>
						<Navbar.Toggle />
						<Navbar.Collapse className='justify-content-center'>
							<Navbar.Text>
								<span>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer</span>{' '}
								<a href='#login' style={{ color: '#CEBD9C', fontWeight: '600' }}>
									Shop Now
								</a>
							</Navbar.Text>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			
		</>
	);
};

export default NavbarSecond;
