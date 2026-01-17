import { IMenu } from '@/types/types';
import { ThermometerSun, Search, Clock } from 'lucide-react';
import { useState } from 'react';

export default function MenuComponent(props: IMenu) {
  const [showGraph, setShowGraph] = useState<boolean>(false);
  const [showHourForecast, setShowHourForecast] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  return (
    <nav
      role="toolbar"
      aria-label="Controles do aplicativo"
      className="md:col-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 flex md:flex-col items-center justify-between md:justify-center gap-8"
    >
      <div
        role="button"
        tabIndex={0}
        aria-pressed={showSearch}
        title="Busca por Cidade"
        aria-label="Buscar cidade"
        className={`p-3 ${showSearch ? 'bg-blue-500/50' : 'hover:bg-white/10'} rounded-full cursor-pointer motion-safe:animate-fade-in`}
        onClick={() => {
          props.toggleShowSearch(!showSearch);
          showSearch ? setShowSearch(false) : setShowSearch(true);
        }}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); props.toggleShowSearch(!showSearch); setShowSearch(!showSearch); } }}
      >
        <Search size={24} aria-hidden="true" />
      </div>

      <div
        role="button"
        tabIndex={0}
        aria-pressed={showHourForecast}
        title="Previsão por Hora"
        aria-label="Mostrar previsão por hora"
        className={`p-3 ${showHourForecast ? 'bg-blue-500/50' : 'hover:bg-white/10'} rounded-full cursor-pointer transition-colors motion-safe:animate-fade-in`}
        onClick={() => {
          props.toggleHourForecast(!showHourForecast);
          showHourForecast ? setShowHourForecast(false) : setShowHourForecast(true)
        }}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); props.toggleHourForecast(!showHourForecast); setShowHourForecast(!showHourForecast); } }}
      >
        <Clock size={24} aria-hidden="true" />
      </div>

      <div
        role="button"
        tabIndex={0}
        aria-pressed={showGraph}
        title="Gráfico de Temperatura"
        aria-label="Alternar gráfico de temperatura"
        className={`p-3 ${showGraph ? 'bg-blue-500/50' : 'hover:bg-white/10'} rounded-full cursor-pointer transition-colors motion-safe:animate-fade-in`}
        onClick={() => {
          props.toggleGraph(!showGraph);
          showGraph ? setShowGraph(false) : setShowGraph(true);
        }}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); props.toggleGraph(!showGraph); setShowGraph(!showGraph); } }}
      >
        <ThermometerSun size={24} aria-hidden="true" />
      </div>
    </nav>
  );
}