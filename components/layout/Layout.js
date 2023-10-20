import styles from "./Layout.module.css";

import Head from "next/head";

import Navigation from "../Navbar";

function Layout(props) {
    return (
        <>
            <Head>
                <title> Nightcapp </title>
                <link href="Home.module.css" rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Vibur:400"
                    rel="stylesheet"
                    type="text/css"
                ></link>
            </Head>
            <Navigation />
            <main className={styles.main}>
                {props.children}
            </main>
        </>
    );
};

export default Layout;