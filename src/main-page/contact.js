import React, { Component } from 'react';

class ContactUs extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  }

  onNameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  onEmailChange = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  }

  onMessageChange = (e) => {
    e.preventDefault();
    this.setState({ message: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const contactInfo = this.state;
    console.log(contactInfo)
  }
  render() {
    return (
      <form className="mt-2">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            id="name"
            value={this.state.name}
            onChange={this.onNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            id="email"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Message"
            id="message"
            value={this.state.message}
            onChange={this.onMessageChange}
          />
        </div>
        <button
          className="btn btn-primary"
          disabled={this.state.name.length === 0 || this.state.email.length === 0 || this.state.message.length === 0}
          onClick={this.onSubmit}
        >Submit</button>
      </form>
    )
  }
}

export default ContactUs;