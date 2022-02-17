import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const PreLoader = () => {
	return (
		<>
			<div id='loading'>
				<HashLoader size={150} color={'#ff2020'} />
			</div>
		</>
	);
};

export default PreLoader;
