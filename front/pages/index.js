import React from 'react'
import { Form, Input, Button, Card, Icon, Avatar } from 'antd'

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '제목입니다',
        img: 'https://www.mockupworld.co/wp-content/uploads/edd/2019/07/free-clay-style-smartphone-mockup-psd-1.jpg'
    }],
}

const Home = () => {
    return (
        <>
            <>
                {dummy.isLoggedIn && <Form style={{marginBottom: 20}} encType="multipart/form-data">
                    <Input.TextArea maxLength={140} placeholder="무슨일이 있었나요?" />
                    <div>
                        <input type="file" multiple hidden />
                        <Button>이미지 업로드</Button>
                        <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
                    </div>
                    <div>
                        {dummy.imagePaths.map((v, i) => {
                            return (
                                <div key={v} style={{ display: 'inline-block' }}>
                                    <img src={'http://localhost:3000/'+ v} style={{ width: '200px'}} alt={v} />
                                    <div>
                                        <Button>제거</Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Form>}
                {dummy.mainPosts.map((c) => {
                    return (
                        <Card
                            key={+c.createdAt}
                            cover={c.img && <img alt="example" src={c.img} />}
                            actions={[
                                <Icon type="retweet" key="retweet" />,
                                <Icon type="heart" key="heart" />,
                                <Icon type="message" key="message" />,
                                <Icon type="ellipsis" key="ellipsis" />,
                            ]}
                            extra={<Button>팔로우</Button>}
                            style={{margin: 15 }}
                        >
                            <Card.Meta
                                avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
                                title={c.User.nickname}
                                description={c.content}
                            />
                        </Card>
                    )
                })}
            </>
        </>
    )
}

export default Home