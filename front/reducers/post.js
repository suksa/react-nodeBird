export const initialState = {
    mainPosts: [{
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '제목입니다',
        img: 'https://www.mockupworld.co/wp-content/uploads/edd/2019/07/free-clay-style-smartphone-mockup-psd-1.jpg'
    }],
    imagePaths: []
}

const ADD_POST = 'ADD_POST'
const ADD_DUMMY = 'ADD_DUMMY'

const addPost = {
    type: ADD_POST
}

const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId: 1,
        User: {
            nickname: '제로초'
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state
            }
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts]
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer