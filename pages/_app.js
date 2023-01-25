import { useEffect } from 'react';
import '../styles/globals.css'
import {deleteCookie } from 'cookies-next';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    deleteCookie('totileTime');
   const jssStyles = document.querySelector('#jss-server-side');
   if(jssStyles){
    jssStyles.parentElement.removeChild(jssStyles);
   }
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
