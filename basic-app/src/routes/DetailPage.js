// Semantics
// List, Paragraph, Heading
// Page layout using header, navbar
// UI Control with keyboard
// Tables
// Text alternatives in images
// Links

// Follow this https://www.petco.com/shop/en/petcostore/category/buy-online-pick-up-in-store-products
// https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML
// https://www.w3.org/WAI/tutorials/menus/application-menus-code/

import "./DetailPage.css";

export default function DetailPage() {
  return (
    <>
      <header>
        <p class="promotion-bar">
          {" "}
          15% OFF on $50+.{" "}
          <a href="https://www.mozilla.org">
            Click here to know more about the offer
          </a>{" "}
        </p>
      </header>

      {/* <nav role="menubar">
        <ul>
          <li></li>

        </ul>
      </nav> */}

      {/* <Navbar className="blue-bg">
        <Container fluid={true}>
          <Row className="width-100">
            <Col>
              <Navbar.Brand className="nav-title">petco</Navbar.Brand>
            </Col>
            <Col xs={7}>
              <InputGroup className="mb-7">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </Navbar> */}
    </>
  );
}
