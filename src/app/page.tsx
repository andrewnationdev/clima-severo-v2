"use client"
import React, { useEffect, useState } from 'react';
import 'dotenv/config';
import MainSection from './components/sections/main-section';
import MenuComponent from './components/elements/menu';
import DetailsPanelSection from './components/sections/details-panel';
import { ILocation, IWeatherData } from '@/types/types';

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

  async function getGeoData() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude
        })
      });
    } else {
      setLocation({
        lat: null,
        long: null
      })
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      //await getGeoData();
      // 

      if (localStorage.getItem("last-city")) {
        setQuery(localStorage.getItem("last-city")!);
      }

      const response = await fetch(getAPIUrl());

      const data = await response.json();
      setData(data);
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

  //bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2000')] bg-cover bg-center

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center p-4 font-sans text-white">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl w-full">
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
      </div>
    </div>
  );
};

export default WeatherApp;