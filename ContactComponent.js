import React,{ Component } from 'react';
import { Row, Col, Button, } from 'reactstrap';

class ContactPage extends Component  {
  render(){
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        We will be glad to here your feedback about the game, we strive to improve ourselves and make Turn of phrase entertaining.
      </p>
      <Row>
        <Col lg="6" className="lg-0 mb-4">
        <form>
        <p className="h1 text-center mb-4">Feedback</p>
        <label htmlFor="name" className="grey-text">
          Your Name
        </label>
        <input type="name" id="name" className="form-control" icon="user"/>
        <br />
        <label htmlFor="email" className="grey-text" >
          Your Email
        </label>
        <input type="email" id="email" className="form-control" />
        <br />
        <label htmlFor="emailfeedback" className="grey-text" icon="envelope">
          Your Feedback
        </label>
        <textarea type="feedback" id="feedback" className="form-control" rows="8"/>
        <br />
        
        <div className="text-center mt-4">
          <Button type="submit" color="primary" type="submit">Send Feedback</Button>
        </div>
      </form>
      </Col>
      <Col lg="6">
        <div id="container" className="mail-container" style={{ height: "330px"}}>
          <img src="../assets/mail.jpeg" width="100%" height="150%"frameBorder="0"
              style={{ border: 0 }}
          />
        </div>
      </Col>
          
        
       
            
          
      </Row>
    </section>
  );
}
}
export default ContactPage;