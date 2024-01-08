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
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import ListItemText from "@mui/material/ListItemText";

import { ListItemButton, ListItemIcon } from "@mui/material";
import { ArrowRightIcon } from "@mui/x-date-pickers";
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
  const [more, setMore] = useState(false);
  const pdfs = [
    { text: "Instruction manual for BI records", link: "#" },
    { text: "Test template", link: "#" },
    { text: "Service report form,", link: "#" },
    { text: "Instruction manual for BI records", link: "#" },
    { text: "Test template", link: "#" },
    { text: "Service report form,", link: "#" },
    { text: "Instruction manual for BI records", link: "#" },
    { text: "Test template", link: "#" },
    { text: "Service report form,", link: "#" },
    { text: "Instruction manual for BI records", link: "#" },
    { text: "Test template", link: "#" },
    { text: "Service report form,", link: "#" },
  ];

  function getMoreItems() {
    return (
      <>
        <Col lg={4}>
          <div className='video-box'>
            <div
              className='media-box'
              data-vid='https://www.youtube.com/embed/ILmeK5CNHFM'
              onClick={(e) => playVideo(e.target.parentNode)}
            >
              <img src='src/assets/images/training/traning-vid-1.jpeg' alt='' />
              <div className='play-btn'></div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className='video-box'>
            <div
              className='media-box'
              data-vid='https://www.youtube.com/embed/ILmeK5CNHFM'
              onClick={(e) => playVideo(e.target.parentNode)}
            >
              <img src='src/assets/images/training/traning-vid-1.jpeg' alt='' />
              <div className='play-btn'></div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className='video-box'>
            <div
              className='media-box'
              data-vid='https://www.youtube.com/embed/ILmeK5CNHFM'
              onClick={(e) => playVideo(e.target.parentNode)}
            >
              <img src='src/assets/images/training/traning-vid-1.jpeg' alt='' />
              <div className='play-btn'></div>
            </div>
          </div>
        </Col>
      </>
    );
  }

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
                <Row className='justify-content-center' textAlign='center'>
                  <Col
                    xl={10}
                    className='d-flex flex-column align-items-center'
                  >
                    <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
                      Machine Education
                    </h3>
                    <Row
                      className='justify-content-center align-items-center'
                      style={{ width: "100%" }}
                    >
                      <Col lg={4}>
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
                        <h6>San-I-Pak AUTO SERIES</h6>
                      </Col>
                      <Col lg={4}>
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
                      <Col lg={4}>
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
                      <Col lg={4}>
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
                      <Col lg={4}>
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
                      <Col lg={4}>
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
                      {more && getMoreItems()}
                    </Row>

                    <Button
                      color='primary'
                      className='btn btn-primary waves-effect waves-light'
                      onClick={() => setMore(true)}
                    >
                      Load more
                    </Button>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className='justify-content-center'>
                  <Col xl={10}>
                    <div>
                      <hr className='mb-4' />
                      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
                        How to add records
                      </h3>
                      <Row>
                        <Col lg={4}>
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
                        <Col lg={4}>
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
                        <Col lg={4}>
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
                        <Col lg={4}>
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
                        <Col lg={4}>
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
                        <Col lg={4}>
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
              <div>
                <Row className='justify-content-center'>
                  <Col xl={10}>
                    <div>
                      <hr className='mb-4' />
                      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
                        Training video 1
                      </h3>
                      <Row>
                        <Col lg={4}>
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
                        <Col lg={4}>
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
                        <Col lg={4}>
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
                        <Col lg={4}>
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
                        <Col lg={4}>
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
                        <Col lg={4}>
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
              {pdfs.map((pdf) => {
                return (
                  <>
                    <ListItemText key={pdf.text}>
                      <ListItemIcon>
                        <ArrowRightIcon />
                      </ListItemIcon>
                      <a
                        href='https://www.africau.edu/images/default/sample.pdf'
                        className='text-info'
                        target='_blank'
                      >
                        {pdf.text}
                      </a>
                    </ListItemText>
                  </>
                );
              })}
              {/* <RecentFile /> */}
            </TabPane>
          </TabContent>
        </Card>
      </Col>
    </React.Fragment>
  );
};
export default BlogGrid;
