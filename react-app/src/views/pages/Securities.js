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
import ReactDatetime from "react-datetime";
// core components
import Header from "components/Headers/Header.js";
import { useState } from "react";

const Books = () => {
  const [formModalIsOpen, setFormModalIsOpen] = useState(false);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Dark table */}
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
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
                      size="md"
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
                            <Form role="form">
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-folder-17" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="ISIN" type="text" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-folder-17" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="CUSIP" type="text" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-badge" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Issuer" type="text" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-calendar-grid-58" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <ReactDatetime
                                    inputProps={{
                                      placeholder: "Maturity Date",
                                    }}
                                    timeFormat={false}
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
                                  <Input placeholder="Coupon" type="number" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-tag" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="select">
                                    <option disabled>
                                      Select Type
                                    </option>
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
                                  <Input placeholder="Face Value" type="number" />
                                </InputGroup>
                              </FormGroup>
                              <div className="text-center">
                                <Button
                                  className="my-4"
                                  color="default"
                                  type="button"
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
                  <tr
                    style={{ cursor: "pointer" }}
                    onClick={() => console.log("Clicked")}
                  >
                    <td>1</td>
                    <td>IN0000000000</td>
                    <td>000000000</td>
                    <td>XYZ</td>
                    <td>01-01-2000</td>
                    <td>1</td>
                    <td>Bond_Type</td>
                    <td>$1000</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-danger" />
                        Not Cleared
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Books;
