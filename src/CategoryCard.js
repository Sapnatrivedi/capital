import React from 'react';
import { Link } from 'react-router-dom';
import './categorypart.css';
import { Card } from 'react-bootstrap';
import SocialIcon from './SocialIcon';
const CategoryCard = (props) => {
	const { cateimg, tag3, money3 } = props;
	return (
		<>
			<div>
				<Card className='h-50 cate-card-relate'>
					<div className='inner'>
						<Card.Img variant='top' src={cateimg} />
					</div>
					<Card.Body>
						<Card.Text className='text-center'>
							<Link to=''>
								{' '}
								<h6>{tag3}</h6>
							</Link>
							<p>{money3}</p>
						</Card.Text>
					</Card.Body>

					<div className='cate-card-absolute'>
						<SocialIcon />
					</div>
				</Card>
			</div>
		</>
	);
};

export default CategoryCard;
