import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Modal,
  InputGroupText,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,
} from "reactstrap";
import DateTime from "react-datetime";
// core components
import Header from "components/Headers/Header.js";
import React, { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import BASE_URL from "config";

const initialFormData = Object.freeze({
  ISIN: "",
  CUSIP: "",
  IssuerName: "",
  MaturityDate: "",
  Coupon: 0,
  SecurityType: "",
  FaceValue: 0,
});

const Securities = () => {
  const history = useHistory();
  const onSecurityClick = useCallback(
    (SecurityId) => history.push(`/admin/security/${SecurityId}`),
    [history]
  );

  const [securityData, setSecurityData] = useState([]);
  const ENDPOINT_URL = `1/security/getAll`;

  useEffect(() => {
    const securityList = async () => {
      await axios.get(`${BASE_URL}/${ENDPOINT_URL}`).then((response) => {
        setSecurityData(response.data);
        console.log(response.data);
      });
    };
    securityList();
  }, []);

  const [formModalIsOpen, setFormModalIsOpen] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // ... submit to API or something
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Dark table */}
        <Row className="mt-5">
          <div className="col">
            <Card
              className="bg-default shadow"
              style={{ marginBottom: "25px" }}
            >
              <CardHeader className="bg-transparent border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="text-white mb-0">Securities</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="secondary"
                      type="button"
                      // onClick={() => console.log("Modal Opened")}
                      onClick={() => setFormModalIsOpen(true)}
                      size="sm"
                    >
                      Add Security
                    </Button>
                    <Modal
                      className="modal-dialog-centered"
                      size="sm"
                      isOpen={formModalIsOpen}
                      toggle={() => setFormModalIsOpen(false)}
                    >
                      <div className="modal-body p-0">
                        <Card className="bg-secondary shadow border-0">
                          <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                              Enter Security Details
                            </div>
                            <Form role="form" onSubmit={handleSubmit}>
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-folder-17" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="ISIN"
                                    type="text"
                                    name="ISIN"
                                    id="ISIN"
                                    onChange={handleChange}
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-folder-17" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="CUSIP"
                                    type="text"
                                    name="CUSIP"
                                    id="CUSIP"
                                    onChange={handleChange}
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-badge" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="IssuerName"
                                    type="text"
                                    name="IssuerName"
                                    id="IssuerName"
                                    onChange={handleChange}
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-calendar-grid-58" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Maturity Date"
                                    type="text"
                                    name="MaturityDate"
                                    id="MaturityDate"
                                    onChange={handleChange}
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-money-coins" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Coupon"
                                    type="number"
                                    name="Coupon"
                                    id="Coupon"
                                    onChange={handleChange}
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-tag" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    type="select"
                                    name="SecurityType"
                                    id="SecurityType"
                                    onChange={handleChange}
                                  >
                                    <option disabled>Select Type</option>
                                    <option>Government</option>
                                    <option>Corporate</option>
                                    <option>Agency</option>
                                    <option>Municipal</option>
                                  </Input>
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-money-coins" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Face Value"
                                    type="number"
                                    name="FaceValue"
                                    id="FaceValue"
                                    onChange={handleChange}
                                  />
                                </InputGroup>
                              </FormGroup>
                              <div className="text-center">
                                <Button
                                  className="my-4"
                                  color="default"
                                  type="submit"
                                >
                                  Submit
                                </Button>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                      </div>
                    </Modal>
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
                    <th scope="col">ISIN</th>
                    <th scope="col">CUSIP</th>
                    <th scope="col">Issuer</th>
                    <th scope="col">Maturity Date</th>
                    <th scope="col">Coupon</th>
                    <th scope="col">Type</th>
                    <th scope="col">Face Value</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {securityData.map((item, i) => {
                    return (
                      <tr
                        style={{ cursor: "pointer" }}
                        onClick={() => onSecurityClick(item.securityId)}
                        key={item.securityId}
                      >
                        <td>{item.securityId}</td>
                        <td>{item.isin}</td>
                        <td>{item.cusip}</td>
                        <td>{item.issuerName}</td>
                        <td>{item.maturityDate}</td>
                        <td>{item.coupon}</td>
                        <td>{item.securityType}</td>
                        <td>${item.faceValue}</td>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            <i
                              className={
                                item.securityStatus ? "bg-success" : "bg-danger"
                              }
                            />
                            {item.securityStatus ? "Valid" : "Invalid"}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Securities;
