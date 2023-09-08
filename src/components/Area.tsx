import Map from "./Map";

export default function Area(){

    return (
        <>
        <section className=" flex flex-col gap-9 justify-center content-center pt-10 pb-10 bg-[#111827] w-[100vw]">

        <h1 className="text-4xl sm:text-5xl  mx-auto text-[#f2f2f2]">Service Area</h1>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center my-auto">
            <h1 className="text-3xl sm:text-4xl m-auto text-center text-[#f2f2f2] max-w-lg ">Servicing Kitchener, waterloo Kitchener, waterloo Kitchener, waterloo Kitchener, waterloo</h1>
            <div className="flex md:w-1/2 overflow-hidden rounded-lg">
                <Map/>
            </div>
        </div>

        </section>
        
        </>
    )
}