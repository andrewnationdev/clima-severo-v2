import { IWeatherData } from '@/types/types';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, CartesianGrid } from 'recharts';

interface IWeatherChartProps {
    data: IWeatherData;
}

export default function WeatherChart({ data }: IWeatherChartProps) {
    const chartData = data.list.slice(0, 8).map(item => ({
        time: new Date(item.dt * 1000).toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
        }),
        temp: Math.round(item.main.temp),
    }));

    return (
        <div className="h-[250px] w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[30px] p-4 mt-2">
            <ResponsiveContainer>
                <AreaChart data={chartData}>
                    <defs>
                        <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <XAxis
                        dataKey="time"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'rgb(255, 255, 255)', fontSize: 12 }}
                        dy={10}
                    />

                    <YAxis domain={['dataMin - 5', 'dataMax + 5']} tick={{ fill: 'rgb(255, 255, 255)', fontSize: 12 }} />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            borderRadius: '15px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)'
                        }}
                        itemStyle={{ color: '#fff' }}
                        labelStyle={{ display: 'none' }}
                    />

                    <Area
                        type="monotone"
                        dataKey="temp"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorTemp)"
                        style={{
                            filter: "drop-shadow(0px 0px 8px rgba(59, 130, 246, 0.8))"
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}