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
            <p className="text-xl max-w-6xl mx-auto p-5">Servicing the 401 corridor, Cambridge, Kitchener, Waterloo, Milton, Missisauga, Brampton, GTA, and GHA Areas</p>
        </div>
    )
}