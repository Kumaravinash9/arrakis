// Backend URL: /{userId}/books/
// Fetches list of all books

import {
  Badge,
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
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import React, { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import BASE_URL from "config";

const Books = () => {
  const history = useHistory();
  const onBookClick = useCallback(
    (BookId) => history.push(`/admin/book/${BookId}`),
    [history]
  );
  const [bookData, setBookData] = useState([]);
  const ENDPOINT_URL = `${1}/books/`;
  
  useEffect(() => {
    const bookList = async () => {
      await axios.get(`${BASE_URL}/${ENDPOINT_URL}`).then(
        response => setBookData(response.data)
      )
    }
    bookList();
  }, []);


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
                <h3 className="text-white mb-0">Books</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Book ID</th>
                    <th scope="col">Book Name</th>
                  </tr>
                </thead>
                <tbody>
                  {bookData.map((item, i) => {
                    return (
                      <tr
                        style={{ cursor: "pointer" }}
                        onClick={() => onBookClick(item.BookId)}
                        key={item.BookId}
                      >
                        <td>{item.BookId}</td>
                        <td>{item.BookName}</td>
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

export default Books;
