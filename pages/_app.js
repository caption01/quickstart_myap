import React from 'react';
import App from 'next/app';

import 'antd/dist/antd.css';

class Myapp extends App {

    static getInitialProps = async (appContext) => {
        const pageProps = await App.getInitialProps(appContext)
        return {...pageProps}
    }

    render(){

        const { Component, pageProps } = this.props

        return(
            <div>
                <Component {...pageProps} />
            </div>
        )
    }

}

export default Myapp