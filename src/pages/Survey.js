import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Alert, Form, Button, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { BsCart } from "react-icons/bs";

function Survey() {
  const location = useLocation();
  const [showSurvey, setShowSurvey] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("showFeedback") === "true") {
      setShowSurvey(true);
    }
  }, [location.search]);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar style={{ backgroundColor: "#1DDAF7" }}>
          <Container>
            <Navbar.Brand style={{ fontFamily: "Roboto Mono" }} href="">
              Electro
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/Shop">
                  Shop
                </Nav.Link>

                <Nav.Link as={Link} to="/Survey">
                  Survey
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  as={Link}
                  to="/Shop"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "black",
                    border: "none",
                  }}
                >
                  Search
                </Button>
              </Form>
              <Nav.Link as={Link} to="/Cart" className="p-2">
                <BsCart size={24} style={{ marginLeft: "15px" }} />
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: "60vh" }}
        >
          {!showSurvey ? (
            <Alert
              style={{
                backgroundColor: "#27667B",
                color: "white",
                fontSize: "1.2rem",
                width: "400px",
                textAlign: "center",
                border: "none",
              }}
            >
              <strong>Thank you for your purchase!</strong>
              <br />
              Your order has been placed successfully.
              <br />
              <Button
                className="mt-3"
                style={{
                  backgroundColor: "#1DDAF7",
                  border: "0px",
                  color: "black",
                }}
                onClick={() => setShowSurvey(true)}
              >
                Leave Feedback
              </Button>
            </Alert>
          ) : (
            <Alert
              style={{
                backgroundColor: "#27667B",
                color: "white",
                fontSize: "1.2rem",
                width: "400px",
                textAlign: "center",
                border: "none",
              }}
            >
              <strong>How did we do today?</strong>
              <br />
              <Form.Group>
                <Form.Label style={{ border: "none" }}> </Form.Label>
                <Form.Control type="text" placeholder="Type here..." />
              </Form.Group>
              <Button
                className="mt-2"
                style={{
                  backgroundColor: "#1DDAF7",
                  border: "0px",
                  color: "black",
                }}
              >
                Submit
              </Button>
            </Alert>
          )}
        </Container>
      </header>
    </div>
  );
}

export default Survey;
