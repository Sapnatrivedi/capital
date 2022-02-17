import React, { useEffect } from 'react';
import FastDeliveryJson from './FastDeliveryJson';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FastDelivery = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<>
			<Container className='my-5' data-aos='fade-up'>
				<Row className='g-4'>
					{FastDeliveryJson.map((fast) => {
						return (
							<Col lg={3} md={6} sm={12}>
								<div className='text-center'>
									<img src={fast.fastimg} alt='' />
								</div>
								<div className='text-center mt-3'>
									<h6>{fast.fastContent}</h6>
									<p>{fast.fastPara}</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
};

export default FastDelivery;
