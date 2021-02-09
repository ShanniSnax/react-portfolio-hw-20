import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Musicology from './images/musicology.png';
import IceBox from './images/icebox.png';
import SelfCare from './images/selfcare.png';
import Image from 'react-bootstrap/Image';

function PortDev () {

    return (
<Container>
    <Row className="top-margin">
        <Col 
            xs={4} 
            className="padding">
            <a href="https://mfitzwinick.github.io/binary-babes/">
                <Image src={Musicology} fluid alt="musicology" />
            </a>
        </Col>
        
        <Col    
            xs={4} 
            className="padding">
            <a href="https://infinite-castle-57105.herokuapp.com/">
                <Image src={IceBox} fluid alt="musicology" />
            </a>
        </Col>

        <Col 
            xs={4} 
            className="padding">
                <a href="https://aqueous-refuge-56122.herokuapp.com/">
                    <Image src={SelfCare}
                    fluid
                    alt="self care for men" />
                </a>
        </Col>
    </Row>
    </Container>
);

};

export default PortDev;