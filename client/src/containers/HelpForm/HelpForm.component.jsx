/* eslint-disable no-sequences */
import React, { Component } from 'react';
import axios from 'axios';
import { Col, Form, Button, Spinner } from 'react-bootstrap';
import HelpMessageSuccess from '../../components/HelpMessageSuccess/HelpMessageSuccess.component';
import HelpMessageFailure from '../../components/HelpMessageFailure/HelpMessageFailure.component';
import './HelpForm.styles.css';

class HelpForm extends Component {
  state = {
    formFirstName: '',
    formLastName: '',
    formEmail: '',
    formPhone: '',
    // eslint-disable-next-line react/no-unused-state
    formSubject: '',
    formMessage: '',
    isMsgSuccess: false,
    isMsgFailure: false,
  }

  loading = false;

  componentDidUpdate() {
    if (this.state.isMsgSuccess === true || this.state.isMsgFailure === true) {
      setTimeout(() => this.setState({ isMsgSuccess: false, isMsgFailure: false }), 10000);
    }
  }

  handleFirstNameChange = (event) => {
    this.setState({ formFirstName: event.target.value });
  }

  handleLastNameChange = (event) => {
    this.setState({ formLastName: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ formEmail: event.target.value });
  }

  handlePhoneChange = (event) => {
    this.setState({ formPhone: event.target.value });
  }

  handleSubjectChange = (event) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ formSubject: event.target.value });
  }

  handleMessageChange = (event) => {
    this.setState({ formMessage: event.target.value });
  }

  handleSubmit = async (event) => {
    try {
      event.preventDefault();

      this.setState({ isMsgSuccess: false, isMsgFailure: false });

      this.loading = true;

      const { formFirstName, formLastName, formEmail, formPhone, formSubject, formMessage } = this.state;

      const data = {
        formFirstName,
        formLastName,
        formEmail,
        formPhone,
        formSubject,
        formMessage,
      };

      await axios.post('/email', data)
        .then((response) => { console.log(response.data); })
        .catch((err) => console.log(err.response.data));

      // console.log('Message sent to the server!');

      this.loading = false;
      this.setState({ formFirstName: '', formLastName: '', formEmail: '', formPhone: '', formSubject: '', formMessage: '', isMsgSuccess: true });
    } catch (e) {
      this.loading = false;
      this.setState({ isMsgFailure: true });
      if (e) throw e;
    }
  }

  messageSuccess = () => {
    if (this.state.isMsgSuccess) {
      return <HelpMessageSuccess />;
    }
  }

  messageFailure = () => {
    if (this.state.isMsgFailure) {
      return <HelpMessageFailure />;
    }
  }

  render() {
    const { formFirstName, formLastName, formEmail, formPhone, formMessage, isMsgSuccess, isMsgFailure } = this.state;
    return (
      <div>
        <p style={{ textAlign: 'center' }}>If you have any questions, feel free to reach out to us. We would be happy to answer them!</p>
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Try to fill out each field below, select an appropriate subject, and click the send message button.</p>
        <Form style={{ marginBottom: '30px' }}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" value={formFirstName} onChange={this.handleFirstNameChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" value={formLastName} onChange={this.handleLastNameChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={formEmail} onChange={this.handleEmailChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" value={formPhone} onChange={this.handlePhoneChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Subject</Form.Label>
              <Form.Control as="select" custom onChange={this.handleSubjectChange}>
                <option selected disabled>Select Subject</option>
                <option value="PHPLA Programs & Services">PHPLA Programs & Services</option>
                <option value="Donations">Donations</option>
                <option value="Volunteering">Volunteering</option>
                <option value="Need Assistance">Need Assistance</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="10" type="text" value={formMessage} onChange={this.handleMessageChange} />
            </Form.Group>
          </Form.Row>

          <div style={{ textAlign: 'center' }}>
            <Button variant="light" type="submit" onClick={"return gtag_report_conversion('https://www.phplosangeles.org/help')", (event) => this.handleSubmit(event)} disabled={this.loading} className="help-button">
              { this.loading ? (
                <Spinner
                  as="span"
                  animation="border"
                  variant="warning"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )
                : <span>Send Message</span>}
            </Button>
          </div>
        </Form>
        { isMsgSuccess ? this.messageSuccess() : null }
        { isMsgFailure ? this.messageFailure() : null }
      </div>
    );
  }
}

export default HelpForm;
