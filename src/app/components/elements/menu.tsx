import { Sun, CloudRain, MapPin } from 'lucide-react';

export default function MenuComponent(){
    return <nav className="md:col-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 flex md:flex-col items-center justify-between md:justify-center gap-8">
          <div className="p-3 bg-blue-500/50 rounded-full cursor-pointer"><Sun size={24} /></div>
          <div className="p-3 hover:bg-white/10 rounded-full cursor-pointer transition-colors"><MapPin size={24} /></div>
          <div className="p-3 hover:bg-white/10 rounded-full cursor-pointer transition-colors"><CloudRain size={24} /></div>
        </nav>
}