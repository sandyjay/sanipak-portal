import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardBody,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";

import classNames from "classnames";

//import Charts
import StackedColumnChart from "./StackedColumnChart";

//import action
import { getChartsData as onGetChartsData } from "../../store/actions";

import modalimage1 from "../../assets/images/product/img-7.png";
import modalimage2 from "../../assets/images/product/img-4.png";

// Pages Components
import WelcomeComp from "./WelcomeComp";
import MonthlyEarning from "./MonthlyEarning";
import SocialSource from "./SocialSource";
import ActivityComp from "./ActivityComp";
import TopCities from "./TopCities";
import LatestTranaction from "./LatestTranaction";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

//redux
import { useSelector, useDispatch } from "react-redux";

const Dashboard = (props) => {
  const [modal, setmodal] = useState(false);
  const [subscribemodal, setSubscribemodal] = useState(false);

  const { chartsData } = useSelector((state) => ({
    chartsData: state.Dashboard.chartsData,
  }));

  const reports = [
    {
      title: "Create, edit, import and delete BI records",
      iconClass: "bxs-folder",
      description: "BI records",
      color: "#167a7a",
    },
    {
      title: "Watch, read or download training resources",
      iconClass: "bxs-video",
      description: "Training Materials",
      color: "#ecbd6c",
    },
    {
      title: "View, download, and pay invoices",
      iconClass: "bxs-credit-card-alt",
      description: "Accounting",
      color: "#fa747d",
    },
    {
      title: "Agreements, contracts, and others",
      iconClass: "bxs-user",
      description: "Resources",
      color: "#525b88",
    },
    {
      title:
        "View any service-related documents (PMs, Service Call Sheets, Calibration, etc.)",
      iconClass: "bxs-cog",
      description: "Service",
      color: "#b8c16b",
    },
    {
      title: "FAQs and Troubleshooting",
      iconClass: "bx-support",
      description: "Get Help",
      color: "#4d72d0",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setSubscribemodal(true);
    }, 2000);
  }, []);

  const [periodData, setPeriodData] = useState([]);
  const [periodType, setPeriodType] = useState("yearly");

  useEffect(() => {
    setPeriodData(chartsData);
  }, [chartsData]);

  const onChangeChartPeriod = (pType) => {
    setPeriodType(pType);
    dispatch(onGetChartsData(pType));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetChartsData("yearly"));
  }, [dispatch]);

  //meta title
  document.title = "Dashboard | San-i-pak customer portal";

  return (
    <React.Fragment>
      <div className='page-content'>
        <Container fluid>
          <Row>
            <Col xl='12'>
              <WelcomeComp />
            </Col>
            {/* <Col xl='4'>
              <ActivityComp />
            </Col> */}
            <Col xl='12'>
              <Row>
                {/* Reports Render */}
                {reports.map((report, key) => (
                  <Col md='4' key={"_col_" + key} className='p-100'>
                    <Link to=''>
                      <Card
                        className={
                          key % 2 === 0
                            ? "mini-stats-wid biegebg"
                            : "mini-stats-wid bluebg"
                        }
                      >
                        <CardBody
                          className='d-flex dashboard-cardbody'
                          style={{ background: report.color }}
                        >
                          <div className='avatar-sm rounded-circle mini-stat-icon mb-4'>
                            <span
                              className='avatar-title rounded-circle mb-15'
                              style={{ color: report.color }}
                            >
                              <i
                                className={
                                  "bx " + report.iconClass + " font-size-24"
                                }
                              ></i>
                            </span>
                          </div>
                          <div className='d-flex'>
                            <div className='flex-grow-1'>
                              <h4 className='mb-3' style={{ color: "#fff" }}>
                                {report.description}
                              </h4>
                              <p
                                className='fw-medium'
                                style={{ color: "#fff" }}
                              >
                                {report.title}
                              </p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                      {/* <Card
                        color='primary'
                        inverse
                        style={{
                          width: "18rem",
                        }}
                      >
                        <CardHeader>
                          <div className='avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon'>
                            <span className='avatar-title rounded-circle bg-primary'>
                              <i
                                className={
                                  "bx " + report.iconClass + " font-size-24"
                                }
                              ></i>
                            </span>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <CardTitle tag='h1'>{report.title}</CardTitle>
                          <CardText>{report.description}</CardText>
                        </CardBody>
                      </Card> */}
                    </Link>
                  </Col>
                ))}
              </Row>

              <Card>
                <CardBody>
                  <div className='d-sm-flex flex-wrap'>
                    <h4 className='card-title mb-4'>BI records overview</h4>
                  </div>
                  <StackedColumnChart
                    periodData={periodData}
                    dataColors='["#a1762b", "#532093", "#ecbd6c"]'
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* <Row>
            <Col xl='4'>
              <SocialSource />
            </Col>
            <Col xl='4'>
              <ActivityComp />
            </Col>

            <Col xl='4'>
              <TopCities />
            </Col>
          </Row> */}
          <Row>
            <Col lg='12'>
              <LatestTranaction />
            </Col>
          </Row>
        </Container>
      </div>

      {/* <Modal
        isOpen={subscribemodal}
        role='dialog'
        autoFocus={true}
        centered
        data-toggle='modal'
        toggle={() => {
          setSubscribemodal(!subscribemodal);
        }}
      >
        <div>
          <ModalHeader
            className='border-bottom-0'
            toggle={() => {
              setSubscribemodal(!subscribemodal);
            }}
          ></ModalHeader>
        </div>
        <div className='modal-body'>
          <div className='text-center mb-4'>
            <div className='avatar-md mx-auto mb-4'>
              <div className='avatar-title bg-light  rounded-circle text-primary h1'>
                <i className='mdi mdi-email-open'></i>
              </div>
            </div>

            <div className='row justify-content-center'>
              <div className='col-xl-10'>
                <h4 className='text-primary'>Subscribe !</h4>
                <p className='text-muted font-size-14 mb-4'>
                  Subscribe our newletter and get notification to stay update.
                </p>

                <div className='input-group rounded bg-light'>
                  <Input
                    type='email'
                    className='form-control bg-transparent border-0'
                    placeholder='Enter Email address'
                  />
                  <Button color='primary' type='button' id='button-addon2'>
                    <i className='bx bxs-paper-plane'></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal> */}

      {/* <Modal
        isOpen={modal}
        role='dialog'
        autoFocus={true}
        centered={true}
        className='exampleModal'
        tabIndex='-1'
        toggle={() => {
          setmodal(!modal);
        }}
      >
        <div>
          <ModalHeader
            toggle={() => {
              setmodal(!modal);
            }}
          >
            Order Details
          </ModalHeader>
          <ModalBody>
            <p className='mb-2'>
              Product id: <span className='text-primary'>#SK2540</span>
            </p>
            <p className='mb-4'>
              Billing Name: <span className='text-primary'>Neal Matthews</span>
            </p>

            <div className='table-responsive'>
              <Table className='table table-centered table-nowrap'>
                <thead>
                  <tr>
                    <th scope='col'>Product</th>
                    <th scope='col'>Product Name</th>
                    <th scope='col'>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>
                      <div>
                        <img src={modalimage1} alt='' className='avatar-sm' />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 className='text-truncate font-size-14'>
                          Wireless Headphone (Black)
                        </h5>
                        <p className='text-muted mb-0'>$ 225 x 1</p>
                      </div>
                    </td>
                    <td>$ 255</td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <div>
                        <img src={modalimage2} alt='' className='avatar-sm' />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 className='text-truncate font-size-14'>
                          Hoodie (Blue)
                        </h5>
                        <p className='text-muted mb-0'>$ 145 x 1</p>
                      </div>
                    </td>
                    <td>$ 145</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <h6 className='m-0 text-end'>Sub Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <h6 className='m-0 text-end'>Shipping:</h6>
                    </td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <h6 className='m-0 text-end'>Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              type='button'
              color='secondary'
              onClick={() => {
                setmodal(!modal);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </div>
      </Modal> */}
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
