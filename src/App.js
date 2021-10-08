import { Component } from 'react';
import s from './App.module.css';
import Container from './Component/Container';
import ContactForm from './/Component/ContactForm';
import Filter from './Component/Filter';
import ContactList from './Component/ContactList';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    formSubmitHandler = data => {
        if (
            this.state.contacts.some(
                element =>
                    element.name.toLowerCase() === data.name.toLowerCase(),
            )
        ) {
            return alert('This contact has already been added to the list');
        }

        this.setState(({ contacts }) => ({
            contacts: [data, ...contacts],
        }));
    };

    changeFilter = e => {
        this.setState({ filter: e.target.value });
    };

    getContact = () => {
        const { filter, contacts } = this.state;
        const contactFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(contactFilter),
        );
    };

    deleteContactList = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId,
            ),
        }));
    };

    render() {
        const { filter } = this.state;
        const { deleteContactList, formSubmitHandler, changeFilter } = this;
        const getVisibleContact = this.getContact();
        return (
            <Container>
                <h1 className={s.title}>Phonebook</h1>
                <ContactForm onSubmit={formSubmitHandler} />
                <h2 className={s.title}>Contacts</h2>
                <Filter filter={filter} onChange={changeFilter} />
                <ContactList
                    contacts={getVisibleContact}
                    onDeleteContactList={deleteContactList}
                />
            </Container>
        );
    }
}

export default App;
