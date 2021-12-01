import React from 'react'
import MasterPage from '../MasterPage'
import { Col, Image, Row, Card, Statistic } from 'antd'
import {
    ArrowDownOutlined,
    ArrowUpOutlined
} from '@ant-design/icons';

function HomePage() {
    return (
        <MasterPage>
            <Row gutter={32, 32}>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Idle"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>

        </MasterPage>
    )
}

export default HomePage
