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
  Table,
  Badge,
} from "reactstrap";
// core components
import BlankHeader from "components/Headers/BlankHeader.js";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import BASE_URL from "config.js";
import axios from "axios";

const SecurityDetail = () => {
  const { SecurityId } = useParams();

  const ENDPOINT_URL = `1/security/getSecurity/${SecurityId}`;
  const [securityDetailData, setSecurityDetailData] = useState([]);
  const [securityData, updateSecurityData] = useState({});

  useEffect(() => {
    const securityDetailList = async () => {
      await axios.get(`${BASE_URL}/${ENDPOINT_URL}`).then((response) => {
        setSecurityDetailData(response.data);
      });
    };
    securityDetailList();
  }, []);

  const handleSubmit = (e) => {
    for (const element of e.target) {
      if (element.name == "coupon" || element.name == "faceValue") {
        securityData[element.name] = parseInt(element.value);
      }
    }
    console.log(securityData);
    e.preventDefault();
    let UPDATE_ENDPOINT_URL = `1/security/update/${SecurityId}/`;
    const updateSecurity = async () => {
      await axios
        .put(`${BASE_URL}/${UPDATE_ENDPOINT_URL}`, securityData)
        .then((response) => window.location.reload(false));
    };
    updateSecurity();
    console.log(securityData);
  };

  const [tradesData, setTradesData] = useState([]);
  const TRADE_ENDPOINT_URL = `${localStorage.getItem("userId")}/security/${SecurityId}/trades`;

  useEffect(() => {
    const tradesList = async () => {
      await axios.get(`${BASE_URL}/${TRADE_ENDPOINT_URL}`).then((response) => {
        setTradesData(response.data);
        console.log(response.data);
      });
    };
    tradesList();
  }, []);

  const history = useHistory();
  const onTradeClick = useCallback(
    (TradeId) => history.push(`/admin/trade/${TradeId}`),
    [history]
  );

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
                <Form onSubmit={handleSubmit}>
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
                            defaultValue={SecurityId}
                            id="securityID"
                            placeholder="ID"
                            type="number"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="isin">
                            ISIN
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={securityDetailData.isin}
                            id="isin"
                            placeholder="ISIN"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="cusip">
                            CUSIP
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={securityDetailData.cusip}
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
                            defaultValue={securityDetailData.issuerName}
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
                            defaultValue={securityDetailData.maturityDate}
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
                            defaultValue={securityDetailData.coupon}
                            id="Coupon"
                            name="coupon"
                            placeholder="Coupon"
                            type="number"
                            // onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="type">
                            Type
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={securityDetailData.securityType}
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
                            defaultValue={securityDetailData.faceValue}
                            id="faceValue"
                            name="faceValue"
                            placeholder="Face Value"
                            type="number"
                            // onChange={handleChange}
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
                            value={
                              securityDetailData.securityStatus == 1
                                ? "Valid"
                                : "Invalid"
                            }
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
                    <Button className="my-4" color="default" type="Submit">
                      Update
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="order-xl-1">
            <Card
              className="bg-default shadow"
              style={{ marginBottom: "25px" }}
            >
              <CardHeader className="bg-transparent border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="text-white mb-0">
                      Trades in Security {SecurityId}
                    </h3>
                  </div>
                </Row>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Book ID</th>
                    <th scope="col">Counterparty ID</th>
                    <th scope="col">Security ID</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Status</th>
                    <th scope="col">Price</th>
                    <th scope="col">Buy/Sell</th>
                    <th scope="col">Trade Date</th>
                    <th scope="col">Settlement Date</th>
                  </tr>
                </thead>
                <tbody>
                  {tradesData.map((item, i) => {
                    return (
                      <tr
                        style={{ cursor: "pointer" }}
                        onClick={() => onTradeClick(item.tradeId)}
                        key={item.tradeId}
                      >
                        <td>{item.tradeId}</td>
                        <td>{item.bookId}</td>
                        <td>{item.counterpartyId}</td>
                        <td>{item.securityId}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            <i
                              className={
                                item.tradeStatus ? "bg-success" : "bg-danger"
                              }
                            />
                            {item.tradeStatus ? "Valid" : "Invalid"}
                          </Badge>
                        </td>
                        <td>${item.price}</td>
                        <td>{item.buy_Sell ? "Buy" : "Sell"}</td>
                        <td>{item.tradeDate}</td>
                        <td>{item.settlementDate}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SecurityDetail;
