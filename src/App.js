import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { AccountDash } from './components/AccountDash';
import { GetInstruments } from './components/Instruments';

export const App = () => {

  return (
    <Container>
      <Row>
        <AccountDash />
        <GetInstruments />
      </Row>
    </Container>
  );
}
