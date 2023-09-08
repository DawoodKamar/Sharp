import Area from "@/components/Area";
import Map from "@/components/Map";



export default function ServiceArea() {
    return (
        <div className="h-[80vh] flex flex-col">
            <h1 className="text-5xl mx-auto pt-10">
                Service area
            </h1>
            <div className="mx-auto flex py-5 w-full md:w-1/2 overflow-hidden rounded-lg">
                <Map/>
            </div>
            <p className="text-xl max-w-6xl mx-auto p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quia
             dolorem quaerat ab magnam nisi expedita porro neque. Quos doloremque dicta nemo est adipisci, 
             commodi molestiae aliquam sed nisi repellendus 
            ad, error facilis repellat dolor non vitae eos perferendis modi, itaque porro! Praesentium
             et libero iure est impedit esse mollitia.</p>
        </div>
    )
}