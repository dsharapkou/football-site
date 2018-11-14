import React from 'react';

class ContactForm extends React.Component {
    handleSubmit = (event) => {
        this.props.goState({
            formValue: this.props.value
        });
    };
    handleChange = (event) => {
        this.props.goState({
            formValue: event
        });
    };

    render() {
        console.log("here is formValue " + this.props.formValue);
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Как вас зовут?
                    <input type="text" />
                </label>
                <br></br>
                <label>
                    Текст письма
                    <input type="text" value={this.props.value} onChange={() => this.handleChange(this.props.value)}/>
                </label>
                <br></br>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

export default ContactForm;
