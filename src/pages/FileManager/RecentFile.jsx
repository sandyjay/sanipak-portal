import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

const RecentFile = (props) => {
  const recentfile = [
    {
      id: 1,
      facility: "Facility A",
      date: "12-10-2020, 09:45",
      technician: "Harry Simons",
    },
    {
      id: 2,
      facility: "Facility B",
      date: "11-10-2020, 17:05",
      technician: "Jessica Jones",
    },
    {
      id: 3,
      facility: "Facility C",
      date: "11-10-2020, 13:26",
      technician: "Harry Simons",
    },
    {
      id: 4,
      facility: "Facility D",
      date: "10-10-2020, 11:32",
      technician: "Jessica Jones",
    },
    {
      id: 5,
      facility: "Facility E",
      date: "10-10-2020, 10:51",
      technician: "Harry Simons",
    },
    {
      id: 6,
      facility: "Facility D",
      date: "09-10-2020, 17:05",
      technician: "Jessica Jones",
    },
    {
      id: 7,
      facility: "Facility E",
      date: "09-10-2020, 15:12",
      technician: "Harry Simons",
    },
    {
      id: 8,
      facility: "Facility F",
      date: "09-10-2020, 10:11",
      technician: "Jessica Jones",
    },
    {
      id: 9,
      facility: "Facility G",
      date: "08-10-2020, 03:22",
      technician: "Jessica Jones",
    },
    {
      id: 10,
      facility: "Facility H",
      date: "08-10-2020, 03:22",
      technician: "Jessica Jones",
    },
    {
      id: 11,
      facility: "Facility I",
      date: "08-10-2020, 03:22",
      technician: "Jessica Jones",
    },
    {
      id: 12,
      facility: "Facility J",
      date: "08-10-2020, 03:22",
      technician: "Jessica Jones",
    },
    {
      id: 13,
      facility: "Facility K",
      date: "08-10-2020, 03:22",
      technician: "Jessica Jones",
    },
    {
      id: 14,
      facility: "Facility L",
      date: "08-10-2020, 03:22",
      technician: "Jessica Jones",
    },
    {
      id: 15,
      facility: "Facility M",
      date: "08-10-2020, 03:22",
      technician: "Jessica Jones",
    },
    {
      id: 16,
      facility: "Facility N",
      date: "08-10-2020, 03:22",
      technician: "Jessica Jones",
    },
    {
      id: 17,
      facility: "Facility O",
      date: "08-10-2020, 03:22",
      technician: "Jessica Jones",
    },
  ];
  return (
    <React.Fragment>
      <div className='table-responsive'>
        <Table className='table align-middle table-nowrap table-hover mb-0'>
          <thead>
            <tr>
              <th scope='col'>Facility</th>
              <th scope='col'>Technician</th>
              <th scope='col'>Date </th>
              <th scope='col'>Action </th>
            </tr>
          </thead>
          <tbody>
            {recentfile.map((item, key) => (
              <tr key={key}>
                <td>{item.facility}</td>
                <td>{item.technician}</td>
                <td>{item.date}</td>
                <td>
                  Download <i className='arrow-down'></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
};

export default RecentFile;
