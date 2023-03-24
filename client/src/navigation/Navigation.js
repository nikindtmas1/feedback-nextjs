import Link from "next/link";
import styles from '@/styles/Home.module.css'

export default function Navigation() {
    return (
      <nav>
        <ul className={styles.grid}>
            <li className={styles.nav}>
              <Link href="/api/hello">Go to</Link>
            </li>
            <li className={styles.nav}>
              <Link href="/posts/first-post">posts</Link>
            </li>
            <li className={styles.nav}>
              <Link href="/api/hello">Go to</Link>
            </li>
          </ul>
      </nav>
    )
}