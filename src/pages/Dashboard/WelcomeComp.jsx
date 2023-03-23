import React from "react";

import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import profileImg from "../../assets/images/profile-img.png";

const WelcomeComp = () => {
  return (
    <React.Fragment>
      <Card className='overflow-hidden'>
        <div className='bg-primary bg-soft'>
          <Row>
            <Col xs='7'>
              <div className='text-primary p-3'>
                <h5 className='text-primary'>Welcome Back !</h5>
                <p>Test Client</p>
              </div>
            </Col>
            <Col xs='5' className='align-self-end'>
              <img src={profileImg} alt='' className='img-fluid' />
            </Col>
          </Row>
        </div>
        <CardBody className='pt-0'>
          <Row>
            <Col sm='4'>
              <div className='avatar-md profile-user-wid mb-4'>
                <img
                  src={avatar1}
                  alt=''
                  className='img-thumbnail rounded-circle'
                />
              </div>
              <h5 className='font-size-15 text-truncate'>Henry Price</h5>
              <p className='text-muted mb-0 text-truncate'>XYZ Facility</p>
            </Col>

            <Col sm='8'>
              <div className='pt-4'>
                <Row>
                  <Col xs='6'>
                    <h5 className='font-size-15'>125</h5>
                    <p className='text-muted mb-0'>Records added</p>
                  </Col>
                  <Col xs='6'>
                    <h5 className='font-size-15'>5</h5>
                    <p className='text-muted mb-0'>Training videos watched</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};
export default WelcomeComp;
