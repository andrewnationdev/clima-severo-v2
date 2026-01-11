import { Sun } from 'lucide-react';

export default function MainForecastComponent() {
    return <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-10 flex flex-col justify-between min-h-[400px]">
        <div>
            <h1 className="text-4xl font-light">Atheria</h1>
            <p className="text-white/70">Segunda, 5 de Jan</p>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
                <Sun size={80} className="text-yellow-400 drop-shadow-xl" />
                <div>
                    <span className="text-8xl font-bold tracking-tighter">18°C</span>
                    <p className="text-2xl text-white/80 ml-1">Parcialmente Nublado</p>
                </div>
            </div>
        </div>

        <div className="flex justify-between border-t border-white/10 pt-6 text-white/60">
            <span>Min: 12°C  Max: 21°C</span>
            <span>Sensação: 17°C</span>
        </div>
    </div>

}