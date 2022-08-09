// Backend URL:
// Fetches list of all trades of a book

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

const initialFormData = Object.freeze({
  CounterpartyId: 0,
  SecurityId: 0,
  Quantity: 0,
  Price: 0,
  Buy_Sell: 0
});

const BookDetail = () => {
  const { BookId } = useParams();
  const [formModalIsOpen, setFormModalIsOpen] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
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
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="text-white mb-0">Trades in Book {BookId}</h3>
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
                            <Form
                              role="form"
                              onSubmit={handleSubmit}
                            >
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
                                    id="CounterpartyId"
                                    name="CounterpartyId"
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
                                    placeholder="Security ID"
                                    type="number"
                                    id="SecurityId"
                                    name="SecurityId"
                                    onChange={handleChange}
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
                                  <Input
                                    placeholder="Quantity"
                                    type="number"
                                    id="Quantity"
                                    name="Quantity"
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
                                    placeholder="Price"
                                    type="number"
                                    id="Price"
                                    name="Price"
                                    onChange={handleChange}
                                  />
                                </InputGroup>
                              </FormGroup>
                              <Row className="align-items-center">
                                <div className="col">
                                  <div className="custom-control custom-radio mb-3">
                                    <input
                                      className="custom-control-input"
                                      id="buy_radio"
                                      name="Buy_Sell"
                                      value={1}
                                      type="radio"
                                      onChange={handleChange}
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
                                      value={0}
                                      name="Buy_Sell"
                                      onChange={handleChange}
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
