import React from 'react'
import MasterPage from '../MasterPage'
import { FacebookOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import { Col, Row, Card, } from 'antd';

const { Meta } = Card;
function Contact() {
    return (

        <MasterPage>
            <>
                <Row gutter={[64, 32]} style={{ display: "flex", gap: "300px 100px", fontSize: "20px", fontFamily: '-moz-initial', margin: "0 0 0 0", padding: "0px 0px 20px 0px" }}>
                    <div style={{ border: "1px solid gray", margin: "0 0 0 0", padding: "20px 70px 100px 20px" }}>
                        <Col style={{ fontWeight: "bold", textDecoration: "underline", margin: "0 0 0 0", padding: "0px 0px 20px 0px" }}>Contact</Col>

                        <Col style={{ display: "flex", alignContent: "center" }}>
                            <Icon icon="ant-design:facebook-outlined" width="50" height="50" />
                            : Teachin Eaksuverapong
                            <Icon icon="akar-icons:link-on" width="20" height="20" style={{ cursor: "pointer" }} onClick={() => window.open('https://web.facebook.com/teachin.eaksuverapong/')} />
                        </Col>

                        <Col style={{ display: "flex", alignContent: "center" }}>
                            <Icon icon="fa-brands:instagram" width="50" height="50" />
                            : Instagram
                            <Icon icon="akar-icons:link-on" width="20" height="20" style={{ cursor: "pointer" }} onClick={() => window.open('https://www.instagram.com/')} />
                        </Col>

                        <Col style={{ display: "flex", alignContent: "center" }}>
                            <Icon icon="jam:twitter-square" width="50" height="50" />
                            : Twitter
                            <Icon icon="akar-icons:link-on" width="20" height="20" style={{ cursor: "pointer" }} onClick={() => window.open('https://twitter.com/?lang=en')} />
                        </Col>

                        <Col style={{ display: "flex", alignContent: "center" }}>
                            <Icon icon="bi:line" width="50" height="50" />
                            : Line
                            <Icon icon="akar-icons:link-on" width="20" height="20" style={{ cursor: "pointer" }} onClick={() => window.open('https://line.me/en/')} />
                        </Col>

                        <Col style={{ display: "flex", alignContent: "center" }}>
                            <Icon icon="carbon:logo-skype" width="50" height="50" />
                            : Skype
                            <Icon icon="akar-icons:link-on" width="20" height="20" style={{ cursor: "pointer" }} onClick={() => window.open('https://www.skype.com/en/')} />
                        </Col>
                        <Col style={{ display: "flex", alignContent: "center" }}>
                            <Icon icon="carbon:email" width="50" height="50" />
                            : teachin.eak@mail.kmutt.ac.th
                            <Icon icon="akar-icons:link-on" width="20" height="20" style={{ cursor: "pointer" }} onClick={() => window.open('https://www.kmutt.ac.th/en/')} />
                        </Col>
                        <Col style={{ display: "flex", alignContent: "center" }}>
                            <Icon icon="bi:github" width="50" height="50" />
                            : https://github.com/jojoeibanez
                            <Icon icon="akar-icons:link-on" width="20" height="20" style={{ cursor: "pointer" }} onClick={() => window.open('https://github.com/jojoeibanez')} />
                        </Col>
                        <Col style={{ display: "flex", alignContent: "center" }}>
                            <Icon icon="carbon:phone-incoming" width="50" height="50" />
                            : +66-86-884-2304
                        </Col>
                    </div>

                    <div style={{ border: "1px solid gray", margin: "0 0 0 0", padding: "20px 50px 70px 20px" }}>
                        <Col style={{ fontWeight: "bold", textDecoration: "underline", margin: "0 0 0 0", padding: "0px 0px 20px 0px" }}>Address</Col>

                        <Col style={{ display: "flex", alignContent: "center" }}>
                            <Icon icon="cil:address-book" width="50" height="50" />
                            : Address: 9 Thanyaburi <br /> District Pathum Thani <br /> City: Bangkok Condominium Projects Zip/Postal <br /> Code: 12130 Neighborhood: Pathum Thani <br />Country: Thailand
                        </Col>

                        <Col style={{ display: "flex", alignContent: "center" }}>
                            <Icon icon="zmdi:google-maps" width="50" height="50" />
                            : Find Me On Google Map Below
                        </Col>

                        <Col style={{ display: "flex", alignContent: "center", margin: "0 0 0 150px", textDecoration: "underline", cursor: "pointer" }} onClick={() => window.open('https://goo.gl/maps/Ln5NE8JSpTAhit8CA')}>
                            <Icon icon="mdi:google-maps" width="30" height="30" />
                            " Click Here "
                            <Icon icon="mdi:google-maps" width="30" height="30" />
                        </Col>

                        <Col style={{ display: "flex", justifyContent: "center", margin: "0 0 0 0", padding:"20px 0 0 25px", textDecoration: "underline", cursor: "pointer" }} onClick={() => window.open('https://goo.gl/maps/Ln5NE8JSpTAhit8CA')}>
                            <Card
                                hoverable
                                style={{ width: "230px", height: "100px" }}
                                cover={<img alt="example" src="https://www.belovetech.com/wp-content/uploads/2020/05/google-maps.jpg" />}
                            >
                            </Card>
                        </Col>
                    </div>
                </Row>
            </>
        </MasterPage>
    )
}

export default Contact
