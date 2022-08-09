import axios from "axios";
import BASE_URL from "config";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Login = () => {
  const ENDPOINT_URL = `login`;

  const handleSubmit = (e) => {
    let loginData = {};
    for (const element of e.target) {
      if (element.name.length) loginData[element.name] = element.value;
    }

    const login = async () => {
      await axios
        .post(`${BASE_URL}/${ENDPOINT_URL}`, loginData)
        .then((response) => {
          if (response.status == 200) {
            localStorage.setItem("userId", response.data["userId"]);
            localStorage.setItem("name", response.data["name"]);
            localStorage.setItem("email", response.data["email"]);
            localStorage.setItem("role", response.data["role"]);
            window.location.reload(false);
          }
        })
        .catch((error) => {
          alert("Invalid Credentials!");
        });
    };
    login();
    e.preventDefault();
  };
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    name="email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    name="password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
