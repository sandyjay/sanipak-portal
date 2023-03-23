import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const ActivityComp = () => {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle className='mb-5'>Activity</CardTitle>
          <ul className='verti-timeline list-unstyled'>
            <li className='event-list'>
              <div className='event-timeline-dot'>
                <i className='bx bx-right-arrow-circle font-size-18' />
              </div>
              <div className='flex-shrink-0 d-flex'>
                <div className='me-3'>
                  <h5 className='font-size-14'>22 Nov</h5>
                </div>
                <div className='flex-grow-1'>
                  <div>Added a BI record.</div>
                </div>
              </div>
            </li>

            <li className='event-list'>
              <div className='event-timeline-dot'>
                <i className='bx bx-right-arrow-circle font-size-18' />
              </div>
              <div className='flex-shrink-0 d-flex'>
                <div className='me-3'>
                  <h5 className='font-size-14'>21 Nov</h5>
                </div>
                <div className='flex-grow-1'>
                  <div>Downloaded training video</div>
                </div>
              </div>
            </li>
            <li className='event-list'>
              <div className='event-timeline-dot'>
                <i className='bx bx-right-arrow-circle font-size-18' />
              </div>
              <div className='flex-shrink-0 d-flex'>
                <div className='me-3'>
                  <h5 className='font-size-14'>12 Nov </h5>
                </div>
                <div className='flex-grow-1'>
                  <div>Paid the invoice #SIP457890</div>
                </div>
              </div>
            </li>
            <li className='event-list'>
              <div className='event-timeline-dot'>
                <i className='bx bx-right-arrow-circle font-size-18' />
              </div>
              <div className='flex-shrink-0 d-flex'>
                <div className='me-3'>
                  <h5 className='font-size-14'>12 Oct </h5>
                </div>
                <div className='flex-grow-1'>
                  <div>4 BI records added</div>
                </div>
              </div>
            </li>
            <li className='event-list'>
              <div className='event-timeline-dot'>
                <i className='bx bx-right-arrow-circle font-size-18' />
              </div>
              <div className='flex-shrink-0 d-flex'>
                <div className='me-3'>
                  <h5 className='font-size-14'>02 Oct </h5>
                </div>
                <div className='flex-grow-1'>
                  <div>Profile phone updated</div>
                </div>
              </div>
            </li>
          </ul>
          <div className='text-center mt-4'>
            <Link to='' className='btn btn-primary  btn-sm'>
              View More <i className='mdi mdi-arrow-right ms-1' />
            </Link>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ActivityComp;
