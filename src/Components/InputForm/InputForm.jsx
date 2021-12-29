import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PhonebookEditor.module.css';

import toastr from 'toastr';
import { getIsContactExists } from '../../redux/phoneBook/selectors';
import * as operations from '../../redux/phoneBook/phonebookOperations';

const InputForm = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const isExists = useSelector(getIsContactExists(name));

	const handleSubmit = e => {
		e.preventDefault();

		if (isExists) {
			toastr.warning(`Contact ${name} is already exists`);
			return;
		}

		dispatch(
			operations.addContact({
				name,
				number,
			})
		);
		setName('');
		setNumber('');
	};
	return (
		<div>
			<form className={styles.PhonebookEditor} onSubmit={handleSubmit}>
				<h2>Name</h2>
				<input
					type='text'
					name='name'
					value={name}
					onChange={e => setName(e.target.value)}
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
					required
				/>
				<h2>Number</h2>
				<input
					type='tel'
					name='number'
					value={number}
					onChange={e => setNumber(e.target.value)}
					pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
					title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
					required
				/>

				<button className={styles.PhonebookEditorButton} type='submit'>
					Add contact
				</button>
			</form>
		</div>
	);
};

export default InputForm;
