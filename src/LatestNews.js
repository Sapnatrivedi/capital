import React from 'react';
import { Container, Card, Row, Col, Nav } from 'react-bootstrap';
import LatestJson from './LatestJson';
const LatestNews = () => {
	return (
		<>
			<div className='full-color'>
				<Container className='my-5'>
					<div className='pt-5 pb-5'>
						<h2 className='text-center'>Latest News</h2>
					</div>
					<div style={{ paddingBottom: '50px' }}>
						<Row xs={1} md={2} lg={3} className='g-2'>
							{LatestJson.map((Latest, idx) => (
								<Col>
									<Card className='None'>
										<Card.Img variant='top' src={Latest.imgUrl} />
										<Card.Body>
											<Nav.Link>
												{' '}
												<Card.Title>{Latest.Content}</Card.Title>
											</Nav.Link>
											<Card.Text>
												<p>{Latest.des}</p>
											</Card.Text>
											<Card.Link href='#' className='cardlink'>
												Read More
											</Card.Link>
										</Card.Body>
									</Card>
								</Col>
							))}
						</Row>
					</div>
				</Container>
			</div>
		</>
	);
};

export default LatestNews;
