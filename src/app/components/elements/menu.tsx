import { Sun, CloudRain, MapPin, ThermometerSun } from 'lucide-react';
import { useState } from 'react';

interface IMenu {
  toggleHourForecast: (state: boolean) => void;
  toggleGraph: (state: boolean) => void;
}

export default function MenuComponent(props: IMenu) {
  const [showGraph, setShowGraph] = useState<boolean>(false);
  const [showHourForecast, setShowHourForecast] = useState<boolean>(false);

  return <nav className="md:col-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 flex md:flex-col items-center justify-between md:justify-center gap-8">
    <div className="p-3 bg-blue-500/50 rounded-full cursor-pointer"><Sun size={24} /></div>
    <div className="p-3 hover:bg-white/10 rounded-full cursor-pointer transition-colors"><MapPin size={24} /></div>
    <div title="Gráfico de Temperatura" className={`p-3 ${showGraph ? 'bg-blue-500/50' : 'hover:bg-white/10'} rounded-full cursor-pointer transition-colors`} onClick={() => {
      props.toggleGraph(!showGraph);

      showGraph ? setShowGraph(false) : setShowGraph(true);
    }}><ThermometerSun size={24} /></div>
  </nav>
}