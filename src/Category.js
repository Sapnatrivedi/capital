import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
const Category = (props) => {
	return (
		<>
			<Container fluid className='cate-color'>
				<h3 className='text-center'>{props.cateHead}</h3>
				<nav aria-label='breadcrumb'>
					<ol className='breadcrumb justify-content-center'>
						<li className='breadcrumb-item'>
							<Link to='/Home'>{props.home}</Link>
						</li>

						<li className='breadcrumb-item line' aria-current='page'>
							{props.other}
						</li>
					</ol>
				</nav>
			</Container>
		</>
	);
};

export default Category;
