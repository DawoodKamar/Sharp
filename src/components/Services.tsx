import styles from "../styles/services.module.css";


export default function Services(){

    return (
        <>
        <section className=" flex flex-col gap-9 justify-center content-center pt-10 pb-10">

        <h1 className="text-4xl text-[#111827] font-semibold sm:text-5xl  mx-auto">Types of Services</h1>

        <div className={`${styles.parent} content-center`}>
<div className={`${styles.div2}`}>Annual certification</div>
<div className={`${styles.div1}`}>PM service </div>
<div className={`${styles.div3}`}>Onsite yard repairs</div>
<div className={`${styles.div4}`}>Service calls </div>
<div className={`${styles.div5}`}> Brakes</div>
<div className={`${styles.div6}`}> ABS system</div>
<div className={`${styles.div7}`}> Lights </div>
<div className={`${styles.div8}`}> Fabricating and welding</div>
<div className={`${styles.div9}`}> Air Suspension</div>
<div className={`${styles.div10}`}>Interior and exterior body repairs </div>
<div className={`${styles.div11}`}>Landing gear </div>
<div className={`${styles.div12}`}>Floor and roof </div>
</div>
        </section>
        
        </>
    )
}