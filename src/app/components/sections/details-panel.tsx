import { IDetailsPanelProps } from '@/types/types';
import { Wind, Droplets, Sun, Sunrise, Sunset } from 'lucide-react';
import WeatherChart from '../elements/temp-chart';

export default function DetailsPanelSection(props: IDetailsPanelProps) {
    const formatTime = (unix: number) => {
        return new Date(unix * 1000).toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (!props.data || !props.data.list) {
        return <div className="text-white" role="status" aria-live="polite" title="Carregando previsão">Carregando previsão...</div>;
    }

    return <aside
		className="md:col-span-4 space-y-6"
		role="complementary"
		aria-label="Painel de detalhes do clima"
		title="Painel de detalhes do clima"
	>
        <div
			className="group motion-safe:animate-fade-in motion-safe:animate-once motion-safe:animate-duration-400 motion-safe:animate-delay-0 motion-safe:animate-ease-in motion-reduce:animate-none bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 h-full space-y-8"
			role="region"
			aria-labelledby="details-heading"
			aria-live="polite"
			aria-atomic="true"
			title="Detalhes"
		>
            <h2 id="details-heading" className="text-2xl font-semibold mb-6">Detalhes</h2>

            {!props.showGraph &&<div className="space-y-6" role="group" aria-label="Métricas do clima">
                <div className="flex items-center gap-4 motion-safe:animate-fade-in motion-safe:animate-duration-300" role="group" aria-label="Vento" title="Velocidade do vento">
                    <div className="p-3 bg-white/10 rounded-2xl" aria-hidden="true"><Wind size={20} /></div>
                    <div>
                        <p className="text-sm opacity-60">Vento</p>
                        <p className="font-medium" aria-label={`${props.data.list[0].wind.speed} quilômetros por hora`}>{props.data.list[0].wind.speed} km/h</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 motion-safe:animate-fade-in motion-safe:animate-duration-300 motion-safe:animate-delay-75" role="group" aria-label="Umidade" title="Umidade relativa do ar">
                    <div className="p-3 bg-white/10 rounded-2xl" aria-hidden="true"><Droplets size={20} /></div>
                    <div>
                        <p className="text-sm opacity-60">Umidade</p>
                        <p className="font-medium" aria-label={`${props.data.list[0].main.humidity} por cento`}>{props.data.list[0].main.humidity}%</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 motion-safe:animate-fade-in motion-safe:animate-duration-300 motion-safe:animate-delay-150" role="group" aria-label="Índice UV" title="Índice ultravioleta">
                    <div className="p-3 bg-white/10 rounded-2xl" aria-hidden="true"><Sun size={20} /></div>
                    <div>
                        <p className="text-sm opacity-60">Índice UV</p>
                        <p className="font-medium" aria-label="Índice ultravioleta 3, moderado">3 (Moderado)</p>
                    </div>
                </div>
            </div>}

            {props.showGraph && <div className="pt-6 border-t border-white/10" role="img" aria-label="Gráfico de temperatura" title="Gráfico de temperatura das próximas horas">
                <WeatherChart data={props.data} />
            </div>}

            <div className="flex justify-between gap-4 pt-4">
                <div className="text-center motion-safe:animate-fade-in" role="figure" tabIndex={0} aria-label={`Nascer do sol ${formatTime(props.data.city.sunrise)}`} aria-describedby="sunrise-time" title="Horário do nascer do sol">
                    <Sunrise size={20} className="mx-auto mb-1 opacity-60" aria-hidden="true" />
                    <p id="sunrise-time" className="text-xs" aria-hidden="false">{formatTime(props.data.city.sunrise)}</p>
                </div>
                <div className="text-center motion-safe:animate-fade-in motion-safe:animate-delay-75" role="figure" tabIndex={0} aria-label={`Pôr do sol ${formatTime(props.data.city.sunset)}`} aria-describedby="sunset-time" title="Horário do pôr do sol">
                    <Sunset size={20} className="mx-auto mb-1 opacity-60" aria-hidden="true" />
                    <p id="sunset-time" className="text-xs" aria-hidden="false">{formatTime(props.data.city.sunset)}</p>
                </div>
            </div>
        </div>
    </aside>
}