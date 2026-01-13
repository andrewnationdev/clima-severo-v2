import { IForecastProps } from "@/types/types";
import { CloudDrizzle, Cloud, CloudRain, CloudSnow, Sun } from "lucide-react";

export default function ForecastIcon(props:IForecastProps){
    switch(props.condition){
        case "Clear":
            return <Sun size={80} className="text-yellow-400 drop-shadow-xl" />
        case "Rain":
            return <CloudRain size={80} className="text-blue-400 drop-shadow-xl" />
        case "Clouds":
            return <Cloud size={80} className="text-blue-400 drop-shadow-xl" />
        case "Snow":
            return <CloudSnow size={80} className="text-blue-200 drop-shadow-xl" />
        case "Drizzle":
            return <CloudDrizzle size={80} className="text-blue-300 drop-shadow-xl" />
        default:
            return <Sun size={80} className="text-yellow-400 drop-shadow-xl" />
    }
}