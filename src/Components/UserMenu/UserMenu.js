import React from 'react';
import { useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/authSelectors';
import * as authOperations from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const UserMenu = () => {
	const dispatch = useDispatch();
	const name = useSelector(getUserName);

	return (
		<div s>
			<h2>Welcome , {name}</h2>
			<button type='button' onClick={() => dispatch(authOperations.logOut())}>
				Logout
			</button>
		</div>
	);
};

export default UserMenu;
