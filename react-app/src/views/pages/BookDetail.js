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
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import BASE_URL from "config.js";
import axios from "axios";

const initialFormData = Object.freeze({
  counterpartyId: 0,
  securityId: 0,
  quantity: 0,
  price: 0,
  buy_Sell: 1,
});

const BookDetail = () => {

  const history = useHistory();
  const onTradeClick = useCallback(
    (TradeId) => history.push(`/admin/trade/${TradeId}`),
    [history]
  );

  const { BookId } = useParams();
  const [formModalIsOpen, setFormModalIsOpen] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);

  const [bookDetailData, setBookDetailData] = useState([]);
  const ENDPOINT_URL = `${localStorage.getItem("userId")}/trades/${BookId}`;

  useEffect(() => {
    const bookDetailList = async () => {
      await axios
        .get(`${BASE_URL}/${ENDPOINT_URL}`)
        .then((response) => setBookDetailData(response.data));
    };
    bookDetailList();
  }, []);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    let CREATE_ENDPOINT_URL = `${localStorage.getItem("userId")}/trades/${BookId}/addtrade`
    e.preventDefault();
    console.log(formData);
    const addTrade = async () => {
      await axios
        .post(`${BASE_URL}/${CREATE_ENDPOINT_URL}`, formData)
        .then((response) => window.location.reload(false));
    };
    addTrade();
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
                            <Form role="form" onSubmit={handleSubmit}>
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
                                    name="counterpartyId"
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
                                    name="securityId"
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
                                    name="quantity"
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
                                    name="price"
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
                                      name="buy_Sell"
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
                                      name="buy_Sell"
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
                  {bookDetailData.map((item, i) => {
                    return (
                      <tr
                        style={{ cursor: "pointer" }}
                        onClick={() => onTradeClick(item.TradeId)}
                        key={item.TradeId}
                      >
                        <td>{item.TradeId}</td>
                        <td>{item.CounterpartyId}</td>
                        <td>{item.SecurityId}</td>
                        <td>{item.Quantity}</td>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            <i
                              className={
                                item.TradeStatus ? "bg-success" : "bg-danger"
                              }
                            />
                            {item.TradeStatus ? "Valid" : "Invalid"}
                          </Badge>
                        </td>
                        <td>${item.Price}</td>
                        <td>{item.Buy_Sell ? "Buy" : "Sell"}</td>
                        <td>{item.TradeDate}</td>
                        <td>{item.SettlementDate}</td>
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

export default BookDetail;
