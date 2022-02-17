import React from 'react';
import './App.css';
import { Form } from 'react-bootstrap';
const FilterByGenrs = (props) => {
	return (
		<>
			<div className='mt-5 check-box-head'>
				<h5>{props.head}</h5>
			</div>
			<Form>
				{['checkbox'].map((type) => (
					<div key={`default-${type}`} className='mb-5'>
						<Form.Check type={type} id={`default-${type}`} label={props.one} className='form-box' />
						<Form.Check type={type} id={`default-${type}`} label={props.two} className='form-box' />
						<Form.Check type={type} id={`default-${type}`} label={props.three} className='form-box' />
						<Form.Check type={type} id={`default-${type}`} label={props.four} className='form-box' />
						<Form.Check type={type} id={`default-${type}`} label={props.five} className='form-box' />
					</div>
				))}
			</Form>
		</>
	);
};

export default FilterByGenrs;
