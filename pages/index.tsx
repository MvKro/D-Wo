import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dwo from '../assets/images/dwo.png'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import {Service} from "@/components/Service";
import {Pricing} from "@/components/Pricing";
import {Team} from "@/components/Team";
import {Contact} from "@/components/Contact";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <Hero/>
      </main>
        <Service></Service>
        <Pricing></Pricing>
        <Team></Team>
        <Contact></Contact>
      <Footer/>
    </div>
  )
}

export default Home
