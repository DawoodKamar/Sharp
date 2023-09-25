
import Link from "next/link";
import styles from "../styles/footer.module.css";
import { Yellowtail } from '@next/font/google'

const yellowtail = Yellowtail({
  subsets: ['latin'],
  weight: '400',
})


export default function Footer() {
  return (
    <div className={styles.footerbg}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Link href="/" className={styles.logo}>
            {" "}
           <h2 className= {yellowtail.className}>Sharp Truck Trailer Repair</h2>
          </Link>
        </div>
        <div className={styles.line}></div>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link className={styles.link} href="/">Home</Link>
            </li>
            <div className={styles.lines}></div>
            <li>
              <Link className={styles.link} href="/AboutUs">About Us</Link>
            </li>
            <div className={styles.lines}></div>
            <li>
              <Link className={styles.link} href="/ContactUs">Contact</Link>
            </li>
            <div className={styles.lines}></div>
            <li>
              <Link className={styles.link} href="/ServiceArea">Service Area</Link>
            </li>
            <div className={styles.lines}></div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
