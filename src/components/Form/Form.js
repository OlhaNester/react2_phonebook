import { Component } from "react";

class Form extends Component {
    state = {
        name: '',
        number: ''
    }
     handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({[name]: value})
    }
     handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value={this.state.name} onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <label>Phone Number
                    <input
                        type="tel"
                        name="number" value={this.state.number} onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
                </label>
                <button type="submit">Add contact</button>);
            </form>
      
        )
    }
}
export default Form;