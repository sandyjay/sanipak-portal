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
  document.title =
    "Profile | San-i-pak - Vite React Admin & Dashboard Template";

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
    <>
      <div className='page-content'>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title='Company ' breadcrumbItem='Service Reports' />

          <Row>
            <Col xl='12'>
              <Card>
                <CardBody>
                  <RecentFile service />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
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
