import MainForecastComponent from '../elements/main-forecast';
import HourForecastComponent from '../elements/hour-forecast';
import { IMainForecastProps } from '@/types/types';

export default function MainSection(props:IMainForecastProps) {
    return <main className="md:col-span-7 space-y-6">
        <MainForecastComponent data={props.data} handleSearch={props.handleSearch} />
        <HourForecastComponent data={props.data} />
    </main>
}