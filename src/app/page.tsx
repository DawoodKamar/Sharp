import styles from "../styles/home.module.css";
import Image from "next/image";


export default function Home() {
  return (<>
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
    <section className={`${styles.hero} ${styles.wrap}` }>
        <div className={styles.heroSection}>
          <div className={styles.herohead}>
            <h1>Where Truck and Trailer Mechanics Meet Modern Management</h1>
          </div>
          <div className={styles.hook}>
            <p>
              Crafted by a mechanic, for mechanics. Dive into a system that
              understands your needs, prioritizes your tasks, and accelerates
              your service delivery.
            </p>
          </div>
          {/* <button className={styles.cta}>Call Now</button> */}
        </div>
        <div className={styles.images}>
          <Image
            src="/images/DuraPlate_HD.png"
            alt="dryvan"
            width={640}
            height={390}
            className={styles.img1}
          />
          <Image
            src="/images/12611_cc0640_014_gaz.png"
            alt="Reefer"
            width={1200}
            height={803}
            className={styles.img2}
          />
        </div>
      </section>
    </main>
    </>
  )
}
