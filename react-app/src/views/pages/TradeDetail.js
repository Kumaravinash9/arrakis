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

const TradeDetail = () => {
  const { trade_id } = useParams();
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
                    <h3 className="mb-0">Trade {trade_id}</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">Details</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="tradeID"
                          >
                            ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="tradeID"
                            placeholder="ID"
                            type="number"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="bookID"
                          >
                            Book ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="bookID"
                            placeholder="Book ID"
                            type="number"
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
                            htmlFor="counterpartyID"
                          >
                            Counterparty ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="counterpartyID"
                            placeholder="Counterparty ID"
                            type="number"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="securityID"
                          >
                            Security ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="securityID"
                            placeholder="Security ID"
                            type="number"
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
                            htmlFor="quantity"
                          >
                            Quantity
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="quantity"
                            placeholder="Quantity"
                            type="number"
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
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="price">
                            Price
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="price"
                            placeholder="Price"
                            type="number"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="buy_sell"
                          >
                            Buy/Sell
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Buy"
                            id="buy_sell"
                            placeholder="Buy/Sell"
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
                            htmlFor="tradeDate"
                          >
                            Trade Date
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="01-01-2000"
                            id="tradeDate"
                            placeholder="Trade Date"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="setllementDate"
                          >
                            Setllement Date
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="01-01-2000"
                            id="setllementDate"
                            placeholder="Setllement Date"
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

export default TradeDetail;
