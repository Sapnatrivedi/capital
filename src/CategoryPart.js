import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './categorypart.css';
import CategoryCard from './CategoryCard';
import FilterByGenrs from './FilterByGenrs';
import SelectOption from './SelectOption';
import CategoryCardJson from './CategoryCardJson';
const CategoryPart = () => {
	return (
		<>
			<Container className='my-5'>
				<Row>
					<Col xl={3} lg={4} md={4} xs={12}>
						<div className='cate-listing'>
							<SelectOption item='category' item1='category 1' item2='category 2' item3='category 3' item4='category 4' />
							<SelectOption item='Type' item1='Type 1' item2='Type 2' item3='Type 3' item4='Type 4' />
							<SelectOption item='Size' item1='XXL' item2='XL' item3='LG' item4='M' />
							<SelectOption item='Color' item1='Red' item2='Green' item3='yellow' item4='Sky blue' />
							<FilterByGenrs head='Filter by Genrs' one='History' two='Horror-thriller' three='Love Stories' four='Science-Fiction' five='Biography' />
							<FilterByGenrs head='Filter by Brand' one='Green Publication' two='Anondo Publication' three='Rinku Publication' four='Sheba Publication' five='red Publication' />
						</div>
					</Col>
					<Col xl={9} lg={8} md={8} xs={12}>
						<Row>
							{CategoryCardJson.map((cate) => (
								<Col lg={4} md={6} xs={12}>
									<CategoryCard cateimg={cate.cateimg} tag3={cate.tag3} money3={cate.money3} />
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CategoryPart;
