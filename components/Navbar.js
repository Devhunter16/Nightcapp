import styles from "./Navbar.module.css";

import { useRouter } from "next/router";

import Link from "next/link";

function Navigation() {
    // Only using useRouter to make so that if the user is on the home screen "Home"
    // in the Navbar is highlighted, and the same happens on the "About us" page
    const router = useRouter();

    return (
        <div className={styles.nav}>
            <ul className={styles.navList}>
                <li className={`${styles.navItem} ${router.pathname === "/" ? styles.active : ""}`}>
                    <Link href="/">Home</Link>
                </li>
                <li className={`${styles.navItem} ${router.pathname === "/about" ? styles.active : ""}`}>
                    <Link href="/about">About Us</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;