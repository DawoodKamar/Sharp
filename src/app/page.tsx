import Services from "@/components/Services";
import styles from "../styles/home.module.css";
import Image from "next/image";
import Area from "@/components/Area";
import ContactForm from "@/components/ContactForm";



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
            <h1 className="text-center">Specializing in Mobile Onsite Truck Trailer Repair</h1>
          </div>
          <div className={styles.hook}>
            <p className="text-center">
              Commited to keeping your fleet on the road and minimizing down time
            </p>
          </div>
          <button className={styles.cta}>Call Now</button>
        </div>


      </section>

      <section className="flex items-center bg-gray-900 text-white py-10 w-full">
        <div className="container mx-auto flex items-center justify-between flex-col md:flex-row">
          <div className="w-3/5 relative">
          <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(transparent, #111827 72%)',
                mixBlendMode: 'normal',
              }}
            ></div>
            <Image
              src="/images/working.jpg"
              alt="mechanic working"
              width={1118}
              height={871}
              priority
            
            />
          </div>
          <div className="w-2/3 text-center md:text-left flex flex-col gap-7 pt-3 md:pl-10 md:pt-0">
            <div><h1 className="text-3xl mb-5 md:text-4xl">Experience</h1>
            <p >Servicing North America&apos;s Largest Fleets with Licensed, Insured Expertise – Friendly & Knowledgeable</p></div>
            <div><h1 className="text-3xl mb-5 md:text-4xl">Reliability</h1>
            <p>Reliable and affordable with over 20 years in business</p></div>
            {/* <div><h1 className="text-3xl mb-5 md:text-4xl">Dedication</h1>
            <p>Committed to getting your fleet back on the road safely and
                swiftly</p></div> */}
          </div>
        </div>
      </section>
      <Services/>
      <Area/>
      <ContactForm/>
    </main>
    </>
  )
}
