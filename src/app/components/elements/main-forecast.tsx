import { IMainForecastProps, IWeatherData } from '@/types/types'; // Importe sua nova tipagem
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
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-10 flex flex-col justify-between min-h-[400px]">
            
            {props.showSearch && <form onSubmit={handleSubmit} className="mb-6">
                <div className="flex items-center gap-3">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Pesquisar cidade"
                        aria-label="Pesquisar cidade"
                        className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                    <button type="submit" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full">
                        <Search size={20}/>
                    </button>
                </div>
            </form>}

            <div>
                <h1 className="text-4xl font-light">{city.name}, {city.country}</h1>
                <p className="text-white/70 capitalize">{formattedDate}</p>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <ForecastIcon size={100} condition={current.weather[0].main}/>
                    <div>
                        <span className="text-4xl font-bold tracking-tighter">
                            {formattedTemperature(current.main.temp)}
                        </span>
                        <p className="text-2xl text-white/80 ml-1">
                            {current.weather[0].description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between border-t border-white/10 pt-6 text-white/60">
                <span>
                    Min: {formattedTemperature(current.main.temp_min)}  Max: {formattedTemperature(current.main.temp_max)}
                </span>
                <span>
                    Sensação: {formattedTemperature(current.main.feels_like)}
                </span>
            </div>
            <Footer/>
        </div>
    );
}