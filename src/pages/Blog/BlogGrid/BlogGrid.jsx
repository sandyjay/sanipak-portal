import React, { useState } from "react";
import {
  Card,
  Col,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import classnames from "classnames";
import img1 from "../../../assets/images/small/img-2.jpg";
import img2 from "../../../assets/images/small/img-6.jpg";
import img3 from "../../../assets/images/small/img-1.jpg";
import { Link } from "react-router-dom";
import RecentFile from "../../FileManager/RecentFile";

const BlogGrid = () => {
  const [activeTab, toggleTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) toggleTab(tab);
  };
  const playVideo = (e) => {
    const popup = document.querySelector(".training-video-popup");
    const backdrop = document.querySelector(".video-popup-backdrop");
    const videoSrc = e.getAttribute("data-vid");
    const popupMedia = popup.querySelector("iframe");
    popup.setAttribute("style", "display:block;");
    popupMedia.setAttribute(
      "src",
      videoSrc +
        "?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1"
    );
    backdrop.addEventListener("click", function () {
      popup.setAttribute("style", "display:none;");
      popupMedia.setAttribute("src", "");
    });
  };
  return (
    <React.Fragment>
      <Col xl={12} lg={12}>
        <Card>
          <ul
            className='nav nav-tabs nav-tabs-custom justify-content-center pt-2'
            role='tablist'
          >
            <NavItem>
              <NavLink
                to='#'
                className={classnames({
                  active: activeTab === "1",
                })}
                onClick={() => {
                  toggleTab("1");
                }}
              >
                Training Videos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='#'
                className={classnames({
                  active: activeTab === "2",
                })}
                onClick={() => {
                  toggleTab("2");
                }}
              >
                Downloadable Files
              </NavLink>
            </NavItem>
          </ul>

          <div className='training-video-popup'>
            <div className='video-popup-body'>
              <div className='video-popup-backdrop'></div>
              <div className='video-popup-inner'>
                <div className='media-box'>
                  <iframe
                    src='https://www.youtube.com/embed/ILmeK5CNHFM'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <TabContent className='p-4' activeTab={activeTab}>
            <TabPane tabId='1'>
              <div>
                <Row className='justify-content-center'>
                  <Col xl={10}>
                    <div>
                      <hr className='mb-4' />

                      <Row>
                        <Col lg={6}>
                          <div className='video-box'>
                            <div
                              className='media-box'
                              data-vid='https://www.youtube.com/embed/ILmeK5CNHFM'
                              onClick={(e) => playVideo(e.target.parentNode)}
                            >
                              <img
                                src='src/assets/images/training/traning-vid-1.jpeg'
                                alt=''
                              />
                              <div className='play-btn'></div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className='video-box'>
                            <div
                              className='media-box'
                              data-vid='https://www.youtube.com/embed/ILmeK5CNHFM'
                              onClick={(e) => playVideo(e.target.parentNode)}
                            >
                              <img
                                src='src/assets/images/training/traning-vid-1.jpeg'
                                alt=''
                              />
                              <div className='play-btn'></div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className='video-box'>
                            <div
                              className='media-box'
                              data-vid='https://www.youtube.com/embed/ILmeK5CNHFM'
                              onClick={(e) => playVideo(e.target.parentNode)}
                            >
                              <img
                                src='src/assets/images/training/traning-vid-1.jpeg'
                                alt=''
                              />
                              <div className='play-btn'></div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className='video-box'>
                            <div
                              className='media-box'
                              data-vid='https://www.youtube.com/embed/ILmeK5CNHFM'
                              onClick={(e) => playVideo(e.target.parentNode)}
                            >
                              <img
                                src='src/assets/images/training/traning-vid-1.jpeg'
                                alt=''
                              />
                              <div className='play-btn'></div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className='video-box'>
                            <div
                              className='media-box'
                              data-vid='https://www.youtube.com/embed/ILmeK5CNHFM'
                              onClick={(e) => playVideo(e.target.parentNode)}
                            >
                              <img
                                src='src/assets/images/training/traning-vid-1.jpeg'
                                alt=''
                              />
                              <div className='play-btn'></div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className='video-box'>
                            <div
                              className='media-box'
                              data-vid='https://www.youtube.com/embed/ILmeK5CNHFM'
                              onClick={(e) => playVideo(e.target.parentNode)}
                            >
                              <img
                                src='src/assets/images/training/traning-vid-1.jpeg'
                                alt=''
                              />
                              <div className='play-btn'></div>
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <hr className='my-4' />
                      <div className='text-center'>
                        <ul className='pagination justify-content-center pagination-rounded'>
                          <li className='page-item disabled'>
                            <Link to='#' className='page-link'>
                              <i className='mdi mdi-chevron-left'></i>
                            </Link>
                          </li>
                          <li className='page-item active'>
                            <Link to='#' className='page-link'>
                              1
                            </Link>
                          </li>
                          <li className='page-item'>
                            <Link to='#' className='page-link'>
                              2
                            </Link>
                          </li>
                          <li className='page-item'>
                            <Link to='#' className='page-link'>
                              3
                            </Link>
                          </li>
                          <li className='page-item'>
                            <Link to='#' className='page-link'>
                              ...
                            </Link>
                          </li>
                          <li className='page-item'>
                            <Link to='#' className='page-link'>
                              10
                            </Link>
                          </li>
                          <li className='page-item'>
                            <Link to='#' className='page-link'>
                              <i className='mdi mdi-chevron-right'></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </TabPane>

            <TabPane tabId='2'>
              {/* <div>
                <Row className='justify-content-center'>
                  <Col xl={8}>
                    <h5>Archive</h5>

                    <div className='mt-5'>
                      <div className='d-flex flex-wrap'>
                        <div className='ms-2'>
                          <h4>2020</h4>
                        </div>
                        <div className='ms-auto'>
                          <span className='badge badge-soft-success badge-pill float-right ms-1 font-size-12'>
                            03
                          </span>
                        </div>
                      </div>
                      <hr className='mt-2' />

                      <div className='list-group list-group-flush'>
                        <Link
                          to='/blog-details'
                          className='list-group-item text-muted'
                        >
                          <i className='mdi mdi-circle-medium ms-1'></i>{" "}
                          Beautiful Day with Friends
                        </Link>

                        <Link
                          to='/blog-details'
                          className='list-group-item text-muted'
                        >
                          <i className='mdi mdi-circle-medium ms-1'></i> Drawing
                          a sketch
                        </Link>

                        <Link
                          to='/blog-details'
                          className='list-group-item text-muted'
                        >
                          <i className='mdi mdi-circle-medium ms-1'></i> Project
                          discussion with team
                        </Link>
                      </div>
                    </div>

                    <div className='mt-5'>
                      <div className='d-flex flex-wrap'>
                        <div className='ms-2'>
                          <h4>2019</h4>
                        </div>
                        <div className='ms-auto'>
                          <span className='badge badge-soft-success badge-pill float-right ms-1 font-size-12'>
                            06
                          </span>
                        </div>
                      </div>
                      <hr className='mt-2' />

                      <div className='list-group list-group-flush'>
                        <Link
                          to='/blog-details'
                          className='list-group-item text-muted'
                        >
                          <i className='mdi mdi-circle-medium ms-1'></i> Coffee
                          with Friends
                        </Link>

                        <Link
                          to='/blog-details'
                          className='list-group-item text-muted'
                        >
                          <i className='mdi mdi-circle-medium ms-1'></i> Neque
                          porro quisquam est
                        </Link>

                        <Link
                          to='/blog-details'
                          className='list-group-item text-muted'
                        >
                          <i className='mdi mdi-circle-medium ms-1'></i> Quis
                          autem vel eum iure
                        </Link>

                        <Link
                          to='/blog-details'
                          className='list-group-item text-muted'
                        >
                          <i className='mdi mdi-circle-medium ms-1'></i> Cras mi
                          eu turpis
                        </Link>

                        <Link
                          to='/blog-details'
                          className='list-group-item text-muted'
                        >
                          <i className='mdi mdi-circle-medium ms-1'></i> Drawing
                          a sketch
                        </Link>

                        <Link
                          to='/blog-details'
                          className='list-group-item text-muted'
                        >
                          <i className='mdi mdi-circle-medium ms-1'></i> Project
                          discussion with team
                        </Link>
                      </div>
                    </div>

                    <div className='mt-5'>
                      <div className='d-flex flex-wrap'>
                        <div className='ms-2'>
                          <h4>2018</h4>
                        </div>
                        <div className='ms-auto'>
                          <span className='badge badge-soft-success badge-pill float-right ms-1 font-size-12'>
                            03
                          </span>
                        </div>
                      </div>
                      <hr className='mt-2' />

                      <div className='list-group list-group-flush'>
                        <Link
                          to='/blog-details'
                          className='list-group-item text-muted'
                        >
                          <i className='mdi mdi-circle-medium ms-1'></i>{" "}
                          Beautiful Day with Friends
                        </Link>

                        <Link
                          to='/blog-details'
                          className='list-group-item text-muted'
                        >
                          <i className='mdi mdi-circle-medium ms-1'></i> Drawing
                          a sketch
                        </Link>

                        <Link
                          to='/blog-details'
                          className='list-group-item text-muted'
                        >
                          <i className='mdi mdi-circle-medium ms-1'></i> Project
                          discussion with team
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div> */}
              <RecentFile />
            </TabPane>
          </TabContent>
        </Card>
      </Col>
    </React.Fragment>
  );
};
export default BlogGrid;
