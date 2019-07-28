import React from 'react'
import Link from 'next/link'
import { Menu, Input, Button, Row, Col } from 'antd'
import { useSelector } from 'react-redux'
import LoginForm from '../components/LoginForm'
import UserProfile from '../components/UserProfile'

// eslint-disable-next-line react/prop-types
const AppLayout = ({ children }) => { 
    const { isLoggedIn } = useSelector(state => state.user)
    return (
        <>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{  verticalAlign: 'middle' }} />
                </Menu.Item>
            </Menu>
            <Link href="/signup"><Button>회원가입</Button></Link>
            <Row>
                <Col xs={24} md={8}>
                    {isLoggedIn
                        ?<UserProfile />
                        :<LoginForm />
                    }
                </Col>
                <Col xs={24} md={8}>2</Col>
                <Col xs={24} md={8}>3</Col>
            </Row>
            { children }
        </>
    )
}

export default AppLayout
