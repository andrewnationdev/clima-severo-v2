import { IMenu } from '@/types/types';
import { ThermometerSun, Search, Clock } from 'lucide-react';
import { useState } from 'react';

export default function MenuComponent(props: IMenu) {
  const [showGraph, setShowGraph] = useState<boolean>(false);
  const [showHourForecast, setShowHourForecast] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  return <nav className="md:col-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 flex md:flex-col items-center justify-between md:justify-center gap-8">
    <div title="Busca por Cidade"
      className={`p-3 ${showSearch ? 'bg-blue-500/50' : 'hover:bg-white/10'} rounded-full cursor-pointer`}
      onClick={() => {
        props.toggleShowSearch(!showSearch);
        showSearch ? setShowSearch(false) : setShowSearch(true);
      }}
    ><Search size={24} /></div>

    <div title="Previsão por Hora"
      className={`p-3 ${showHourForecast ? 'bg-blue-500/50' : 'hover:bg-white/10'} rounded-full cursor-pointer transition-colors`}
      onClick={() => {
        props.toggleHourForecast(!showHourForecast);

        showHourForecast ? setShowHourForecast(false) : setShowHourForecast(true)
      }}
    ><Clock size={24} /></div>

    <div title="Gráfico de Temperatura" className={`p-3 ${showGraph ? 'bg-blue-500/50' : 'hover:bg-white/10'} rounded-full cursor-pointer transition-colors`} onClick={() => {
      props.toggleGraph(!showGraph);

      showGraph ? setShowGraph(false) : setShowGraph(true);
    }}><ThermometerSun size={24} /></div>
  </nav>
}