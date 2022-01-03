import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import { getIsAuthenticated } from '../redux/auth/authSelectors';
import AuthNav from './Navigation/AuthNav';

const styles = {
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',

		height: '60px',
	},
};

const AppBar = () => {
	const isAuthenticated = useSelector(getIsAuthenticated);
	return (
		<header style={styles.header}>
			<Navigation />
			{isAuthenticated ? <UserMenu /> : <AuthNav />}
		</header>
	);
};
export default AppBar;
