import Link from "next/link";
import styles from '@/styles/Home.module.css'

export default function Navigation() {
    return (
      <nav>
        <ul className={styles.grid}>
            <li className={styles.nav}>
              <Link href="/posts/toshoData">Tosho Data</Link>
            </li>
            <li className={styles.nav}>
              <Link href="/posts/peshoData">Pesho Data</Link>
            </li>
            <li className={styles.nav}>
              <Link href="/posts/tomiData">Tomi Data</Link>
            </li>
          </ul>
      </nav>
    )
}