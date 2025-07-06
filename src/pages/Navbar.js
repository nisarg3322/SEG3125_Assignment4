import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Form, Button, Badge } from "react-bootstrap";
import { BsCart, BsCartFill } from "react-icons/bs";
import { useCart } from "../CartContext";

function NavbarComp() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = searchTerm.trim();

    if (trimmed.length > 0) {
      navigate(`/Shop?query=${encodeURIComponent(trimmed)}`);
    } else {
      navigate("/Shop"); // Show all products
    }
  };

  return (
    <Navbar style={{ backgroundColor: "#1DDAF7" }} expand="lg">
      <Container>
        <Navbar.Brand style={{ fontFamily: "Roboto Mono" }} as={Link} to="/">
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
          </Nav>

          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              type="submit"
              style={{
                backgroundColor: "#FFFFFF",
                color: "black",
                border: "none",
              }}
            >
              Search
            </Button>
          </Form>

          <Nav.Link
            as={Link}
            to="/Cart"
            className="p-2"
            style={{ position: "relative" }}
          >
            {cartCount > 0 ? (
              <>
                <BsCartFill size={24} style={{ marginLeft: "15px" }} />
                <Badge
                  bg="danger"
                  pill
                  style={{ position: "absolute", top: 0, right: 0 }}
                >
                  {cartCount}
                </Badge>
              </>
            ) : (
              <BsCart size={24} style={{ marginLeft: "15px" }} />
            )}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
