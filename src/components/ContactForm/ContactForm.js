import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  state = {
    name: '',
    number: '',
  };

  onChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value.toLowerCase() });
  };

  onSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ id: nanoid(2), name, number });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { onChange, onSubmit } = this;
    return (
      <form className={s.form} onSubmit={onSubmit}>
        <div className={s.row}>
          <label className={s.label}>
            Name
            <input
              value={name}
              type="text"
              name="name"
              className={s.input}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={onChange}
              required
            />
          </label>
          <label className={s.label}>
            Number
            <input
              value={number}
              type="tel"
              name="number"
              className={s.input}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={onChange}
              required
            />
          </label>
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
