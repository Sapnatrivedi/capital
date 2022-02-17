import React, { useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import { GrAdd } from 'react-icons/gr';
import { RiArrowUpSLine } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';
const FloatingAction = () => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // for smoothly scrolling
		});
	};
	return (
		<>
			<div className='fixed' data-aos='fade-up' data-aos-offset='100'>
				<Fab color='secondary' aria-label='add' size='large' onClick={scrollToTop}>
					<RiArrowUpSLine className='animate' size={'40px'} />
				</Fab>
			</div>
		</>
	);
};

export default FloatingAction;
