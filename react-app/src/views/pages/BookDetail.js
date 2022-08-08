import {
  Badge,
  Button,
  Card,
  CardHeader,
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
  Modal,
  CardBody,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ReactDatetime from "react-datetime";

const BookDetail = () => {
  const { book_id } = useParams();
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
                    <h3 className="text-white mb-0">
                      Trades in Book {book_id}
                    </h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="secondary"
                      type="button"
                      // onClick={() => console.log("Modal Opened")}
                      onClick={() => setFormModalIsOpen(true)}
                      size="sm"
                    >
                      Add Trade
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
                              Enter Trade Details
                            </div>
                            <Form role="form">
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-badge" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Counterparty ID"
                                    type="number"
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
                                    placeholder="Security ID"
                                    type="number"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-cart" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Quantity" type="number" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-money-coins" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Price" type="number" />
                                </InputGroup>
                              </FormGroup>
                              <Row className="align-items-center">
                                <div className="col">
                                  <div className="custom-control custom-radio mb-3">
                                    <input
                                      className="custom-control-input"
                                      id="buy_radio"
                                      name="buy_sell_radio"
                                      type="radio"
                                      defaultChecked
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="buy_radio"
                                    >
                                      Buy
                                    </label>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="custom-control custom-radio mb-3">
                                    <input
                                      className="custom-control-input"
                                      id="sell_radio"
                                      name="buy_sell_radio"
                                      type="radio"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="sell_radio"
                                    >
                                      Sell
                                    </label>
                                  </div>
                                </div>
                              </Row>
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
                  <tr
                    style={{ cursor: "pointer" }}
                    onClick={() => console.log("Clicked")}
                  >
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Valid
                      </Badge>
                    </td>
                    <td>$1000</td>
                    <td>Buy</td>
                    <td>01-01-2000</td>
                    <td>01-01-2000</td>
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

export default BookDetail;
