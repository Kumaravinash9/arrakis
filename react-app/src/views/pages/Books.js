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
import DataTable from "react-data-table-component";
import data from "./sample_data/books.json";
import React, {useCallback} from 'react';
import { useHistory } from "react-router-dom";

const Books = () => {
  const history = useHistory();
  const onBookClick = useCallback((book_id) => history.push(`/admin/book/${book_id}`), [history]);
  // const onBookClick = useCallback((book_id) => navigate(`/admin/book/${book_id}`, {replace: true}), [navigate]);

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
                  {data.map((item, i) => {
                    return <tr
                      style={{ cursor: "pointer" }}
                      // onClick={() =>
                      //   console.log(`Clicked Book ${item.book_id}`)
                      // }
                      onClick={() =>
                        onBookClick(item.book_id)
                      }
                    >
                      <td>{item.book_id}</td>
                      <td>{item.book_name}</td>
                    </tr>;
                  })}
                  {/* <tr
                    style={{ cursor: "pointer" }}
                    onClick={() => console.log("Clicked")}
                  >
                    <td>1</td>
                    <td>Book_1</td>
                  </tr> */}
                </tbody>
              </Table>
            </Card>

            {/* <DataTable
                columns={columns}
                data={data}
                className="align-items-center table-dark table-flush"
                responsive
              /> */}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Books;
