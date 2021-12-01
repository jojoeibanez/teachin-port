import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Statistic, Button, Popconfirm } from 'antd'
import MasterPage from '../MasterPage'
import Axios from "axios";

import {
    ArrowDownOutlined,
    ArrowUpOutlined
} from '@ant-design/icons';
import Table from 'rc-table/lib/Table';
function Information() {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);

    const [loading, setLoading] = useState(false);

    const [employeeList, setEmployeeList] = useState([]);
    const getEmployees = () => {
        Axios.get('http://localhost:5000/employees')

            .then((response) => {
                setEmployeeList(response.data)
            });
    };

    const deleteEmployee = (id) => {
        Axios.delete(`http://localhost:5000/delete/${id}`).then((response) => {
            setEmployeeList(
                employeeList.filter((val) => {
                    return val.id !== id;
                })
            )
        })
    }
    const [newWage, setNewWage] = useState(0);
    const updateEmployeeWage = (id) => {
        Axios.put("http://localhost:5000/updateWage", { wage: newWage, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((val) => {
                        return val.id === id ? {
                            id: val.id,
                            name: val.name,
                            lastname: val.lastname,
                            password: val.password,
                            country: val.country,
                            age: val.age,
                            position: val.position,
                            wage: newWage,
                        }
                            : val;
                    })
                );
            }
        );
    };
    const [newPassword, setNewPassword] = useState("");
    const updateEmployeePassword = (id) => {
        Axios.put("http://localhost:5000/updatePassword", { password: newPassword, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((val) => {
                        return val.id === id ? {
                            id: val.id,
                            name: val.name,
                            lastname: val.lastname,
                            country: val.country,
                            age: val.age,
                            position: val.position,
                            wage: val.wage,
                            password: newPassword,

                        }
                            : val;
                    })
                );
            }
        );
    };

    useEffect(() => {
        getEmployees();
    }, [])

    return (
        <MasterPage>
            <Row style={{ padding: "0 0 0 0", margin: "20px 0 0 -16.5px" }} gutter={32, 32}>
                <Col>
                    <Button type="primary" onClick={() => {

                        setTimeout(() => {
                            setLoading(true);
                            getEmployees();

                        }, 1000)
                        setLoading(false);
                    }}>
                        Show Data
                    </Button>
                </Col>
            </Row>
            <Row style={{ padding: "0 0 0 0", margin: "20px 0 0 -16.5px" }} gutter={32, 32}>
                <Col span={24}>
                    <Card>
                        {employeeList.map((val, key) => {
                            return (
                                <div>
                                    <hr />
                                    <p className="card-text">Name: {val.name}</p>
                                    <p className="card-text">Lastname: {val.lastname}</p>
                                    <p className="card-text">Password: {val.password}</p>
                                    <p className="card-text">Age: {val.age}</p>
                                    <p className="card-text">Country: {val.country}</p>
                                    <p className="card-text">Position: {val.position}</p>
                                    <p className="card-text">Wage: {val.wage}</p>

                                    <input type="number" className="form-control" placeholder="Edit wage.." onChange={(event) => { setNewWage(event.target.value) }} />
                                    <button onClick={() => { updateEmployeeWage(val.id); getEmployees(); }} style={{ width: "150px", height: "", padding: "0 0 0 0", margin: "0 10px 0 0" }}>Change Wage</button>

                                    <input type="text" className="form-control" placeholder="Edit password.." onChange={(event) => { setNewPassword(event.target.value) }} />
                                    <button onClick={() => { updateEmployeePassword(val.id); getEmployees(); }} style={{ width: "150px", height: "", padding: "0 0 0 0", margin: "0 10px 0 0" }}>Change Password</button>

                                    <button onClick={() => { deleteEmployee(val.id) }} style={{ width: "150px", height: "", padding: "0 0 0 0", margin: "0 0 0 0" }}>Delete</button>
                                </div>
                            )
                        })}
                        <hr />
                    </Card>
                </Col>
            </Row>
        </MasterPage>
    )
}

export default Information
