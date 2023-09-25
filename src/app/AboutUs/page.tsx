import ContactForm from "@/components/ContactForm";
import styles from "../../styles/aboutus.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className={styles.About}>
  <div className={styles.container}>
    {/* First column */}
    <div className={styles.column1}>
      {/* Row 1 */}
      <div className={styles.row1}>
        {/* Heading */}
        <div className={styles.heading}>
          <h2>Who We Are:</h2>
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <hr />
        </div>
        {/* Text */}
        <div className={styles.text}>
          <p>
            At Sharp Truck Trailer Repair inc, we understand that truck trailer breakdowns can happen anytime, anywhere and when they do, you need a trusted partner by your side. We're a team of dedicated mobile truck trailer mechanics with a passion for getting our clients back on the road.
          </p>
        </div>
      </div>
<br></br>
      {/* Row 2 */}
      <div className={styles.row2}>
        {/* Heading */}
        <div className={styles.heading}>
          <h3>Our Experience:</h3>
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <hr />
        </div>
        {/* Text */}
        <div className={styles.text}>
          <p>
            With over 20 years in the industry, we've honed our skills and amassed extensive hands-on experience. Our technicians are not only licensed and insured but also trained to handle an array of issues, ensuring that we can tackle any challenge your truck or trailer might face.
          </p>
        </div>
      </div>
    </div>

    {/* Second column */}
    <div className={styles.column2}>
      {/* Image */}
      <div className={styles.image}>
        <Image
          src="/images/working2.jpg"
          alt="dk-services mechanic"
          width={1677}
          height={2126}
        />
      </div>
    </div>
  </div>

  {/* -----------------------------------Section 2-------------------------------------------------- */}

  <div className={styles.container}>
    {/* First column */}
    <div className={styles.column1}>
      {/* Heading */}
      <div className={styles.heading}>
        <h3>Why Choose Us:</h3>
      </div>

      {/* Divider */}
      <div className={styles.divider}>
        <hr />
      </div>
      {/* Text */}
      <div className={styles.text}>
        <p>
          Rapid Response: Our mobile units are always ready to address your needs, minimizing your downtime and ensuring you can proceed with your journey.
          Customer-Centric: We pride ourselves on our friendly and knowledgeable service. For us, it's not just about fixing trucks and trailers; it's about building lasting relationships with our clients.
          Servicing Leaders: We've had the privilege of servicing some of North America's largest fleets, attesting to our expertise and trustworthiness in the field.
        </p>
      </div>
    </div>

    {/* Second column */}
    <div className={styles.column2}>
      {/* Heading */}
      <div className={styles.heading}>
        <h3>Our Commitment & Looking Forward:</h3>
      </div>

      {/* Divider */}
      <div className={styles.divider}>
        <hr />
      </div>
      {/* Text */}
      <div className={styles.text}>
        <p>
          Safety, integrity, and excellence drive us. Every job we undertake is a testament to our commitment to ensuring that our clients receive top-tier service, every time.
          As the logistics and transportation sectors evolve, so do we. We continuously invest in the latest tools and training, ensuring that our team is always at the forefront of industry innovations.
          Contact us today and discover why Sharp Truck Trailer Repair is the preferred choice for mobile truck trailer repairs and services.
        </p>
      </div>
    </div>
  </div>
  <ContactForm/>
</div>
  );
}