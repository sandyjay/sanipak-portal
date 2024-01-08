import React from "react";

import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import profileImg from "../../assets/images/profile-img.png";

const WelcomeComp = () => {
  return (
    <React.Fragment>
      <Card>
        <Row>
          <Col xs='12'>
            <div className='p-4' style={{ paddingTop: "20px" }}>
              {/* <h5 className='font-size-35'>Welcome Kaylah</h5>
                <h5 className='font-size-25 '>Project Lead, Sanipak</h5>
                <br></br> */}
              {/* <p className='font-size-20'>
                  This your place to read all the information we provide to you
                  as well as perform operational tasks like adding records,
                  keeping track of your invoices and getting access to all the
                  documents, traning materials and agreements in one place.
                </p>
                <br></br>
                <p className='font-size-20'>
                  If you have any questions, please contact us at
                  support@sanipak.com.
                </p> */}
              <img
                width='100%'
                src='https://res.cloudinary.com/devstroke/image/upload/v1698152377/Untitled_design_8_qvn91z.jpg'
              />
            </div>
          </Col>
        </Row>
        <CardBody className='pt-0'>
          <Row>
            <Col sm='12'>
              <div className='pt-4'>
                <Row>
                  <Col xs='3'>
                    <h5 className='font-size-35'>Client Name</h5>
                    <p className='mb-1'>Kaylah Blas</p>
                    <p className='text-muted mb-0'>
                      Intermountain Medical Center
                    </p>
                  </Col>
                  <Col xs='3'>
                    <h5 className='font-size-35'>Machine Information</h5>
                    <p className='text-muted mb-0'>
                      Type of Machine: Machine XYZ
                    </p>
                    <p className='text-muted mb-0'>
                      Date of Installation: May 25, 2009
                    </p>
                  </Col>
                  <Col xs='3'>
                    <h5 className='font-size-35'>PM Contract Type</h5>
                    <p className='text-muted mb-0'>Quarterly</p>
                  </Col>
                  <Col xs='3'>
                    <h5 className='font-size-35'>Visits History</h5>
                    <p className='text-muted mb-0'>Last Visit: June 23, 2023</p>
                    <p className='text-muted mb-0'>
                      Upcoming Visit: Dec 23, 2023
                    </p>
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
