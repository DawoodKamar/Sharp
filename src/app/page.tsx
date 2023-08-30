import styles from "../styles/home.module.css";
import Image from "next/image";


export default function Home() {
  return (<>
    <main className="flex flex-col items-center justify-between" style={{overflow: "hidden"}}>
    <section className={`${styles.hero} ${styles.wrap}` }>
        
          <div className={styles.images}>
          <Image
            src="/images/12611_cc0640_014_gaz.png"
            alt="sharp service van"
            width={1200}
            height={803}
            className={styles.img2}
            priority
          />
        
          <Image
            src="/images/DuraPlate_HD.png"
            alt="dry van trailer"
            width={640}
            height={390}
            className={styles.img1}
            priority
          /></div>
        <div className={styles.heroSection}>
          <div className={styles.herohead}>
            <h1 >Lorem ipsum dolor, sit amet cons ectetur adipi sicing elit. </h1>
          </div>
          <div className={styles.hook}>
            <p>
              Lorem ips um, do lor sit amet cons ect etur ad ipis  icing elit.
               Tempo ribus aliquid quas labor iosam neque mol estias excepturi 
            </p>
          </div>
          <button className={styles.cta}>Call Now</button>
        </div>


      </section>

      <section className="flex items-center bg-gray-900 text-white py-20 w-full">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2 relative">
          <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(transparent, #111827 70%)',
                mixBlendMode: 'normal',
              }}
            ></div>
            <Image
              src="/images/working.jpg"
              alt="Your image description"
              width={1118}
              height={871}
              priority
            />
          </div>
          <div className="w-1/2 text-right">
            <h1 className="text-5xl mb-5">Your Heading</h1>
            <p>Your text here</p>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
