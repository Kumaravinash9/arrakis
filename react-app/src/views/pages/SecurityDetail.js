import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import BlankHeader from "components/Headers/BlankHeader.js";
import { useParams } from "react-router-dom";

const SecurityDetail = () => {
  const { SecurityId } = useParams();
  return (
    <>
      <BlankHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Security {SecurityId}</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">Details</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="securityID"
                          >
                            ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="securityID"
                            placeholder="ID"
                            type="number"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="isin"
                          >
                            ISIN
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="IN0000000000"
                            id="isin"
                            placeholder="ISIN"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="cusip"
                          >
                            CUSIP
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="000000000"
                            id="cusip"
                            placeholder="CUSIP"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="issuer"
                          >
                            Issuer
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="ABC"
                            id="issuer"
                            placeholder="Issuer"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="maturityDate"
                          >
                            Maturity Date
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="01-01-2000"
                            id="maturityDate"
                            placeholder="Maturity Date"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="coupon"
                          >
                            Coupon
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="Coupon"
                            placeholder="coupon"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="type"
                          >
                            Type
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="type"
                            placeholder="Type"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="faceValue"
                          >
                            Face Value
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1000"
                            id="faceValue"
                            placeholder="Face Value"
                            type="number"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="status"
                          >
                            Status
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="status"
                            placeholder="Status"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="text-center">
                    <Button className="my-4" color="default" type="button">
                      Update
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SecurityDetail;
