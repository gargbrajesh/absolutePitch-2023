
import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';
import './../styles/globals.css';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles =document.querySelector('#jss-server-side');
    if(jssStyles)
    {
     jssStyles.parentElement?.removeChild(jssStyles);
    }
   
   }, []);
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

