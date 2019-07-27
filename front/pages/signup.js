import React, { useState, useCallback } from 'react'
import { Form, Input, Checkbox, Button } from 'antd'

// useCallback 자식컴포넌트에 넘기는 함수는 유즈콜백으로 감싸준다

//커스텀 훅
export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue)
    const handler = useCallback((e) => {
        setter(e.target.value)
    }, []);
    return [value, handler]
}

const Signup = () => {
    const [id, setId] = useState('')
    const [nick, setNick] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [term, setTerm] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [termError, setTermError] = useState(false)

    const onSubmit = useCallback((e) => {
        e.preventDefault()
        if (password !== passwordCheck) {
            return setPasswordError(true)
        }
        if (!term) {
            return setTermError(true)
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
        })
    })
    const onChangeId = useCallback((e) => {
        setId(e.target.value)
    }, [id])
    const onChangeNick = (e) => {
        setNick(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangePasswordChk = (e) => {
        setPasswordError(e.target.value !== password)
        setPasswordCheck(e.target.value)
    }
    const onChangeTerm = (e) => {
        setTermError(false)
        setTerm(e.target.checked)
    }

    return (
        <>
            <Form onSubmit={onSubmit} style={{ padding: 10 }}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="user-Nick">닉네임</label>
                    <br />
                    <Input name="user-Nick" value={nick} required onChange={onChangeNick} />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk} />
                    {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다</div>}
                </div>
                <div>
                    <Checkbox name="user-term" value={term} onChange={onChangeTerm}>약관에 동의합니다</Checkbox>
                    {termError && <div style={{ color: 'red' }}>약관에 동의해주세요</div>}
                </div>
                <div>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </>
    )
}

export default Signup
