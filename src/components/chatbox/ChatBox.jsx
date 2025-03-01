import React from "react";
import "./ChatBox.css";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";

export default function ChatBox() {
  return (
    <MDBContainer
      className="py-5"
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: " center",
      }}
    >
      <MDBCard style={{width:"70%"}}>
        <MDBCardHeader>Welcome to Top Car</MDBCardHeader>
        <MDBCardBody>
          <p>You can contact us regarding any problem or inquiry by leaving a message here and we will reply to you as soon as possible.</p>
        </MDBCardBody>
        <MDBCardFooter>
          <MDBInputGroup>
            <input
              className="form-control"
              placeholder="Enter text"
              type="text"
            />
            <MDBBtn color="primary">Send</MDBBtn>
          </MDBInputGroup>
        </MDBCardFooter>
      </MDBCard>
    </MDBContainer>
  );
}
