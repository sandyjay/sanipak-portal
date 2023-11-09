import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import TableContainer from "../../../components/Common/TableContainer";
import * as Yup from "yup";
import { useFormik } from "formik";

//import components
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import DeleteModal from "../../../components/Common/DeleteModal";

import {
  getOrders as onGetOrders,
  addNewOrder as onAddNewOrder,
  updateOrder as onUpdateOrder,
  deleteOrder as onDeleteOrder,
} from "/src/store/actions";

import {
  OrderId,
  BillingName,
  Date,
  Total,
  PaymentStatus,
  PaymentMethod,
} from "./EcommerceOrderCol";

//redux
import { useSelector, useDispatch } from "react-redux";
import EcommerceOrdersModal from "./EcommerceOrdersModal";

import {
  Button,
  Col,
  Row,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  FormFeedback,
  Label,
  Card,
  CardBody,
} from "reactstrap";

function EcommerceOrder() {
  //meta title
  document.title = "BI Records | San-i-pak ";

  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [orderList, setOrderList] = useState([]);
  const [order, setOrder] = useState(null);

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      orderId: (order && order.orderId) || "",
      version: (order && order.version) || "Test",
      orderdate: (order && order.orderdate) || "",
      chamber: (order && order.chamber) || "",
      paymentStatus: (order && order.paymentStatus) || "Pass",
      color: (order && order.color) || "yellow",
      billingName: (order && order.billingName) || "Kaylah Blas",
      total: (order && order.total) || "",
      paymentMethod: (order && order.paymentMethod) || "",
      paymentMethosd: (order && order.paymentMethosd) || "",
    },
    validationSchema: Yup.object({
      orderId: Yup.string()
        .matches(/[0-9\.\-\s+\/()]+/, "Please Enter Valid Order Id")
        .required("Please Enter Your Order Id"),
      billingName: Yup.string().required("Please Enter Your Billing Name"),
      orderdate: Yup.string().required("Please Enter Your Order Date"),
      total: Yup.string()
        .matches(/[0-9\.\-\s+\/()]+/, "Please Enter Valid Amount")
        .required("Total Amount"),
      paymentStatus: Yup.string().required("Please Enter Your Payment Status"),
      badgeclass: Yup.string().required("Please Enter Your Badge Class"),
      paymentMethod: Yup.string().required("Please Enter Your Payment Method"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateOrder = {
          id: order ? order.id : 0,
          orderId: values.orderId,
          version: values.version,
          orderdate: values.orderdate,
          chamber: values.chamber,
          paymentStatus: values.paymentStatus,
          color: values.color,
          billingName: values.billingName,
          total: values.total,
          paymentMethod: values.paymentMethod,
          paymentMethosd: values.paymentMethosd,
        };
        // update order
        dispatch(onUpdateOrder(updateOrder));
        validation.resetForm();
      } else {
        const newOrder = {
          id: Math.floor(Math.random() * (30 - 20)) + 20,
          orderId: values["orderId"],
          version: values["version"],
          orderdate: values["orderdate"],
          chamber: values["chamber"],
          paymentStatus: values["paymentStatus"],
          color: values["color"],
          billingName: values["billingName"],
          total: values["total"],
          paymentMethod: values["paymentMethod"],
          paymentMethosd: values["paymentMethosd"],
        };
        // save new order
        dispatch(onAddNewOrder(newOrder));
        validation.resetForm();
      }
      toggle();
    },
  });

  const toggleViewModal = () => setModal1(!modal1);

  const dispatch = useDispatch();
  const { orders } = useSelector((state) => ({
    orders: state.ecommerce.orders,
  }));

  useEffect(() => {
    if (orders && !orders.length) {
      dispatch(onGetOrders());
    }
  }, [dispatch, orders]);

  useEffect(() => {
    setOrderList(orders);
  }, [orders]);

  useEffect(() => {
    if (!isEmpty(orders) && !!isEdit) {
      setOrderList(orders);
      setIsEdit(false);
    }
  }, [orders]);

  const toggle = () => {
    if (modal) {
      setModal(false);
      setOrder(null);
    } else {
      setModal(true);
    }
  };

  const handleOrderClick = (arg) => {
    const order = arg;
    setOrder({
      id: order.id,
      orderId: order.orderId,
      version: order.version,
      orderdate: order.orderdate,
      chamber: order.chamber,
      paymentStatus: order.paymentStatus,
      color: order.color,
      billingName: order.billingName,
      total: order.total,
      paymentMethod: order.paymentMethod,
      paymentMethosd: order.paymentMethosd,
    });

    setIsEdit(true);

    toggle();
  };

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);

  const onClickDelete = (order) => {
    setOrder(order);
    setDeleteModal(true);
  };

  const handleDeleteOrder = () => {
    if (order && order.id) {
      dispatch(onDeleteOrder(order.id));
      setDeleteModal(false);
      setOrder("");
    }
  };
  const handleOrderClicks = () => {
    setOrderList("");
    setIsEdit(false);
    toggle();
  };

  const columns = useMemo(
    () => [
      {
        Header: "BI Lot#",
        accessor: "orderId",
        disableFilters: true,
        width: "150px",
        style: {
          textAlign: "center",
          width: "10%",
          background: "#0000",
        },
        Cell: (cellProps) => {
          return <OrderId {...cellProps} />;
        },
      },
      {
        Header: "Version",
        accessor: "verion",
        Cell: (cellProps) => {
          return "Test";
        },
      },
      {
        Header: "Created by",
        accessor: "billingName",
        filterable: true,
        Cell: (cellProps) => {
          return <BillingName {...cellProps} />;
        },
      },
      {
        Header: "Test Date (MM/DD/YYYY)",
        accessor: "orderdate",
        Cell: (cellProps) => {
          return <Date {...cellProps} />;
        },
      },
      {
        Header: "Chamber #",
        accessor: "chamber",
        disableFilters: true,
        Cell: (cellProps) => {
          return <Date {...cellProps} />;
        },
      },
      {
        Header: "Result",
        accessor: "paymentStatus",
        filterable: true,
        Cell: (cellProps) => {
          return <PaymentStatus {...cellProps} />;
        },
      },
      {
        Header: "Color",
        accessor: "color",
        disableFilters: true,
        Cell: () => {
          return "Purple";
        },
      },
      {
        Header: "Incubation Temperature",
        disableFilters: true,
        accessor: "total",
        filterable: true,
        Cell: (cellProps) => {
          return "36 degrees";
        },
      },

      {
        Header: "Incubation start time",
        accessor: "paymentMethod",
        disableFilters: true,
        Cell: (cellProps) => {
          return "2023-01-06, 04:19PM";
        },
      },
      {
        Header: "Incubation end time",
        accessor: "paymentMethosd",
        disableFilters: true,
        Cell: (cellProps) => {
          return "2023-01-06, 04:19PM";
        },
      },
      {
        Header: "Action",
        accessor: "action",
        disableFilters: true,
        Cell: (cellProps) => {
          return (
            <div className='d-flex gap-3'>
              <Link
                to='#'
                className='text-success'
                onClick={() => {
                  const orderData = cellProps.row.original;
                  handleOrderClick(orderData);
                }}
              >
                <i className='mdi mdi-pencil font-size-18' id='edittooltip' />
                <UncontrolledTooltip placement='top' target='edittooltip'>
                  Edit
                </UncontrolledTooltip>
              </Link>
              <Link
                to='#'
                className='text-danger'
                onClick={() => {
                  const orderData = cellProps.row.original;
                  onClickDelete(orderData);
                }}
              >
                <i className='mdi mdi-delete font-size-18' id='deletetooltip' />
                <UncontrolledTooltip placement='top' target='deletetooltip'>
                  Delete
                </UncontrolledTooltip>
              </Link>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <EcommerceOrdersModal isOpen={modal1} toggle={toggleViewModal} />
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteOrder}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className='page-content'>
        <div className='container-fluid'>
          <div className='page-title-box d-sm-flex align-items-center justify-content-between'>
            <h4 className='mb-0 font-size-18'>BI records</h4>
          </div>
          <Row>
            <Col xs='12'>
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={orders}
                    isGlobalFilter={true}
                    isAddOptions={true}
                    handleOrderClicks={handleOrderClicks}
                    customPageSize={10}
                    className='custom-header-css'
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} tag='h4'>
              {!!isEdit ? "Edit record" : "Add a new record"}
            </ModalHeader>
            <ModalBody>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <Row>
                  <Col className='col-12'>
                    <div className='mb-3'>
                      <Label className='form-label'>BI lot</Label>
                      <Input
                        name='orderId'
                        type='text'
                        placeholder='Insert BI lot number'
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.orderId || ""}
                        invalid={
                          validation.touched.orderId &&
                          validation.errors.orderId
                            ? true
                            : false
                        }
                      />
                      {validation.touched.orderId &&
                      validation.errors.orderId ? (
                        <FormFeedback type='invalid'>
                          {validation.errors.orderId}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className='mb-3'>
                      <Label className='form-label'>Version</Label>
                      <Input
                        name='version'
                        type='select'
                        placeholder='Insert Payment Status'
                        className='form-select'
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.paymentStatus || ""}
                      >
                        <option>Test</option>
                        <option>Control</option>
                      </Input>
                      {validation.touched.paymentStatus &&
                      validation.errors.paymentStatus ? (
                        <FormFeedback type='invalid'>
                          {validation.errors.paymentStatus}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className='mb-3'>
                      <Label className='form-label'>Test Date</Label>
                      <Input
                        name='orderdate'
                        type='date'
                        // value={orderList.orderdate || ""}
                        placeholder='When did you perform the test?'
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.orderdate || ""}
                        invalid={
                          validation.touched.orderdate &&
                          validation.errors.orderdate
                            ? true
                            : false
                        }
                      />
                      {validation.touched.orderdate &&
                      validation.errors.orderdate ? (
                        <FormFeedback type='invalid'>
                          {validation.errors.orderdate}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className='mb-3'>
                      <Label className='form-label'>Chamber #</Label>
                      <Input
                        name='chamber'
                        type='text'
                        placeholder='For eg chamber 1'
                        validate={{
                          required: { value: false },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.chamber || ""}
                        invalid={
                          validation.touched.chamber &&
                          validation.errors.chamber
                            ? true
                            : false
                        }
                      />
                      {validation.touched.chamber &&
                      validation.errors.chamber ? (
                        <FormFeedback type='invalid'>
                          {validation.errors.chamber}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className='mb-3'>
                      <Label className='form-label'>Results</Label>
                      <Input
                        name='paymentStatus'
                        type='select'
                        placeholder='Insert Payment Status'
                        className='form-select'
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.paymentStatus || ""}
                      >
                        <option>Pass</option>
                        <option>Fail</option>
                      </Input>
                      {validation.touched.paymentStatus &&
                      validation.errors.paymentStatus ? (
                        <FormFeedback type='invalid'>
                          {validation.errors.paymentStatus}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className='mb-3'>
                      <Label className='form-label'>Color</Label>
                      <Input
                        name='color'
                        type='select'
                        placeholder='Insert Payment Status'
                        className='form-select'
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.paymentStatus || ""}
                      >
                        <option>Yellow</option>
                        <option>Purple</option>
                        <option>Brown</option>
                      </Input>
                      {validation.touched.paymentStatus &&
                      validation.errors.paymentStatus ? (
                        <FormFeedback type='invalid'>
                          {validation.errors.paymentStatus}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className='mb-3'>
                      <Label className='form-label'>
                        Incubation Temperature
                      </Label>
                      <Input
                        name='total'
                        placeholder='Temperature in degrees'
                        type='text'
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.total || ""}
                        invalid={
                          validation.touched.total && validation.errors.total
                            ? true
                            : false
                        }
                      />
                      {validation.touched.total && validation.errors.total ? (
                        <FormFeedback type='invalid'>
                          {validation.errors.total}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className='mb-3'>
                      <Label className='form-label'>
                        Incubation start time
                      </Label>
                      <Input
                        name='paymentMethod'
                        placeholder='HH:MM'
                        type='text'
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.paymentMethod || ""}
                        invalid={
                          validation.touched.paymentMethod &&
                          validation.errors.paymentMethod
                            ? true
                            : false
                        }
                      />
                      {validation.touched.paymentMethod &&
                      validation.errors.paymentMethod ? (
                        <FormFeedback type='invalid'>
                          {validation.errors.paymentMethod}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className='mb-3'>
                      <Label className='form-label'>Incubation end time</Label>
                      <Input
                        name='paymentMethosd'
                        placeholder='HH:MM'
                        type='text'
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.paymentMethosd || ""}
                        invalid={
                          validation.touched.paymentMethosd &&
                          validation.errors.paymentMethosd
                            ? true
                            : false
                        }
                      />
                      {validation.touched.paymentMethosd &&
                      validation.errors.paymentMethosd ? (
                        <FormFeedback type='invalid'>
                          {validation.errors.paymentMethosd}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className='text-end'>
                      <button
                        type='submit'
                        className='btn btn-success save-user'
                      >
                        Add
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
}
EcommerceOrder.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default EcommerceOrder;
