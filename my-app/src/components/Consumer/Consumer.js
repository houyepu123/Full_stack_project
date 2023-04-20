import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Consumer.css";
function Consumer() {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <h1>Clothing Form</h1>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control required name="firstName"/>
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control required name="lastName"/>
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control required name="phoneNumber"/>
            </Form.Group>
            <Form.Group controlId="emailAddress">
              <Form.Label>Email Address</Form.Label>
              <Form.Control required type="email" name="emailAddress"/>
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control required name="address"/>
            </Form.Group>
            <Form.Group controlId="postcode">
              <Form.Label>Postcode</Form.Label>
              <Form.Control required name="postcode"/>
            </Form.Group>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control required name="state"/>
            </Form.Group>
            <Form.Group controlId="clothingTypes">
              <Form.Label>Clothing Types</Form.Label>
              <div class="form-group">
                <select class="form-control" id="clothingType">
                    <option value="">Select Type</option>
                    <option value="Dress">Dress</option>
                    <option value="Ethnic Wear - Sari / Blouse">Ethnic Wear - Sari / Blouse</option>
                </select>
            </div>
            </Form.Group>
            <Form.Group controlId="images">
              <Form.Label>Images</Form.Label>
              <Form.Control type="file" name="images"/>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control required as="textarea" rows={3} name="description"/>
            </Form.Group>
            <Form.Group controlId="budget">
              <Form.Label>Budget (optional)</Form.Label>
              <Form.Control name="budget"/>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Consumer;