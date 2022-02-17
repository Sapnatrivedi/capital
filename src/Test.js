import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { BsSearch, BsFillCartFill } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
const Test = () => {
	return (
		<>
			<Navbar className='color shadow' expand='lg' sticky='top'>
				<Container>
					<Navbar.Brand href='#home'>
						<img src='data:image/webp;base64,UklGRqYEAABXRUJQVlA4TJkEAAAvysALEJ+hqJEkpZdMrH+R+zoGCwbStsmm4v6FforaNpLcEpj/8md5so1tKxGZW+YaM2R0Qa8URAWbWQEL2QBFYXQIgNyKqlD1F4HwiEB44IYXzl744Myn/3Z/1U2XDIldbUqbMOkzApPh1G46ZF+CgibJBbP/rqQJiIhwWbZtt21z04AHiEBUaUiCaAbu3X6Z/+hIFGJ54Tui/xMAMZKtqtIJ5nIA0Qse8o/uozx3A4jo/wQgX16Om46IqNscLxINL8+WMu1ZNpq40lRQX4kWO2oqrI/NFSwtaEVbeU2L6qGlPC3u28lThb6VPFU5tFHQdWjRRJbiW1fQxMi2kKO4QUmpYuTaR+iYEkUwJGjxfXUy7DPad3qKDyi8j5H7vlzK+yh+RurYHqXlKqZlgZByzmf/RMjpU8xn/96JokYWwxgjn3X/rvkdf2dNyt+JTZJq/5qNqIAF+5jNuH3hVP6Mkvwz1BUA1ta/JSnqAXkWE3GWk/EycwkATIRk2jtXhSolAFny3103Rqv3t3xkC6Cn9cTSCYAgCgA8aQAhNiQ9MTO3MwA9ty+AHZ9RniAW+1QfGQBYIglIIgtgIHIA9kQBQBdxKXfMzB+GqZUvzD9yzKYfWke6a3Egol0IloiO4loT6Us4E5G9DgeKrlOemPnrFuswIxmeddL2kQybrmavyCdGPjP2WReptkv5YOZHvEyXxjsOLnlwSSo2uJSRNXUgXRrvuIWq4VlqUkszuiRdYSJakdSyAaDk9bid9KMhIuUHRUSr0KdRCjPzXQa1TrN6a9psA7VOOxCbSn9w1IhQxCHpIizW1iexXh0ht2rPtgGAGAYBIPhRAhj9CEAOq3LI9VZyzE1qM6m5S5Kvkt9S8wPwVnLMTWpbYLmpxkU1ALgLAOrEtDQbvGDsrTxzWHBdTTcAiJIWxYBQJYUFkCUHgG4AECXtAZBcl00SxsMBuGNu7RhuzJPCn7vLgZE0PmgGAJR0boCRNP4COHVMOMkOmOICxz3khSlhVdsq5Z2ZnzLMNfoDx1RSfmeu0X+DrPCG4ipp4AJ3xjrjz6/ZHxPxb1ZmrFNemfnz/8o6UCW5u75RJbm7Ntki6PxB3NBn/KXZm4mj2THDpdx+MvNnn/VKdEkEwAfNBko6X3VJBMA9pSyg/MYUV8c95IUpwdc2pOCRpyWS6ZIISjIA+YGKAaFK6q8oyQDkPUl91hXfwH1hdxnuRVKArE0m4WWyJrqkEuzUE93uTZLjVZdUgp3ag1ptcjW8otKstDDUPOmtADB1GWS+prQOuKbtQW2atvAOrmnb1FtLZHTFd0gqHYjeIoZYr46QWjUAp7p8Du5e2qwEAFaGEh9498EDNlgZStwEK5LkxAawSpJ3TGguSYcBgFRJP8Ps72JKZgHoJImlkYblAHQyYLORhl+SAbsDaZiLQCCx7JPSizhUPfvvh8dCzfVL2Dklmgduzi4gad6hfWBm6CBKBTtn0EJBzSyuRG2H+/H/eX8FX4dHI/saPJrZL+fR0INaRg1o6mCWMAKt7VQp5dDgolcllJNoc3kyOcZLNLz0bm0mZu28RFMDAA==' alt='' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mx-auto p-3'>
							<Link to='/Home'>
								{' '}
								<Nav.Link href='#home'>Home</Nav.Link>
							</Link>
							<Link to='/Men'>
								{' '}
								<Nav.Link href='#home'>Men</Nav.Link>
							</Link>
							<Link to='/Women'>
								{' '}
								<Nav.Link href='#home'>Women</Nav.Link>
							</Link>
							<Nav.Link href='#home'>Baby</Nav.Link>
							<NavDropdown title='Pages' id='basic-nav-dropdown'>
								<NavDropdown.Item href=''>
									<Link to='/Login'>Login</Link>
								</NavDropdown.Item>
								<Link to='/Cart'>
									{' '}
									<NavDropdown.Item href='#action/3.2'>Carts</NavDropdown.Item>
								</Link>
								<Link to='/ProductDetails'>
									{' '}
									<NavDropdown.Item href='#action/3.3'>project Details</NavDropdown.Item>
								</Link>
								<Link to='/ProductCheckOut'>
									{' '}
									<NavDropdown.Item href='#action/3.3'>product Checkout</NavDropdown.Item>
								</Link>
							</NavDropdown>
							<NavDropdown title='Blog' id='basic-nav-dropdown'>
								<NavDropdown.Item href='#action/3.1'>Blog</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>Blog Elements</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>Blog Details</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href='#home'>Contact</Nav.Link>
							<Nav.Link href='#'>
								<BsSearch className='icon-size' />
							</Nav.Link>{' '}
							<Nav.Link>
								<Link to='/Login'>
									<BiUser className='icon-size' />{' '}
								</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to='/Cart'>
									<BsFillCartFill className='icon-size' />
								</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Test;
