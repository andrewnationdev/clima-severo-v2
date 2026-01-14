import { IHourForecastProps } from '@/types/types';
import { Sun } from 'lucide-react';
import ForecastIcon from './forecast-icon';

export default function HourForecastComponent(props: IHourForecastProps) {
    if (!props.data || !props.data.list) {
        return <div className="text-white">Carregando previsão...</div>;
    }

    const chartData = props!.data!.list.map(item => ({
        hour: new Date(item.dt * 1000).getHours() + "h",
        temp: Math.round(item.main.temp)
    }));

    console.log(props.data)

    return <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex justify-around items-center overflow-x-auto gap-4">
        {chartData.slice(0,6).map((item) => (
            <div key={item.hour} className={`flex flex-col items-center p-3 rounded-2xl ${item.hour === "10h" ? 'bg-blue-500/40 border border-white/30' : ''}`}>
                <span className="text-sm opacity-70">{item.hour}</span>
                <ForecastIcon size={30} condition={props!.data!.list[0]!.weather[0]!.main}/>
                <span className="font-semibold">{item.temp}°</span>
            </div>
        ))}
    </div>
}