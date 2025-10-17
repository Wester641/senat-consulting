import React, { Component } from 'react';

class ContactForm3 extends Component {

    state = {
        name: '',
        number: '',
        company_name: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            number,
            company_name,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (number === '') {
            error.number = "Please enter your number";
        }
        if (company_name === '') {
            error.company_name = "Please enter your company name";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.number === '' && error.company_name === '' && error.notes === '') {
            this.setState({
                name: '',
                number: '',
                company_name: '',
                notes: '',
                error: {}
            })
        }

        console.log(this.state);
    }

    render() {

        const { name,
            number,
            company_name,
            notes, error } = this.state;

        return (
            <form onSubmit={this.subimtHandler}>
                <div className="contact-form form-style row">
                    <div className="col-12 col-lg-12">
                        <input type="text" value={name} onChange={this.changeHandler} placeholder="Your Name*" id="fname" name="name" />
                        <p>{error.name ? error.name : ''}</p>
                    </div>
                    <div className="col col-lg-12">
                        <input type="text" placeholder="Phone number" onChange={this.changeHandler} value={number} id="number" name="number" />
                        <p>{error.number ? error.number : ''}</p>
                    </div>
                    <div className="col-12  col-lg-12">
                        <input type="text" placeholder="Your company name" onChange={this.changeHandler} value={company_name} id="company_name" name="company_name" />
                        <p>{error.company_name ? error.company_name : ''}</p>
                    </div>
                    <div className="col-12 col-sm-12">
                        <textarea className="contact-textarea" value={notes} onChange={this.changeHandler} placeholder="Message" name="notes"></textarea>
                        <p>{error.notes ? error.notes : ''}</p>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="theme-btn">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ContactForm3;