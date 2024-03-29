import React from "react";
import { Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import BlogGrid from "./BlogGrid";
import RightBar from "../BlogList/RightBar";

const Index = (props) => {
  //meta title
  document.title =
    "Blog Grid | San-i-pak - Vite React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className='page-content'>
        <Container fluid>
          <Breadcrumbs title='Blog' breadcrumbItem='Training Material' />
          <Row>
            <BlogGrid />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Index;
