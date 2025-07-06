import "../App.css";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/Shop?category=${category}`);
  };
  return (
    <div className="Home">
      <header className="App-header">
        <NavbarComp />
        <Container>
          <Row className="mt-4">
            <Col
              className=" intro-service d-flex flex-column justify-content-center"
              sm={6}
            >
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "",
                  borderRadius: "25px",
                  width: "500px",
                }}
                className=" justify-content-center"
              >
                <p
                  className="intro-service p-2"
                  style={{
                    color: "white",
                    fontSize: "50px",
                    backgroundColor: "#27667B",
                    borderRadius: "25px",
                    textAlign: "center",
                  }}
                >
                  Shop our newest technology now!
                </p>
                <p>
                  Electro has a variety of electronics that you can buy. We
                  offer the newest and highest quality electronics.
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <Card>
                <div style={{ position: "relative" }}>
                  <Card.Img variant="top" src="/HOMEelectronics.jpg" />

                  <Button
                    as={Link}
                    to="/Shop"
                    style={{
                      backgroundColor: "#1DDAF7",
                      color: "black",
                      border: "none",
                      position: "absolute",
                      bottom: "10px",
                      left: "85%",
                    }}
                  >
                    Shop
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <div className="text-center m-5">
            <h2>Our Products</h2>
          </div>
          <Row className=" justify-content-center">
            <Col className="d-flex justify-content-center " md={4}>
              <Card style={{ width: "300px", backgroundColor: "#27667B" }}>
                <Card.Body className="card-border">
                  <Card.Title style={{ color: "white", fontSize: "30px" }}>
                    Phones
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="/Iphone15.jpg"
                    style={{ height: "300px", objectFit: "contain" }}
                  />
                  <Card.Text style={{ color: "white" }}>
                    Shop our most recent phone models!
                  </Card.Text>
                  <Button
                    onClick={() => handleClick("phone")}
                    style={{
                      backgroundColor: "#1DDAF7",
                      border: "0px",
                      color: "black",
                    }}
                  >
                    Shop Phones
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="d-flex justify-content-center " md={4}>
              <Card style={{ width: "300px", backgroundColor: "#27667B" }}>
                <Card.Body className="card-border">
                  <Card.Title style={{ color: "white", fontSize: "30px" }}>
                    Laptops
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="/Macbook.jpg"
                    style={{ height: "300px", objectFit: "contain" }}
                  />
                  <Card.Text style={{ color: "white" }}>
                    Shop our most powerful laptops!
                  </Card.Text>
                  <Button
                    onClick={() => handleClick("laptop")}
                    style={{
                      backgroundColor: "#1DDAF7",
                      border: "0px",
                      color: "black",
                    }}
                  >
                    Shop Laptops
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="d-flex justify-content-center " md={4}>
              <Card style={{ width: "300px", backgroundColor: "#27667B" }}>
                <Card.Body className="card-border">
                  <Card.Title style={{ color: "white", fontSize: "30px" }}>
                    Watches
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="/AppleWatch.jpg"
                    style={{ height: "300px", objectFit: "contain" }}
                  />
                  <Card.Text style={{ color: "white" }}>
                    Shop our most smart watches!
                  </Card.Text>
                  <Button
                    onClick={() => handleClick("watch")}
                    style={{
                      backgroundColor: "#1DDAF7",
                      border: "0px",
                      color: "black",
                    }}
                  >
                    Shop Watches
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <footer></footer>
      </header>
    </div>
  );
}

export default Home;
