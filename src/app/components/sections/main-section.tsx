import MainForecastComponent from '../elements/main-forecast';
import HourForecastComponent from '../elements/hour-forecast';
import { IMainForecastProps } from '@/types/types';

export default function MainSection(props: IMainForecastProps) {
    return <main className="md:col-span-7 space-y-6">
        <MainForecastComponent
            data={props.data}
            showSearch={props.showSearch}
            handleSearch={props.handleSearch}
            showHourForecast={props.showHourForecast} />
        {props.showHourForecast && <HourForecastComponent data={props.data} />}
    </main>
}