import { IWeatherData } from '@/types/types';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

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

    const chartHeight = Math.max(140, chartData.length * 34);

    return (
        <div
            role="region"
            aria-label="Gráfico de temperatura nas próximas horas"
            aria-describedby="temp-chart-desc"
            className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[30px] p-3 mt-2 motion-safe:animate-fade-in min-h-[140px]"
        >
            <span id="temp-chart-desc" className="sr-only">Gráfico mostrando a temperatura prevista nas próximas horas em graus Celsius</span>
            <ResponsiveContainer width="100%" height={chartHeight}>
                <AreaChart data={chartData} margin={{ top: 10, right: 18, left: 0, bottom: 8 }}>
                    <defs>
                        <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.36} />
                            <stop offset="65%" stopColor="#06b6d4" stopOpacity={0.12} />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <XAxis
                        dataKey="time"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'rgb(255, 255, 255)', fontSize: 11 }}
                        dy={8}
                        interval={'preserveStartEnd'}
                        angle={-20}
                        textAnchor="end"
                        minTickGap={6}
                    />

                    <YAxis
                        domain={['dataMin - 5', 'dataMax + 5']}
                        tick={{ fill: 'rgb(255, 255, 255)', fontSize: 11 }}
                        axisLine={false}
                        tickCount={5}
                        width={36}
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            borderRadius: '15px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)'
                        }}
                        itemStyle={{ color: '#fff' }}
                        labelStyle={{ color: '#fff', fontSize: 12 }}
                        //@ts-ignore
                        formatter={(value: number) => [`${value!}°C`, 'Temperatura']}
                        labelFormatter={(label: string) => label}
                    />

                    <Area
                        type="monotone"
                        dataKey="temp"
                        stroke="#06b6d4"
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#colorTemp)"
                        dot={{ r: 3, stroke: '#06b6d4', strokeWidth: 1.5, fill: '#fff' }}
                        activeDot={{ r: 6, stroke: '#0891b2', strokeWidth: 2, fill: '#fff' }}
                        style={{
                            filter: "drop-shadow(0px 6px 18px rgba(6,182,212,0.14))",
                            transition: 'all 200ms ease'
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}