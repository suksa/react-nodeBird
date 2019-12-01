const dummyUser = {
    nickname: '제로초',
    Post: [],
    Followings: [],
    Followers: [],
}

export const initialState = {
    isLoggedIn: false,      // 로그인 여부
    isLogginOut: false,     // 로그아웃 기도중
    isLogginIn: false,      // 로그인 시도중
    loginErrorReason: '',   // 로그인 실패 사유
    signedUp: false,        // 회원가입 성공
    isSigninUp: false,      // 회원가입 시도중
    signUpErrorReason: '',  // 회원가입 실패 사유
    me: null,               // 내정보
    followingList: [],      // 팔로잉 리스트
    followerList: [],       // 팔로워 리스트
    userInfo: null,         // 남의정보
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'

export const signUpAction = data => ({
    type: SIGN_UP_REQUEST,
    data,
})

export const signUpSuccess = {
    type: SIGN_UP_SUCCESS,
}

export const loginAction = data => ({
    type: LOG_IN_REQUEST,
    data,
})

export const logoutAction = {
    type: LOG_OUT_REQUEST
}

export const signUp = data => ({
    type: SIGN_UP_REQUEST,
    data: data
})

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                loginData: action.data,
                i: dummyUser
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        }
        case SIGN_UP: {
            return {
                ...state,
                signUpdata: action.data
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