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
            <Col xs='6'>
              <div className='text-primary p-4' style={{ paddingTop: "20px" }}>
                <h5 className='font-size-35'>Welcome Kaylah</h5>
                <h5 className='font-size-25 '>Project Lead, Sanipak</h5>
                <br></br>
                <p className='font-size-20'>
                  This your place to read all the information we provide to you
                  as well as perform operational tasks like adding records,
                  keeping track of your invoices and getting access to all the
                  documents, traning materials and agreements in one place.
                </p>
                <br></br>
                <p className='font-size-20'>
                  If you have any questions, please contact us at
                  support@sanipak.com.
                </p>
              </div>
            </Col>
            <Col xs='6' className='align-self-end'>
              <img
                src='https://res.cloudinary.com/devstroke/image/upload/v1694104385/IMG_7225_1_z2marh.jpg'
                alt=''
                className='img-fluid'
              />
            </Col>
          </Row>
        </div>
        <CardBody className='pt-0'>
          <Row>
            <Col sm='12'>
              <div className='pt-4'>
                <Row>
                  <Col xs='4'>
                    <h5 className='font-size-35'>PM Contract Type</h5>
                    <p className='text-muted mb-0'>Quarterly</p>
                  </Col>
                  <Col xs='4'>
                    <h5 className='font-size-35'>Last Visit</h5>
                    <p className='text-muted mb-0'>June 23, 2023</p>
                  </Col>
                  <Col xs='4'>
                    <h5 className='font-size-35'>Upcoming Visit</h5>
                    <p className='text-muted mb-0'>Oct 12, 2023</p>
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
