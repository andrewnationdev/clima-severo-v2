import { IHourForecastProps } from '@/types/types';
import ForecastIcon from './forecast-icon';
import { formattedTemperature } from '@/utils/temperature';

export default function HourForecastComponent(props: IHourForecastProps) {
    if (!props.data || !props.data.list) {
        return <div className="text-white" role="status" aria-live="polite">Carregando previsão...</div>;
    }

    const chartData = props!.data!.list.map(item => ({
        hour: new Date(item.dt * 1000).getHours() + "h",
        temp: Math.round(item.main.temp)
    }));

    console.debug('Dados de previsão por hora carregados', props.data)

    return (
        <div
            role="list"
            aria-label="Previsão por hora"
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex justify-around items-center overflow-x-auto gap-4 motion-safe:animate-fade-in"
        >
            {chartData.slice(0,6).map((item) => (
                <div
                    key={item.hour}
                    role="listitem"
                    tabIndex={0}
                    aria-label={`${item.hour}, ${item.temp} graus`}
                    className={`flex flex-col items-center p-3 rounded-2xl ${item.hour === "10h" ? 'bg-blue-500/40 border border-white/30' : ''} motion-safe:animate-fade-in`}
                >
                    <span className="text-sm opacity-70">{item.hour}</span>
                    <ForecastIcon size={30} condition={props!.data!.list[0]!.weather[0]!.main} aria-hidden="true"/>
                    <span className="font-semibold">{formattedTemperature(item.temp)}</span>
                </div>
            ))}
        </div>
    );
}