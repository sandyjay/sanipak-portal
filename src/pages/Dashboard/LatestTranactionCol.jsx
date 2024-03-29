import React from "react";
import { Link } from "react-router-dom";

const CheckBox = (cell) => {
  return cell.value ? cell.value : "";
};

const OrderId = (cell) => {
  return (
    <Link to='#' className='text-body fw-bold'>
      {cell.value ? cell.value : ""}
    </Link>
  );
};

const BillingName = (cell) => {
  return cell.value ? cell.value : "";
};

const Date = (cell) => {
  return cell.value ? cell.value : "";
};

const Total = (cell) => {
  return cell.value ? cell.value : "";
};

const PaymentStatus = (cell) => {
  return (
    <div
      className={
        "badge font-size-12 badge-soft-" +
        (cell.value === "Pass"
          ? "success"
          : "danger" && cell.value === "Refund"
          ? "warning"
          : "danger")
      }
    >
      {cell.value}
    </div>
  );
};
const PaymentMethod = (cell) => {
  return (
    <span>
      <i
        className={
          cell.value === "Paypal"
            ? "fab fa-cc-paypal me-1"
            : "" || cell.value === "COD"
            ? "fab fas fa-money-bill-alt me-1"
            : "" || cell.value === "Mastercard"
            ? "fab fa-cc-mastercard me-1"
            : "" || cell.value === "Visa"
            ? "fab fa-cc-visa me-1"
            : ""
        }
      />{" "}
      {cell.value}
    </span>
  );
};
export {
  BillingName,
  CheckBox,
  Date,
  OrderId,
  PaymentMethod,
  PaymentStatus,
  Total,
};
