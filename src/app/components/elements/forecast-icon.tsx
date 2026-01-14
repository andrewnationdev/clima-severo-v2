import { IForecastProps } from "@/types/types";
import { CloudDrizzle, Cloud, CloudRain, CloudSnow, Sun } from "lucide-react";

export default function ForecastIcon(props:IForecastProps){
    switch(props.condition){
        case "Clear":
            return <Sun size={props.size} className="text-white-400 drop-shadow-xl" />
        case "Rain":
            return <CloudRain size={props.size} className="text-white-400 drop-shadow-xl" />
        case "Clouds":
            return <Cloud size={props.size} className="text-white-400 drop-shadow-xl" />
        case "Snow":
            return <CloudSnow size={props.size} className="text-white-200 drop-shadow-xl" />
        case "Drizzle":
            return <CloudDrizzle size={props.size} className="text-white-300 drop-shadow-xl" />
        default:
            return <Sun size={props.size} className="text-white-400 drop-shadow-xl" />
    }
}