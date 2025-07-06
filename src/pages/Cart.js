import { useCart } from "../CartContext";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import NavbarComp from "./Navbar";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  const handleCheckout = () => {
    clearCart();
    navigate("/Survey");
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavbarComp />
        <Container className="mt-4">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <Row>
                <Col md={8}>
                  <Row>
                    {cart.map((item, idx) => (
                      <Col key={item.name} md={6} className="mb-4">
                        <Card>
                          <Card.Img
                            variant="top"
                            src={item.image}
                            style={{ height: "200px", objectFit: "contain" }}
                          />
                          <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>Price: {item.price}</Card.Text>
                            <Card.Text>Quantity: {item.quantity}</Card.Text>
                            <Card.Text>
                              Subtotal: $
                              {(
                                parseFloat(item.price.replace("$", "")) *
                                item.quantity
                              ).toFixed(2)}
                            </Card.Text>
                            <Button
                              variant="danger"
                              onClick={() => removeFromCart(item.name)}
                            >
                              Remove
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <h4>Total: ${total.toFixed(2)}</h4>
                    <div>
                      <Button
                        variant="secondary"
                        onClick={clearCart}
                        className="me-2"
                      >
                        Clear Cart
                      </Button>
                      <Button variant="success" onClick={handleCheckout}>
                        Checkout
                      </Button>
                    </div>
                  </div>
                </Col>

                <Col md={4}>
                  <div>
                    <label>Name:</label>
                    <br />
                    <input type="text" name="name" />
                  </div>

                  <div>
                    <label>Phone:</label>
                    <br />
                    <input type="tel" name="phone" />
                  </div>
                  <div>
                    <label>Address:</label>
                    <br />
                    <input type="text" name="location" />
                  </div>

                  <div>
                    <label>Card Number:</label>
                    <br />
                    <input type="text" name="Card" />
                  </div>

                  <div>
                    <label>Expiration date:</label>
                    <br />
                    <input type="text" name="Expire" />
                  </div>

                  <div>
                    <label>Security code:</label>
                    <br />
                    <input type="text" name="Code" />
                  </div>
                </Col>
              </Row>
            </>
          )}
        </Container>
        <footer></footer>
      </header>
    </div>
  );
}

export default Cart;
