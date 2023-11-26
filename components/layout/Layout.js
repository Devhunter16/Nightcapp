<<<<<<< HEAD:components/layout/Layout.js
import styles from "./Layout.module.css";

import Head from "next/head";

import Navigation from "../nav/Navbar";
import Footer from "../footer/Footer";

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
            <div className={styles.container}>
                <Navigation />
                <main className={styles.main}>
                    {props.children}
                </main>
                <Footer />
            </div>
        </>
    );
};

=======
import styles from "./Layout.module.css";

import Head from "next/head";

import Navigation from "../nav/Navbar";
import Footer from "../footer/Footer";

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
            <div className={styles.container}>
                <Navigation />
                <main className={styles.main}>
                    {props.children}
                </main>
                <Footer />
            </div>
        </>
    );
};

>>>>>>> eac428d767425a31ea2db2ef92ed2570640408f7:components/Layout.js
export default Layout;