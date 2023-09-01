import styles from "../styles/services.module.css";


export default function Services(){

    return (
        <>
        <section className=" flex flex-col gap-9 justify-center content-center pt-10 pb-10">

        <h1 className="text-4xl sm:text-5xl  mx-auto">Types of Services</h1>

        <div className={`${styles.parent} content-center`}>
<div className={`${styles.div2}`}>Service </div>
<div className={`${styles.div1}`}>Service </div>
<div className={`${styles.div3}`}>Service </div>
<div className={`${styles.div4}`}>Service </div>
<div className={`${styles.div5}`}> Service</div>
<div className={`${styles.div6}`}> Service</div>
<div className={`${styles.div7}`}>Service </div>
<div className={`${styles.div8}`}> Service</div>
<div className={`${styles.div9}`}> Service</div>
<div className={`${styles.div10}`}>Service </div>
<div className={`${styles.div11}`}>Service </div>
<div className={`${styles.div12}`}>Service </div>
</div>
        </section>
        
        </>
    )
}