import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import LandingPage from "../src/LandingPage";
import { getCookie, setCookie,deleteCookie } from 'cookies-next';
import { useEffect } from "react";
export default function Home() {
  // deleteCookie('totileTime');

  return (
    <Layout>
      <div>
         <LandingPage/>
      </div>
    </Layout>
  );
}
