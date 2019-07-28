import React, { useCallback } from 'react'
import Link from 'next/link'
import { Input, Button, Form } from 'antd'
import { useInput } from '../pages/signup'
import { useDispatch } from 'react-redux'
import { loginAction } from '../reducers/user'

const LoginForm = () => {
    const [id, onChangeId] = useInput()
    const [password, onChangePassword] = useInput()
    const dispatch = useDispatch()

    const onSubmitForm = useCallback((e) => {
        e.preventDefault()
        dispatch(loginAction)
    })

    return (
        <>
            <Form onSubmit={onSubmitForm} style={{padding: 15}}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} onChange={onChangeId} required />
                </div>
                <div>
                    <label htmlFor="user-id">비밀번호</label>
                    <br />
                    <Input name="user-password" value={password} onChange={onChangePassword} required type="password" />
                </div>
                <div style={{marginTop:10}}>
                    <Button type="primary" htmlType="submit" loading={false} style={{margin: '0 10px 0 0'}}>로그인</Button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </div>
            </Form>
        </>
    )
}

export default LoginForm
