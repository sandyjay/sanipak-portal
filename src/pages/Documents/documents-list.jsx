import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";
import { map } from "lodash";

//redux
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";

//Import Card invoice
import CardDocument from "./card-document";
import { getInvoices as onGetInvoices } from "/src/store/actions";

const InvoicesList = (props) => {
  //meta title
  document.title = "Documents between San-I-Pak and Test client";

  const dispatch = useDispatch();

  const { invoices } = useSelector((state) => ({
    invoices: state.invoices.invoices,
  }));

  useEffect(() => {
    dispatch(onGetInvoices());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className='page-content'>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title='Documents' breadcrumbItem='Document List' />

          <Row>
            {map(invoices, (invoice, key) => (
              <CardDocument data={invoice} key={"_invoice_" + key} />
            ))}
          </Row>
          <Row>
            <Col xs='12'>
              <div className='text-center my-3'>
                <Link to='#' className='text-success'>
                  <i className='bx bx-loader bx-spin font-size-18 align-middle me-2' />
                  Load more
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

InvoicesList.propTypes = {
  invoices: PropTypes.array,
  onGetInvoices: PropTypes.func,
};

export default withRouter(InvoicesList);
