import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import AppLayout from '../components/AppLayout'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'

// eslint-disable-next-line react/prop-types
const NodeBird = ({ Component, store }) => {
    return (
        <>
            <Provider store={store}>
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.5/antd.min.css" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.5/antd.min.js" />
                </Head>
                <AppLayout>
                    <Component />
                </AppLayout>
            </Provider>
        </>
    )
}

NodeBird.propTypes = {
   Component: PropTypes.elementType, 
}

export default withRedux((initialState, options) => {
    const middlewares = []
    const enhancer = compose(applyMiddleware(...middlewares),
    !options.isServer &&
    window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
    const store = createStore(reducer, initialState, enhancer)
    return store
})(NodeBird)
