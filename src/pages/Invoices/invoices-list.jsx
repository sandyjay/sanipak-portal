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
import CardInvoice from "./card-invoice";
import { getInvoices as onGetInvoices } from "/src/store/actions";

const InvoicesList = (props) => {
  //meta title
  document.title =
    "Invoice List | Skote - Vite React Admin & Dashboard Template";

  const dispatch = useDispatch();

  const { invoices } = useSelector((state) => ({
    invoices: state.invoices.invoices,
  }));

  useEffect(() => {
    dispatch(onGetInvoices());
  }, [dispatch]);

  const invoiceData = [
    {
      id: "1",
      invoiceID: "NH78IG65",
      company: "ABC Hospital",
      invoicePrice: "5945",
      date: "June 12, 2023",
      due: true,
    },
  ];

  return (
    <React.Fragment>
      <div className='page-content'>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <div className='page-title-box d-sm-flex align-items-center justify-content-between'>
            <h4 className='mb-0 font-size-18'>Accounting</h4>
          </div>
          <Row>
            <div className='page-title-box d-sm-flex align-items-center justify-content-between'>
              <h3 className='mb-0 font-size-18'>Payment due</h3>
            </div>
            {map(invoiceData, (invoice, key) => (
              <CardInvoice data={invoice} key={"_invoice_" + key} />
            ))}
          </Row>
          <Row>
            <div className='page-title-box d-sm-flex align-items-center justify-content-between'>
              <h3 className='mb-0 font-size-18'>Paid invoices</h3>
            </div>
            {map(invoices, (invoice, key) => (
              <CardInvoice data={invoice} key={"_invoice_" + key} />
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
