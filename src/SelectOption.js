import React from 'react';
import { Form } from 'react-bootstrap';

const SelectOption = (props) => {
	const { item, item1, item2, item3, item4 } = props;
	return (
		<>
			<Form.Select aria-label='Default select example' className='select-radius'>
				<option>{item}</option>
				<option value='1'>{item1}</option>
				<option value='2'>{item2}</option>
				<option value='3'>{item3}</option>
				<option value='4'>{item4}</option>
			</Form.Select>
		</>
	);
};

export default SelectOption;
