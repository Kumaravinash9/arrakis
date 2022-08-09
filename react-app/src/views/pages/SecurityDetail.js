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

  // const handleChange = (e) => {
  //   updateSecurityData({
  //     ...securityData,
  //     [e.target.name]: parseInt(e.target.value),
  //   });
  // };

  const handleSubmit = (e) => {
    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].name == "coupon" || e.target[i].name == "faceValue") {
        securityData[e.target[i].name] = parseInt(e.target[i].value);
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
      </Container>
    </>
  );
};

export default SecurityDetail;
