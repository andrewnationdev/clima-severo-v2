"use client"
import React, { useEffect, useState } from 'react';
import 'dotenv/config';
import MainSection from './components/sections/main-section';
import MenuComponent from './components/elements/menu';
import DetailsPanelSection from './components/sections/details-panel';
import { ILocation, IWeatherData } from '@/types/types';

const WeatherApp = () => {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const [query, setQuery] = useState<string>('Brasília');
  const [location, setLocation] = useState<ILocation>({
    lat: null,
    long: null
  })
  const [data, setData] = useState<IWeatherData>({
    coord: { lon: 0, lat: 0 },
    weather: [{ id: 0, main: '', description: '', icon: '' }],
    base: '',
    main: { temp: 0, feels_like: 0, temp_min: 0, temp_max: 0, pressure: 0, humidity: 0 },
    visibility: 0,
    wind: { speed: 0, deg: 0 },
    clouds: { all: 0 },
    dt: 0,
    sys: { country: '', sunrise: 0, sunset: 0 },
    timezone: 0,
    id: 0,
    name: '',
    cod: 0,
  });

  function handleSearch(query:string){
    setQuery(query);
  }

  function getAPIUrl(){
    if(location.lat !== null && location.long !== null){
      return `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=${API_KEY}&units=metric&lang=pt`
    } else {
      return `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric&lang=pt`
    }
  }

  async function getGeoData(){
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition((position)=>{
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

  useEffect(()=>{
    const fetchData = async () => {
      //await getGeoData();
      const response = await fetch(getAPIUrl());

      const data = await response.json();
      setData(data);
    }

    fetchData()
  },[query])

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2000')] bg-cover bg-center flex items-center justify-center p-4 font-sans text-white">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl w-full">
        <MenuComponent/>
        <MainSection data={data} handleSearch={handleSearch}/>
        <DetailsPanelSection/>
      </div>
    </div>
  );
};

export default WeatherApp;