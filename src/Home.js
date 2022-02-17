import React from 'react';
import HomeCard from './HomeCard';
import MainCarousel from './MainCarousel';
import NavbarTrend from './NavbarTrend';
import { Container, Row } from 'react-bootstrap';
import TrendingCardCarousel from './TrendingCardCarousel';

import LatestNews from './LatestNews';
import FastDelivery from './FastDelivery';
import YouMayLikeCard from './YouMayLikeCard';


const Home = () => {
	return (
		<>
			<MainCarousel title='Fashion Style' heading='Minial Menz Style' />

			<Container>
				<Row>
					<HomeCard />
					<YouMayLikeCard />

					<TrendingCardCarousel />
				</Row>
			</Container>
			<NavbarTrend />
			<LatestNews />
			<FastDelivery />
		</>
	);
};

export default Home;
