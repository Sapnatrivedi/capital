import Slider from 'react-slick';
import TrendingCard from './TrendingCard';

import { Col, Row, Card, Container, Carousel, Nav } from 'react-bootstrap';

import './App.css';
import SocialIcon from './SocialIcon';
const TrendingCardCarousel = (props) => {
	var settings = {
		// dots: true,
		// infinite: false,

		// row: 1,

		// slidesToShow: 4,
		// autoplay: true,
		// speed: 2000,
		// autoplaySpeed: 2000,
		// cssEase: 'linear',
		// initialSlide: 0,
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div>
			<Container className='mt-4 mb-5'>
				<Slider {...settings}>
					{TrendingCard.map((val) => {
						return (
							<>
								<Col>
									<Card className='ternd-card'>
										<Card.Img variant='top' src={val.images} />
										<Card.Body className='text-center'>
											<Card.Text>
												<Nav.Link>{val.tag}</Nav.Link>
											</Card.Text>
											<Card.Text>{val.money}</Card.Text>
										</Card.Body>
										<div className='check'>
											<SocialIcon />
										</div>
									</Card>
								</Col>
							</>
						);
					})}
				</Slider>
			</Container>
		</div>
	);
};

export default TrendingCardCarousel;
