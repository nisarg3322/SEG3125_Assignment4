import "../App.css";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarComp from "./Navbar";
import { useCart } from "../CartContext";

const products = [
  {
    category: "phone",
    name: "iPhone 15",
    price: "$1200",
    originalPrice: "$1200",
    salePrice: "$999",
    onSale: true,
    image: "/Iphone15.jpg",
  },
  { category: "phone", name: "S24", price: "$1100", image: "/SamsungS24.jpg" },
  { category: "phone", name: "Nokia", price: "$500", image: "/Nokia.jpg" },
  {
    category: "laptop",
    name: "Lenovo Laptop",
    price: "$1500",
    originalPrice: "$1500",
    salePrice: "$1299",
    onSale: true,
    image: "/LenovoLaptop.jpg",
  },
  {
    category: "laptop",
    name: "Macbook",
    price: "$1800",
    image: "/Macbook.jpg",
  },
  {
    category: "watch",
    name: "Apple Watch",
    price: "$300",
    image: "/AppleWatch.jpg",
  },
  {
    category: "watch",
    name: "Samsung Watch",
    price: "$400",
    image: "/SamsungWatch.jpg",
  },
];

function Shop() {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [saleFilter, setSaleFilter] = useState(false);

  const handleCategoryChange = (e) => {
    const value = e.target.value;

    if (selectedCategory === value) {
      // Unchecking the box
      setSelectedCategory("");
      navigate("/Shop"); // clear filter
    } else {
      setSelectedCategory(value);
      navigate(`/Shop?category=${value}`); // update URL
    }
  };

  const handleSaleFilter = (e) => {
    setSaleFilter(e.target.checked);
  };

  const { addToCart } = useCart();

  // Remove query from URL if empty
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get("category") || "";
    const keywordParam = queryParams.get("query") || "";

    setCategory(categoryParam.toLowerCase());
    setSearchKeyword(keywordParam.toLowerCase());

    if (!categoryParam && !keywordParam && location.search) {
      navigate("/Shop", { replace: true });
    }
  }, [location.search, navigate]);

  const filteredProducts =
    searchKeyword || category || saleFilter
      ? products.filter(
          (product) =>
            (searchKeyword &&
              product.name.toLowerCase().includes(searchKeyword)) ||
            (category && product.category === category) ||
            (saleFilter && product.onSale)
        )
      : products;

  return (
    <div className="App">
      <header className="App-header">
        <NavbarComp />

        <Container className="mt-1">
          <Row>
            <Col md={2}>
              <h3 className="mt-3">Products</h3>
              <Form>
                <Form.Check
                  type="checkbox"
                  label="Phones"
                  value="phone"
                  checked={selectedCategory === "phone"}
                  onChange={handleCategoryChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Laptops"
                  value="laptop"
                  checked={selectedCategory === "laptop"}
                  onChange={handleCategoryChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Watches"
                  value="watch"
                  checked={selectedCategory === "watch"}
                  onChange={handleCategoryChange}
                />
                <h3 className="mt-3">Price</h3>
                <Form.Check
                  type="checkbox"
                  label="On Sale"
                  checked={saleFilter}
                  onChange={handleSaleFilter}
                />
              </Form>
            </Col>

            <Col className="mt-4" md={10}>
              <Row>
                {filteredProducts.map((product, idx) => (
                  <Col key={idx} md={4} className="mb-4">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ height: "200px", objectFit: "contain" }}
                      />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        {product.onSale ? (
                          <div>
                            <Card.Text
                              style={{
                                textDecoration: "line-through",
                                color: "gray",
                              }}
                            >
                              {product.originalPrice}
                            </Card.Text>
                            <Card.Text
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "1.1em",
                              }}
                            >
                              {product.salePrice}
                            </Card.Text>
                          </div>
                        ) : (
                          <Card.Text>{product.price}</Card.Text>
                        )}
                        <Button
                          style={{
                            backgroundColor: "#1DDAF7",
                            border: "0px",
                            color: "black",
                          }}
                          onClick={() => addToCart(product)}
                        >
                          Add to cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>

        <footer></footer>
      </header>
    </div>
  );
}

export default Shop;
