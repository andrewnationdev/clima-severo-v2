/**
 * 
 * {"coord":{"lon":-50.1619,"lat":-25.095},"weather":[{"id":501,"main":"Rain","description":"chuva moderada","icon":"10d"}],"base":"stations","main":{"temp":21.76,"feels_like":22,"temp_min":21.76,"temp_max":21.76,"pressure":1012,"humidity":77,"sea_level":1012,"grnd_level":914},"visibility":10000,"wind":{"speed":5.79,"deg":338,"gust":10.84},"rain":{"1h":3.07},"clouds":{"all":98},"dt":1768242261,"sys":{"country":"BR","sunrise":1768207313,"sunset":1768256133},"timezone":-10800,"id":3453186,"name":"Ponta Grossa","cod":200}
 */
export interface IWeatherData {
  list: Array<{
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level?: number;
      grnd_level?: number;
      temp_kf?: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust?: number;
    };
    visibility: number;
    pop: number;
    rain?: {
      '3h': number;
    };
    dt_txt: string; // Ex: "2026-01-14 15:00:00"
  }>;
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface ILocation {
    lat: number | null;
    long: number | null;
}

export interface IMenu {
  toggleHourForecast: (state: boolean) => void;
  toggleGraph: (state: boolean) => void;
  toggleShowSearch: (state: boolean) => void;
}

export interface IMainForecastProps {
  data: IWeatherData | undefined;
  handleSearch: (query: string) => void;
  showSearch?: boolean;
  showHourForecast: boolean;
}

export interface IHourForecastProps {
  data: IWeatherData | undefined;
}

export interface IDetailsPanelProps {
  data: IWeatherData | undefined;
}

export interface IForecastProps {
  condition:string;
  size: number;
}

export interface IMainForecastProps {
    data: IWeatherData | undefined;
    handleSearch: (query: string) => void;
}

export interface IDetailsPanelProps {
  data: IWeatherData | undefined;
  showGraph: boolean;
}

export interface IError {
  errorMessage: string;
}