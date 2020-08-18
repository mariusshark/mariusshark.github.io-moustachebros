import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import bbb from '../assets/bbb.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${bbb}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Moustache bros.</h1>
        <p>An experienced and skillful barber from Norway is ready to give you a haircut.</p>
      </Container>
    </Jumbo>
  </Styles>
)

