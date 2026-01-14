import { IDetailsPanelProps } from '@/types/types';
import { Wind, Droplets, Sun, Sunrise, Sunset } from 'lucide-react';

export default function DetailsPanelSection(props: IDetailsPanelProps) {
    if (!props.data || !props.data.list) {
        return <div className="text-white">Carregando previsão...</div>;
    }

    return <aside className="md:col-span-4 space-y-6">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 h-full space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Detalhes</h2>

            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl"><Wind size={20} /></div>
                    <div>
                        <p className="text-sm opacity-60">Vento</p>
                        <p className="font-medium">{props.data.list[0].wind.speed} km/h</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl"><Droplets size={20} /></div>
                    <div>
                        <p className="text-sm opacity-60">Umidade</p>
                        <p className="font-medium">{props.data.list[0].main.humidity}%</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl"><Sun size={20} /></div>
                    <div>
                        <p className="text-sm opacity-60">Índice UV</p>
                        <p className="font-medium">3 (Moderado)</p>
                    </div>
                </div>
            </div>

            <div className="pt-6 border-t border-white/10">
                <p className="text-sm opacity-60 mb-4">Tendência de Temperatura</p>
                <div className="h-32 w-full bg-gradient-to-t from-blue-500/20 to-transparent rounded-xl relative overflow-hidden">
                    <svg viewBox="0 0 100 40" className="absolute bottom-0 w-full h-full stroke-blue-400 fill-none stroke-2">
                        <path d="M0,35 Q25,10 50,25 T100,5" />
                    </svg>
                </div>
            </div>

            <div className="flex justify-between gap-4 pt-4">
                <div className="text-center">
                    <Sunrise size={20} className="mx-auto mb-1 opacity-60" />
                    <p className="text-xs">07:15</p>
                </div>
                <div className="text-center">
                    <Sunset size={20} className="mx-auto mb-1 opacity-60" />
                    <p className="text-xs">17:45</p>
                </div>
            </div>
        </div>
    </aside>
}