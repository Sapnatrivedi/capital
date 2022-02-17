import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HomeCardJson from './HomeCardJson';

function HomeCard() {
	return (
		<>
			<Container fluid className='mt-5 mb-5'>
				<Row xs={1} md={2} lg={3} className='g-4'>
					{HomeCardJson.map((val, idx) => (
						<Col>
							<Card>
								<div className=''>
									<Card.Img variant='top' src={val.img} className='' />
								</div>
								<div className='overlay'>
									<h5 className=''>{val.fash}</h5>
								</div>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
}

export default HomeCard;
