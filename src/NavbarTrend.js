import React from 'react';
import { Container, Row, Carousel, Col } from 'react-bootstrap';

const NavbarTrend = () => {
	return (
		<>
			<Container fluid className='testinomial my-5'>
				<Row className=''>
					<Carousel>
						<Carousel.Item interval={1000} className='carousel-height'>
							<Container className='position-change'>
								<Row className='justify-content-center'>
									<Col md={6}>
										<h2 className='text-center para-align'>Customer Testmonial</h2>
										<p className='text-center para-align'>Every day is different, which is why we offer styles for every body laborum fuga incidunt laboriosam voluptas iure,delectusdignissimoss facilis neque nulla eram.</p>
									</Col>
									<div className='d-flex align-item-center justify-content-center mt-3'>
										<div classsName='text-center'>
											<img src='https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xfounder-img.png.pagespeed.ic.4PZGL9Sx_O.webp' alt='' />
										</div>

										<div style={{ marginLeft: '20px' }}>
											<span>Petey Crusier</span>
											<p>Designer at colorlib</p>
										</div>
									</div>
								</Row>
							</Container>
						</Carousel.Item>

						<Carousel.Item interval={500} className='carousel-height'>
							<Container className='position-change'>
								<Row className='justify-content-center'>
									<Col md={6}>
										<h2 className='text-center para-align'>Customer Testmonial</h2>
										<p className='text-center para-align'>Every day is different, which is why we offer styles for every body laborum fuga incidunt laboriosam voluptas iure,delectusdignissimoss facilis neque nulla eram.</p>
									</Col>
									<div className='d-flex align-item-center justify-content-center mt-3'>
										<div className='text-center'>
											<img src='https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xfounder-img.png.pagespeed.ic.4PZGL9Sx_O.webp' alt='' />
										</div>

										<div style={{ marginLeft: '20px' }}>
											<span>Petey Crusier</span>
											<p>Designer at colorlib</p>
										</div>
									</div>
								</Row>
							</Container>
						</Carousel.Item>
					</Carousel>
				</Row>
			</Container>
		</>
	);
};

export default NavbarTrend;
