import React from 'react';
import { Container } from 'react-bootstrap';
import Instagram from './instagram.png';





const SocialButtonsPage = () => {
  return (
    <Row className="top-margin">
      <Col 
        xs={4} 
        className="padding">
        <a href="https://mfitzwinick.github.io/binary-babes/">
            <Image src={Instagram} fluid alt="Shanni Suissa Instagram" />
        </a>
      </Col>
    </Row>
  );
}

export default SocialButtonsPage;