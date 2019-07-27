import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import AppLayout from '../components/AppLayout'

// eslint-disable-next-line react/prop-types
const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.5/antd.min.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.5/antd.min.js" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    )
}

NodeBird.propTypes = {
   Component: PropTypes.elementType, 
}

export default NodeBird
