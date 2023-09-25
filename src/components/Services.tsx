import styles from "../styles/services.module.css";


export default function Services(){

    return (
        <>
        <section className=" flex flex-col gap-9 justify-center content-center pt-10 pb-10">

        <h1 className="text-4xl text-[#111827] font-semibold sm:text-5xl  mx-auto">Types of Services</h1>

        <div className={`${styles.parent} content-center`}>
        <div className={`${styles.div1} mt-auto`}><h2>Annual certification</h2></div>
        <div className={`${styles.div2}`}><h2>PM service</h2></div>
        <div className={`${styles.div3}`}><h2>Onsite yard repairs</h2></div>
        <div className={`${styles.div4}`}><h2>Service calls</h2></div>
        <div className={`${styles.div5}`}><h2>Brakes</h2></div> 
        <div className={`${styles.div6}`}><h2>ABS system</h2></div>
        <div className={`${styles.div7}`}><h2>Lights</h2></div>
        <div className={`${styles.div8}`}><h2>Fabricating and welding</h2></div>
        <div className={`${styles.div9}`}><h2>Air Suspension</h2></div>
        <div className={`${styles.div10} text-center`}><h2>Interior and exterior body repairs</h2></div>
        <div className={`${styles.div11}`}><h2>Landing gear</h2></div>
        <div className={`${styles.div12}`}><h2>Floor and roof</h2></div>

</div>
        </section>
        
        </>
    )
}