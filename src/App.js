import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Route, Switch } from 'react-router-dom';
import NavbarSecond from './NavbarSecond';
import './index.css';
import Test from './Test';
import Footer from './Footer';
import Login from './Login';
import Men from './Men';
import Home from './Home';
import Signup from './Signup';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import ProductCheckOut from './ProductCheckOut';
import React, { useEffect, useState } from 'react';
import PreLoader from './PreLoader';
import FloatingAction from './FloatingAction';
import Women from './Women';

function App() {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
	return (
		<>
			{loading ? (
				<PreLoader />
			) : (
				<>
					<Test />
					<NavbarSecond />
					<FloatingAction />
					<Switch>
						<Route path='/' exact component={Home}></Route>
						<Route path='/Home' exact component={Home}></Route>
						<Route path='/Login' exact component={Login}></Route>
						<Route path='/Signup' exact component={Signup}></Route>
						<Route path='/Men' exact component={Men}></Route>
						<Route path='/Women' exact component={Women}></Route>
						<Route path='/Cart' exact component={Cart}></Route>
						<Route path='/ProductDetails' exact component={ProductDetails}></Route>
						<Route path='/ProductCheckOut' exact component={ProductCheckOut}></Route>
					</Switch>
					<Footer />
				</>
			)}
		</>
	);
}

export default App;
