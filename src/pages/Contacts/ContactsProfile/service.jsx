import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import withRouter from "../../../components/Common/withRouter";
import { map } from "lodash";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";

// TableContainer

import { Pdate, Ddate, Name, Idno, Budget } from "./CryptoCol";

import TableContainer from "/src/components/Common/TableContainer";

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";

//Import mini card widgets
import MiniCards from "./mini-card";

//Import Images
import profile1 from "/src/assets/images/profile-img.png";

// import charts
import ApexRevenue from "../ApexRevenue";
import { getUserProfile } from "/src/store/actions";
import RecentFile from "../../FileManager/RecentFile";

const ContactsProfile = (props) => {
  //meta title
  document.title = "Profile | Skote - Vite React Admin & Dashboard Template";

  const { userProfile, onGetUserProfile } = props;
  // eslint-disable-next-line no-unused-vars
  const [miniCards, setMiniCards] = useState([
    {
      title: "Service Technician",
      iconClass: "bx-check-circle",
      text: "Adam Stengler",
    },
    { title: "Date", iconClass: "bx-hourglass", text: "May 25, 2023" },
    { title: "Time in", iconClass: "bx-package", text: "10:45" },
    { title: "Time out", iconClass: "bx-package", text: "13:30" },
  ]);

  useEffect(() => {
    onGetUserProfile();
  }, [onGetUserProfile]);

  const columns = useMemo(
    () => [
      {
        Header: "Facility / Department",
        accessor: "name",
        disableFilters: true,
        filterable: true,
        Cell: (cellProps) => {
          return <Name {...cellProps} />;
        },
      },
      {
        Header: "Visit Date",
        accessor: "startDate",
        disableFilters: true,
        filterable: true,
        Cell: (cellProps) => {
          return <Pdate {...cellProps} />;
        },
      },
      {
        Header: "Comments",
        accessor: "deadline",
        disableFilters: true,
        filterable: true,
        Cell: (cellProps) => {
          return "Visit was succesful";
        },
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <div className='page-content'>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title='Company ' breadcrumbItem='Company Overview' />

          <Row>
            <Col xl='4'>
              <Card>
                <CardBody>
                  <CardTitle className='mb-4'>Facility Information</CardTitle>
                  <div className='table-responsive'>
                    <Table className='table-nowrap mb-0'>
                      <tbody>
                        <tr>
                          <th scope='row'>Name :</th>
                          <td>{userProfile.name}</td>
                        </tr>
                        <tr>
                          <th scope='row'>Location :</th>
                          <td>{userProfile.location}</td>
                        </tr>
                        <tr>
                          <th scope='row'>Account #:</th>
                          <td>something</td>
                        </tr>
                        <tr>
                          <th scope='row'>Contact :</th>
                          <td>{userProfile.email}</td>
                        </tr>
                        <tr>
                          <th scope='row'>Title :</th>
                          <td>something</td>
                        </tr>
                        <tr>
                          <th scope='row'>Phone :</th>
                          <td>{userProfile.phone}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>

              <h2 class='mb-4'>Sterlizer Operation</h2>

              <Card>
                <CardBody>
                  <CardTitle className='mb-4'>Mechanical</CardTitle>
                  <p className='text-muted mb-4'>
                    {userProfile.personalDetail}
                  </p>
                  <div className='table-responsive'>
                    <Table className='table-nowrap mb-0'>
                      <tbody>
                        <tr>
                          <th scope='row'>
                            Discharge door bar crimp pressure:
                          </th>
                          <td>1200 lbs</td>
                        </tr>
                        <tr>
                          <th scope='row'> Discharge door bar shimming :</th>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th scope='row'> Load door bar shimming :</th>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th scope='row'> Limit switch adjustments :</th>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th scope='row'> Bag pinch function :</th>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th scope='row'> Automatic discharge sequence :</th>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th scope='row'> Load door lock function :</th>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <CardTitle className='mb-4'>Steam</CardTitle>
                  <p className='text-muted mb-4'>
                    {userProfile.personalDetail}
                  </p>
                  <div className='table-responsive'>
                    <Table className='table-nowrap mb-0'>
                      <tbody>
                        <tr>
                          <th scope='row'>Pressure level setting:</th>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th scope='row'> Jacket regulator setting :</th>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th scope='row'> Chamber regulator setting :</th>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th scope='row'>Ejector regulator setting :</th>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>

              <h2 class='mb-4'>Sterlizer Operation</h2>

              {/* <Card>
                <CardBody>
                  <CardTitle className='mb-5'>Experience</CardTitle>
                  <div>
                    <ul className='verti-timeline list-unstyled'>
                      {map(userProfile.experiences, (experience, i) => (
                        <li
                          className={
                            experience.id === 1
                              ? "event-list active"
                              : "event-list"
                          }
                          key={"_exp_" + i}
                        >
                          <div className='event-timeline-dot'>
                            <i
                              className={
                                experience.id === 1
                                  ? "bx bx-right-arrow-circle bx-fade-right"
                                  : "bx bx-right-arrow-circle"
                              }
                            />
                          </div>
                          <div className='d-flex'>
                            <div className='me-3'>
                              <i
                                className={
                                  "bx " +
                                  experience.iconClass +
                                  " h4 text-primary"
                                }
                              />
                            </div>
                            <div className='flex-grow-1'>
                              <div>
                                <h5 className='font-size-15'>
                                  <Link
                                    to={experience.link}
                                    className='text-dark'
                                  >
                                    {experience.designation}
                                  </Link>
                                </h5>
                                <span className='text-primary'>
                                  {experience.timeDuration}
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card> */}
            </Col>

            <Col xl='8'>
              <Row>
                {map(miniCards, (card, key) => (
                  <MiniCards
                    title={card.title}
                    text={card.text}
                    iconClass={card.iconClass}
                    key={"_card_" + key}
                  />
                ))}
              </Row>

              <Card>
                <CardBody>
                  <CardTitle className='mb-4'>Service Reports</CardTitle>
                  <RecentFile service />
                </CardBody>
              </Card>
              <Row>
                <Col lg={6}>
                  <Card>
                    <CardBody>
                      <CardTitle className='mb-4'>Function</CardTitle>
                      <p className='text-muted mb-4'>
                        Here goes all the info belonging to functions
                      </p>
                      <div className='table-responsive'>
                        <Table className='table-nowrap mb-0'>
                          <tbody>
                            <tr>
                              <th scope='row'>Preheat temperature:</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'> Vaccum level setting :</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'> Temperature switch setting :</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>Time to maximum temperature :</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>Maximum temperature :</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>
                                Cycle time at preset temperature :
                              </th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>Vent down time:</th>
                              <td>-</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <CardTitle className='mb-4'>Calibration</CardTitle>
                      <div className='table-responsive'>
                        <Table className='table-nowrap mb-0'>
                          <tbody>
                            <tr>
                              <th scope='row'>Strip printer/chart recorder:</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>
                                {" "}
                                Instrument calibration date :
                              </th>
                              <td>-</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={6}>
                  <Card>
                    <CardBody>
                      <CardTitle className='mb-4'>
                        Stertility Test (Themolog S Strip)
                      </CardTitle>
                      <p className='text-muted mb-4'>
                        {userProfile.personalDetail}
                      </p>
                      <div className='table-responsive'>
                        <Table className='table-nowrap mb-0'>
                          <tbody>
                            <tr>
                              <th scope='row'>Bottom left rear corner:</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>Bottom right rear corner:</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>Bottom left front corner:</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>Bottom right front corner:</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>Bottom center:</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>Top left rear corner:</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>Top right rear corner:</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>Top left front corner:</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>Top right front corner:</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>Top right rear corner:</th>
                              <td>-</td>
                            </tr>
                            <tr>
                              <th scope='row'>Various bag placements:</th>
                              <td>-</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

ContactsProfile.propTypes = {
  userProfile: PropTypes.any,
  onGetUserProfile: PropTypes.func,
};

const mapStateToProps = ({ contacts }) => ({
  userProfile: contacts.userProfile,
});

const mapDispatchToProps = (dispatch) => ({
  onGetUserProfile: () => dispatch(getUserProfile()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactsProfile));
