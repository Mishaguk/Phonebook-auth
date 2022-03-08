import React from 'react';
import { useState, useEffect } from 'react';
import './LoginPage.css';
import { useDispatch } from 'react-redux';
import * as operations from '../../../redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../../redux/auth/authSelectors';
import { useNavigate } from 'react-router';
import { CSSTransition } from 'react-transition-group';
import slide from '../../../transitions/Slides.module.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const LoginPage = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoaded, setIsLoaded] = useState(false);
	const isAuthenticated = useSelector(getIsAuthenticated);
	let navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/contacts');

			return;
		}
	});

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(operations.logIn({ email, password }));
		setEmail('');
		setPassword('');
	};

	const theme = createTheme();

	return (
		<ThemeProvider theme={theme}>
			<CSSTransition
				in={isLoaded}
				timeout={500}
				classNames={slide}
				unmountOnExit
			>
				<Container component='main' maxWidth='xs'>
					<CssBaseline />
					<Box
						sx={{
							marginTop: 8,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Sign in
						</Typography>
						<Box
							component='form'
							onSubmit={handleSubmit}
							noValidate
							sx={{ mt: 1 }}
						>
							<TextField
								margin='normal'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								autoFocus
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>

							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
							>
								Sign In
							</Button>
							<Grid container>
								<Grid item xs></Grid>
								<Grid item>
									<Link href='#/register' variant='body2'>
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Container>
			</CSSTransition>
		</ThemeProvider>
	);
};

export default LoginPage;
