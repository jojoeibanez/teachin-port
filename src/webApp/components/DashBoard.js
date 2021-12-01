import React, { useState } from "react";
import MasterPage from '../MasterPage'
import { Form, Row, Col, Lable, Button, Popconfirm } from 'antd';
import Axios from "axios";
import { useHistory } from "react-router-dom";
import {
    QuestionCircleOutlined
} from '@ant-design/icons';
function DashBoard() {
    const history = useHistory()

    const [state, setState] = useState();
    const [wage, setWage] = useState(0);
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [employeeList, setEmployeeList] = useState([]);

    const addEmployee = () => {
        Axios.post('http://localhost:5000/create', {
            name: name,
            lastname: lastname,
            password: password,
            age: age,
            country: country,
            position: position,
            wage: wage
        }).then(() => {
            setEmployeeList([
                ...employeeList,
                {
                    name: name,
                    lastname: lastname,
                    password: password,
                    age: age,
                    country: country,
                    position: position,
                    wage: wage
                }
            ])
        })
    }

    return (
        <MasterPage>
            <div style={{
                fontSize: "30px",
                textDecoration: "Underline",
                padding: "0 0 10px 20px ",
                margin: "0 0 0 0"
            }}>
                <h5>Add Information</h5>
            </div>
            <div style={{ padding: "0 0 0 0 ", margin: "0 0 0 0" }}>

                <Row gutter={[32, 16]}>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <Row style={{ padding: "0 0 0 0 ", margin: "0 0 0 0" }}>
                            <Form>
                                <Col>
                                    <lable style={{ fontSize: "20px" }}>
                                        Name :
                                    </lable>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter name"
                                        style={{ width: "500px", height: "30px", padding: "20px", margin: "10px 0 0 0", border: "1.5px solid" }}

                                        onChange={(event) => {
                                            setName(event.target.value)
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <lable style={{ fontSize: "20px" }}>
                                        Lastname :
                                    </lable>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Lastname"
                                        style={{ width: "500px", height: "30px", padding: "20px", margin: "10px 0 0 0", border: "1.5px solid" }}

                                        onChange={(event) => {
                                            setLastname(event.target.value)
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <lable style={{ fontSize: "20px" }}>
                                        Password :
                                    </lable>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        style={{ width: "500px", height: "30px", padding: "20px", margin: "10px 0 0 0", border: "1.5px solid" }}

                                        onChange={(event) => {
                                            setPassword(event.target.value)
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <lable style={{ fontSize: "20px" }}>
                                        Age :
                                    </lable>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter age"
                                        style={{ width: "500px", height: "30px", padding: "20px", margin: "10px 0 0 0", border: "1.5px solid" }}

                                        onChange={(event) => {
                                            setAge(event.target.value)
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <lable style={{ fontSize: "20px" }}>
                                        Country :
                                    </lable>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter country"
                                        style={{ width: "500px", height: "30px", padding: "20px", margin: "10px 0 0 0", border: "1.5px solid" }}

                                        onChange={(event) => {
                                            setCountry(event.target.value)
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <lable style={{ fontSize: "20px" }}>
                                        Position :
                                    </lable>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter position"
                                        style={{ width: "500px", height: "30px", padding: "20px", margin: "10px 0 0 0", border: "1.5px solid" }}

                                        onChange={(event) => {
                                            setPosition(event.target.value)
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <lable style={{ fontSize: "20px" }}>
                                        Wage :
                                    </lable>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter wage"
                                        style={{ width: "500px", height: "30px", padding: "20px", margin: "10px 0 10px 0", border: "1.5px solid" }}

                                        onChange={(event) => {
                                            setWage(event.target.value)
                                        }}
                                    />
                                </Col>
                            </Form>
                        </Row>
                        <Popconfirm title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}  >
                            <Button type="primary" onClick={(() => {
                                addEmployee()
                                history.push({ pathname: "/WebApp/Information" });
                            })}
                                style={{
                                    padding: "0 0 0 0 ",
                                    margin: "20px 0 0 0",
                                    width: "500px",
                                    height: "50px",
                                    border: "2px solid Black",
                                    // backgroundColor: 'lightgray'
                                }} >Add information
                            </Button>
                        </Popconfirm>
                    </Col>
                </Row>

            </div>
        </MasterPage>
    )
}

export default DashBoard
