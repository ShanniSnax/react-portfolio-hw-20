import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Instagram from './instagram.png';
import Linkedin from './linkedin.png';
import Github from './github.png';
import Twitter from './twitter.png';

const SocialButtonsPage = () => {
  return (
    <Container>
    <Row className="top-margin">
      <Col 
        xs={3} 
        className="padding">
        <a href="https://www.instagram.com/shannisuissa/?hl=en">
            <Image src={Instagram} fluid alt="Shanni Suissa Instagram" />
        </a>
      </Col>
      <Col 
        xs={3} 
        className="padding">
        <a href="https://www.linkedin.com/in/shanni-suissa-70a6b274/">
            <Image src={Linkedin} fluid alt="Shanni Suissa Linkedin" />
        </a>
      </Col>
      <Col 
        xs={3} 
        className="padding">
        <a href="https://github.com/ShanniSnax">
            <Image src={Github} fluid alt="Shanni Suissa Github" />
        </a>
      </Col>
      <Col 
        xs={3} 
        className="padding">
        <a href="https://www.instagram.com/shannisuissa/?hl=en">
            <Image src={Twitter} fluid alt="Shanni Suissa Twitter" />
        </a>
      </Col>
    </Row>
    </Container>
  );
}

export default SocialButtonsPage;