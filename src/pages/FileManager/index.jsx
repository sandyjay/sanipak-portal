import React from "react";
import { Card, CardBody, Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// import Component
import FileLeftBar from "./FileLeftBar";
import FileList from "./FileList";
import RecentFile from "./RecentFile";
import Storage from "./Storage";

const Index = () => {
  //meta title
  document.title =
    "File Manager | San-i-pak - Vite React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className='page-content'>
        <Container fluid>
          <Breadcrumbs title='Files' breadcrumbItem='Customer resources' />
          <div className='d-xl-flex'>
            <div className='w-100'>
              <div className='d-md-flex'>
                {/* FileRightBar  */}
                {/* <FileLeftBar /> */}
                <div className='w-100'>
                  <Card>
                    <CardBody>
                      <FileList />
                      {/* <RecentFile /> */}
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Index;
