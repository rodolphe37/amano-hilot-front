// import React from 'react';
import App from 'next/app';
import 'react-responsive-modal/styles.css';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// Stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import config from 'react-reveal/globals';


config({ ssrFadeout: true });

const options = {
  position: 'top center',
  timeout: 3000,
  offset: '30px',
  transition: 'scale'
}

export default class MyApp extends App {

  // static async getInitialProps({ Component, router, ctx }) {
  //   let pageProps = {}

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }


  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps } = this.props

    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <div>
          <Component {...pageProps} />
        </div>
      </AlertProvider>
    )
  }
}

