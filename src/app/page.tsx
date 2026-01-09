import React from 'react';
import { Sun, CloudRain, Wind, Droplets, Sunrise, Sunset, MapPin } from 'lucide-react';

const WeatherApp = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2000')] bg-cover bg-center flex items-center justify-center p-4 font-sans text-white">
      {/* Overlay para escurecer o fundo e dar foco */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl w-full">
        
        {/* Barra Lateral de Navegação (Menu) */}
        <nav className="md:col-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 flex md:flex-col items-center justify-between md:justify-center gap-8">
          <div className="p-3 bg-blue-500/50 rounded-full cursor-pointer"><Sun size={24} /></div>
          <div className="p-3 hover:bg-white/10 rounded-full cursor-pointer transition-colors"><MapPin size={24} /></div>
          <div className="p-3 hover:bg-white/10 rounded-full cursor-pointer transition-colors"><CloudRain size={24} /></div>
        </nav>

        {/* Card Principal (Atheria - Esquerda) */}
        <main className="md:col-span-7 space-y-6">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-10 flex flex-col justify-between min-h-[400px]">
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

          {/* Previsão por Hora */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex justify-around items-center overflow-x-auto gap-4">
            {[10, 11, 12, 13, 14, 15].map((hour) => (
              <div key={hour} className={`flex flex-col items-center p-3 rounded-2xl ${hour === 10 ? 'bg-blue-500/40 border border-white/30' : ''}`}>
                <span className="text-sm opacity-70">{hour}:00</span>
                <Sun size={20} className="my-2" />
                <span className="font-semibold">{17 + hour - 10}°</span>
              </div>
            ))}
          </div>
        </main>

        {/* Painel de Detalhes (Direita) */}
        <aside className="md:col-span-4 space-y-6">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 h-full space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Detalhes</h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-2xl"><Wind size={20} /></div>
                <div>
                  <p className="text-sm opacity-60">Vento</p>
                  <p className="font-medium">5 km/h</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-2xl"><Droplets size={20} /></div>
                <div>
                  <p className="text-sm opacity-60">Umidade</p>
                  <p className="font-medium">70%</p>
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

            {/* Representação do Gráfico */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm opacity-60 mb-4">Tendência de Temperatura</p>
              <div className="h-32 w-full bg-gradient-to-t from-blue-500/20 to-transparent rounded-xl relative overflow-hidden">
                {/* SVG Simples para simular a linha do gráfico */}
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

      </div>
    </div>
  );
};

export default WeatherApp;