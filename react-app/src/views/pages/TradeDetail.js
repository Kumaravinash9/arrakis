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
import { useState, useEffect } from "react";
import BASE_URL from "config.js";
import axios from "axios";

const TradeDetail = () => {
  const { TradeId } = useParams();
  const [tradeDetailData, setTradeDetailData] = useState([]);
  const ENDPOINT_URL = `${1}/trades/getTrade/${TradeId}`;
  
  const [tradeData, updateTradeData] = useState({});

  useEffect(() => {
    const tradeDetailList = async () => {
      await axios
        .get(`${BASE_URL}/${ENDPOINT_URL}`)
        .then((response) => setTradeDetailData(response.data));
    };
    tradeDetailList();
  }, []);

  const handleChange = (e) => {
    updateTradeData({
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    console.log(tradeData);
    let UPDATE_ENDPOINT_URL = `1/trades/update/${TradeId}/`;
    const updateTrade = async () => {
      await axios
        .put(`${BASE_URL}/${UPDATE_ENDPOINT_URL}`, tradeData)
        .then((response) => window.location.reload(false));
    };
    updateTrade();
    console.log(tradeData);
  };

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
                    <h3 className="mb-0">Trade {TradeId}</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <h6 className="heading-small text-muted mb-4">Details</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="TradeID"
                          >
                            ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="TradeID"
                            placeholder="ID"
                            type="number"
                            value={tradeDetailData.TradeId}
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="BookID"
                          >
                            Book ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="BookID"
                            placeholder="Book ID"
                            type="number"
                            value={tradeDetailData.BookId}
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
                            htmlFor="CounterpartyID"
                          >
                            Counterparty ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="CounterpartyID"
                            placeholder="Counterparty ID"
                            type="number"
                            value={tradeDetailData.CounterpartyId}
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="SecurityID"
                          >
                            Security ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="SecurityID"
                            placeholder="Security ID"
                            value={tradeDetailData.SecurityId}
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
                            htmlFor="Quantity"
                          >
                            Quantity
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={tradeDetailData.Quantity}
                            id="Quantity"
                            name="quantity"
                            placeholder="Quantity"
                            onChange={handleChange}
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="Status"
                          >
                            Status
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="Status"
                            placeholder="Status"
                            value={tradeDetailData.Status ? "Valid" : "Invalid"}
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="Price">
                            Price
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1"
                            id="Price"
                            placeholder="Price"
                            value={"$"+tradeDetailData.Price}
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="Buy_Sell"
                          >
                            Buy/Sell
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Buy"
                            id="Buy_Sell"
                            placeholder="Buy/Sell"
                            value={tradeDetailData.Buy_Sell ? "Buy" : "Sell"}
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
                            htmlFor="TradeDate"
                          >
                            Trade Date
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="01-01-2000"
                            id="TradeDate"
                            placeholder="Trade Date"
                            value={tradeDetailData.TradeDate}
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="SetllementDate"
                          >
                            Setllement Date
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="01-01-2000"
                            id="SetllementDate"
                            placeholder="Setllement Date"
                            value={tradeDetailData.SettlementDate}
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="text-center">
                    <Button className="my-4" color="default" type="submit">
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
