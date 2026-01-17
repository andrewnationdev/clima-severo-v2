"use client"
import React, { useEffect, useState } from 'react';
import 'dotenv/config';
import MainSection from './components/sections/main-section';
import MenuComponent from './components/elements/menu';
import DetailsPanelSection from './components/sections/details-panel';
import { ILocation, IWeatherData } from '@/types/types';
import LoadingApp from './components/sections/loading';
import ErrorScreen from './components/sections/error';

const WeatherApp = () => {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const [query, setQuery] = useState<string>('São Paulo');
  const [location, setLocation] = useState<ILocation>({
    lat: null,
    long: null
  })
  const [data, setData] = useState<IWeatherData | undefined>(undefined);
  const [showGraph, setShowGraph] = useState<boolean>(false);
  const [showHourForecast, setShowHourForecast] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  function handleSearch(query: string) {
    setQuery(query);
    localStorage.setItem("last-city", query);
  }

  function getAPIUrl() {
    if (location.lat !== null && location.long !== null) {
      return `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.long}&appid=${API_KEY}&units=metric&lang=pt`
    } else {
      return `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric&lang=pt`
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("last-city")) {
        setQuery(localStorage.getItem("last-city")!);
      }

      const response = await fetch(getAPIUrl());

      if(!response.ok){
        setError(true);
        setQuery("São Paulo");
        localStorage.setItem("last-city", "São Paulo");
        return;
      }

      const forecast = await response.json();

      // tentar buscar UV via One Call (current.uvi) usando lat/lon da previsão
      try {
        const lat = forecast?.city?.coord?.lat;
        const lon = forecast?.city?.coord?.lon;
        if (lat != null && lon != null && API_KEY) {
          const uvRes = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${API_KEY}`);
          if (uvRes.ok) {
            const uvData = await uvRes.json();
            const uvi = uvData?.current?.uvi;
            if (uvi !== undefined) {
              // anexa uvi em city para usar no componente sem mudar tipos globais
              forecast.city = { ...forecast.city, uvi };
            }
          }
        }
      } catch (e) {
        console.debug('Falha ao buscar UV', e);
      }

      setData(forecast);
    }


    fetchData()
  }, [query])

  function toggleHourForecast(state: boolean) {
    setShowHourForecast(state);
  }

  function toggleSearch(state: boolean) {
    setShowSearch(state);
  }

  function toggleGraph(state: boolean) {
    setShowGraph(state);
  }

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2000')] bg-cover bg-center min-h-screen flex items-center justify-center p-4 font-sans text-white">
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[2px]"></div>
      {data && !error && (
        <main role="main" aria-live="polite" aria-atomic="true" className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl w-full">
          <MenuComponent
            toggleShowSearch={toggleSearch}
            toggleHourForecast={toggleHourForecast}
            toggleGraph={toggleGraph} />
          <MainSection
            showHourForecast={showHourForecast}
            data={data}
            handleSearch={handleSearch}
            showSearch={showSearch} />
          <DetailsPanelSection showGraph={showGraph} data={data} />
        </main>
      ) }
      {!data && !error && <div className="relative z-10 gap-6 w-full">
        <LoadingApp/>
      </div>}
      {error && <ErrorScreen />}
    </div>
  );
};

export default WeatherApp;