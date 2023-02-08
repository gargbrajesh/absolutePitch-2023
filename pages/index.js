import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import LandingPage from "../src/LandingPage";
import { useEffect, useRef } from "react";
import HomePage from "../src/Home";
import cat from '../public/cat.gif';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import videoUrl from '../video/homePageVideo.mp4'

export default function Home() {
  // deleteCookie('totileTime');
  const ref = useRef();
  return (
    <Layout>
      {/* <Parallax pages={7} ref={ref}>
        <ParallaxLayer offset={0}  speed={1}
          factor={2}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer> */}
       

        {/* <ParallaxLayer
         offset={1}
         speed={1}
         factor={4}>
          <div className="animation_layer parallax" id="artback"></div> */}
          {/* <div>
            <LandingPage />
          </div> */}


        {/* </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0.1, end: 3.5 }} style={{ textAlign: 'center' }}>
         <Image src={cat} alt='..'/>
        </ParallaxLayer>
      </Parallax> */}

      <div>
            <LandingPage />
          </div>
    </Layout>
  );
}
