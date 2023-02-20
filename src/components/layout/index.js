import Head from "next/head";
import React from "react";
import Footer from "../footer";
import Header from "../header";
import styles from "./layout.module.css";
import useResponsive from "@/hooks/useResponsive";
import Sidebar from "../sidebar";

function Layout({ children }) {
  const isMobile = useResponsive();
  return (
    <div className={styles.layoutContainer}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header>
        <Header />
      </header>
      <main className={styles.layoutContent}>
        {children}
        <Sidebar />
      </main>  
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
