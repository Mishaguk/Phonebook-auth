import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { useCallback } from 'react';
import * as operations from '../../redux/phoneBook/phonebookOperations';
import { getContacts, getFilter } from '../../redux/phoneBook/selectors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import slide from '../../transitions/Slides2.module.css';

const ContactList = () => {
	const dispatch = useDispatch();
	const filter = useSelector(getFilter);
	const contacts = useSelector(getContacts(filter));

	const handleDelete = useCallback(
		id => dispatch(operations.deleteContact(id)),
		[dispatch]
	);

	return (
		<TransitionGroup component='ul'>
			{contacts.map(contact => (
				<CSSTransition
					key={contact.id}
					timeout={500}
					unmountOnExit
					classNames={slide}
				>
					<ContactItem
						key={contact.id}
						contact={contact}
						onDelete={handleDelete}
					/>
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};

export default ContactList;
