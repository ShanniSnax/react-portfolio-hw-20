import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Headshot from './headshot.jpeg';



const AboutBio = () => {

  
  return (
    <div className="container">

    <Row>
        <Col 
            xs={4}>   
                <Image src={Headshot} fluid alt="Shanni Suissa" />
        </Col>
      
      <div className="col-md-8">
            <p>Shanni Suissa specializes in all things digital from content creation to software development. She graduated from the Interdisciplinary Center Herzliya with a BA in Communications and a specialty in Visual Content. Shanni has extensive experience as a podcast producer, host and audio engineer as well as a wide range of video creation experience including live video production and video editing. Shanni recently finished a coding bootcamp at UCLA and is a certified full stack developer. In other words, she is a full time badass with a skillset to rival the best.</p>
            <p>Follow her on Instagram @shannisuissa.</p>
      </div>
    </Row>
  </div>


);

};

export default AboutBio;
