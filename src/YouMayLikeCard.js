import React from 'react';
import { Row, Col, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const YouMayLikeCard = () => {
	return (
		<>
			<Container>
				<Row>
					<Col lg={4} md={5}>
						<h3 style={{ paddingLeft: '10px' }}>Trending this week</h3>
					</Col>
					<Col lg={8} md={7}>
						<Nav className='justify-content-lg-end justify-content-md-end justify-content-sm-end' activeKey='/Men'>
							<Nav.Item>
								<Nav.Link href='/home'>Men</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey='link-1'>Women</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey='link-2'>Baby</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey='disabled'>Fashion</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default YouMayLikeCard;
