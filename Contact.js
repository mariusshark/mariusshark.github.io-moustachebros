import React from 'react';

import { Form } from 'react-bootstrap';
import moustache from './assets/moustache.png';

export const Contact =() => (
 <div>
    

    <img src={moustache} alt="moustache" />
     <h2>Contact Us</h2>
    <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="phone" placeholder="+471234567" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select</Form.Label>
    <Form.Control as="select">
      <option>Haircut 230kr</option>
      <option>Shave 230kr</option>
      <option>Beard modelling 230kr</option>
      <option>Haircut and beard 380kr</option>
    
    </Form.Control>
  </Form.Group>  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Date and time </Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
    <input
        type='submit'
      />
    
</Form>    
    

     
 </div>

 )
