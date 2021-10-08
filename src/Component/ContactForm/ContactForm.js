import { Component } from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        agree: false,
    };

    handleSubmit = e => {
        const { name, number } = this.state;
        e.preventDefault();
        const contact = {
            id: uuidv4(),
            name,
            number,
        };
        this.props.onSubmit(contact);
        this.resetForm();
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleAgreeChange = e => {
        this.setState({ agree: e.target.checked });
    };

    resetForm = () => {
        this.setState({ name: '', number: '', agree: false });
    };

    nameId = uuidv4();
    numberId = uuidv4();
    agreeId = uuidv4();

    render() {
        const {
            handleSubmit,
            handleChange,
            handleAgreeChange,
            nameId,
            numberId,
            agreeId,
        } = this;
        const { name, number, agree } = this.state;
        return (
            <div className={s.section__form}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <label className={s.label} htmlFor={nameId}>
                        Name
                        <input
                            id={nameId}
                            className={s.inputName}
                            value={name}
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            onChange={handleChange}
                        />
                    </label>

                    <label className={s.label} htmlFor={numberId}>
                        Number
                        <input
                            id={numberId}
                            className={s.inputName}
                            type="tel"
                            value={number}
                            name="number"
                            placeholder="Enter number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className={s.label__agree} htmlFor={agreeId}>
                        <input
                            id={agreeId}
                            className={s.checkbox}
                            value={agree}
                            type="checkbox"
                            name="agree"
                            checked={agree}
                            onChange={handleAgreeChange}
                        />
                        agree
                    </label>

                    <button className={s.btn} disabled={!agree}>
                        Add contact
                    </button>
                </form>
            </div>
        );
    }
}

export default ContactForm;
