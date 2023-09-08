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
              <h2>Lorem, ipsum dolor sit amet consectetur adipisicing </h2>
            </div>

            {/* Divider */}
            <div className={styles.divider}>
              <hr />
            </div>
            {/* Text */}
            <div className={styles.text}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                A numquam quod nobis ex temporibus eaque, eveniet nesciunt optio
                 odio ratione, deserunt maiores ea voluptatem. Modi explicabo ducimus
                  necessitatibus minima eveniet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, blanditiis.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.row2}>
            {/* Heading */}
            <div className={styles.heading}>
              <h3 className="pt-5">Lorem ipsum dolor sit.</h3>
            </div>

            {/* Divider */}
            <div className={styles.divider}>
              <hr />
            </div>
            {/* Text */}
            <div className={styles.text}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur assumenda facere eum 
                minima adipisci aspernatur consectetur? Molestias, rerum perferendis. Alias itaque incidunt eveniet
                 molestias id in numquam perspiciatis accusamus excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos illo
                  veniam incidunt, repellat ipsa consequatur ducimus sequi esse voluptatibus reiciendis.
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
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>

          {/* Divider */}
          <div className={styles.divider}>
            <hr />
          </div>
          {/* Text */}
          <div className={styles.text}>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus animi veniam natus deserunt repudiandae soluta
            quaerat sint voluptatum similique et blanditiis amet rem vero quis hic, commodi, mollitia nostrum. Quisquam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolores culpa voluptate deleniti nemo in exercitationem,
             neque ut iusto veritatis sit. Quia libero delectus aliquid alias neque illo! Minima, at.
            </p>
          </div>
        </div>

        {/* Second column */}
        <div className={styles.column2}>
          {/* Heading */}
          <div className={styles.heading}>
            <h3>Lorem ipsum dolor sit.</h3>
          </div>

          {/* Divider */}
          <div className={styles.divider}>
            <hr />
          </div>
          {/* Text */}
          <div className={styles.text}>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi impedit at
             ad veritatis recusandae cumque animi et nemo fuga modi assumenda molestias pariatur,
              error necessitatibus facere non iure quos ex ab distinctio blanditiis ipsum. Ipsa expedita maxime
               sed sequi odit quisquam rem qui delectus, atque libero cupiditate quam, suscipit molestias deleniti 
               voluptas ullam perspiciatis neque, minus inventore provident nam iste tempore? Quos hic quis mollitia 
            </p>
          </div>
        </div>
      </div>
      <ContactForm/>
    </div>
  );
}
