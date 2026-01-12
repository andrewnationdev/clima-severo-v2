import { IHourForecastProps } from '@/types/types';
import { Sun } from 'lucide-react';

export default function HourForecastComponent(props:IHourForecastProps) {
    return <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex justify-around items-center overflow-x-auto gap-4">
        {[10, 11, 12, 13, 14, 15].map((hour) => (
            <div key={hour} className={`flex flex-col items-center p-3 rounded-2xl ${hour === 10 ? 'bg-blue-500/40 border border-white/30' : ''}`}>
                <span className="text-sm opacity-70">{hour}:00</span>
                <Sun size={20} className="my-2" />
                <span className="font-semibold">{17 + hour - 10}°</span>
            </div>
        ))}
    </div>
}