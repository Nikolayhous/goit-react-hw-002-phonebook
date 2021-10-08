import s from './ContactList.module.css';
import PropTypes from 'prop-types';

function ContactList({ contacts, onDeleteContactList }) {
    const totalNumber = contacts.length;

    return (
        <div className={s.contactList}>
            <ul className={s.list}>
                {contacts.map(({ name, number, id }) => (
                    <li className={s.item} key={id}>
                        <p className={s.text}>{name}:</p>
                        <p className={`${s.text} ${s.number}`}>{number}</p>
                        <button
                            className={s.btn}
                            type="button"
                            onClick={() => onDeleteContactList(id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <p className={s.total__number}>
                Total number of subscribers:{totalNumber}
            </p>
        </div>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ),

    onDeleteContactList: PropTypes.func.isRequired,
};

export default ContactList;
