import { Sun, CloudRain, Wind, Droplets, Sunrise, Sunset, MapPin } from 'lucide-react';
import MainForecastComponent from '../elements/main-forecast';
import HourForecastComponent from '../elements/hour-forecast';

export default function MainSection() {
    return <main className="md:col-span-7 space-y-6">
        <MainForecastComponent />
        <HourForecastComponent />
    </main>
}