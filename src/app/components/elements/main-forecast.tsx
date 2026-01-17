import { IMainForecastProps } from '@/types/types';
import formattedTemperature from '@/utils/temperature';
import { useState } from 'react';
import ForecastIcon from './forecast-icon';
import { Search } from 'lucide-react';
import Footer from '../sections/footer';

export default function MainForecastComponent(props: IMainForecastProps) {
    const [query, setQuery] = useState('');

    if (!props.data || !props.data.list) {
        return <div className="text-white">Carregando previsão...</div>;
    }

    const current = props.data.list[0];
    const city = props.data.city;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        props.handleSearch(query);
    }

    const formattedDate = new Date(current!.dt * 1000).toLocaleDateString('pt-BR', {
        weekday: 'long',
        day: 'numeric',
        month: 'short'
    });

    return (
        <div className="group motion-safe:animate-fade-in motion-safe:animate-once motion-safe:animate-duration-400 motion-safe:animate-delay-0 motion-safe:animate-ease-in motion-reduce:animate-none bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-10 flex flex-col justify-between min-h-[400px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">

            {props.showSearch && <form onSubmit={handleSubmit} className="mb-6 motion-safe:animate-fade-in motion-safe:animate-duration-400 motion-safe:animate-delay-75 motion-reduce:animate-none">
                <div className="flex items-center gap-3">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Pesquisar cidade"
                        aria-label="Pesquisar cidade"
                        className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20 transition duration-200 ease-in-out focus:scale-105 motion-reduce:transform-none"
                    />
                    <button type="submit" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-transform duration-200 hover:scale-105">
                        <Search size={20} />
                    </button>
                </div>
            </form>}

            <div className="motion-safe:animate-fade-in motion-safe:animate-duration-500 motion-safe:animate-delay-150 motion-reduce:animate-none">
                <h1 className="text-4xl font-light leading-tight">{city.name}, {city.country}</h1>
                <p className="mb-8 text-white/70 capitalize motion-safe:animate-fade-in motion-safe:animate-duration-400 motion-safe:animate-delay-200">{formattedDate}</p>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="motion-safe:animate-bounce motion-safe:animate-duration-1000 motion-safe:animate-infinite motion-reduce:animate-none">
                        <ForecastIcon size={100} condition={current.weather[0].main} />
                    </div>
                    <div className="transition-transform duration-300">
                        <span className="motion-safe:animate-pulse motion-safe:animate-duration-1500 motion-safe:animate-delay-300 motion-reduce:animate-none text-4xl font-bold tracking-tighter transition-transform duration-300 group-hover:scale-105">
                            {formattedTemperature(current.main.temp)}
                        </span>
                        <p className="text-2xl text-white/80 ml-1 motion-safe:animate-fade-in motion-safe:animate-delay-350">{current.weather[0].description}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between border-t border-white/10 pt-6 text-white/60">
                <div className='flex flex-col gap-2'>
                    <span className="text-cyan-200 text-bold">
                        Min: {formattedTemperature(current.main.temp_min)}
                    </span>
                    <span className="text-red-300 text-bold">Max: {formattedTemperature(current.main.temp_max)}
                    </span>
                </div>
                <span>
                    Sensação: {formattedTemperature(current.main.feels_like)}
                </span>
            </div>
            <Footer />
        </div>
    );
}