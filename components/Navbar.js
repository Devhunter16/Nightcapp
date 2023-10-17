import styles from "./Navbar.module.css";

import Link from "next/link";

function Navigation() {
    return (
        <div className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/about" legacyBehavior>
                        About Us
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/">My Profile</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/">Favorites</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/">Log Out</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;