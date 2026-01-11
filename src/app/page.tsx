"use client"
import React, { useEffect } from 'react';
import 'dotenv/config';
import { Sun, Wind, Droplets, Sunrise, Sunset } from 'lucide-react';
import MainSection from './components/sections/main-section';
import MenuComponent from './components/elements/menu';
import DetailsPanelSection from './components/sections/details-panel';

const WeatherApp = () => {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const query = "Dubai"

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=25.2048&lon=55.2708&appid=${API_KEY}&units=metric&lang=pt`);

      const data = await response.json();

      console.log(data)
    }

    fetchData()
  },[])

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2000')] bg-cover bg-center flex items-center justify-center p-4 font-sans text-white">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl w-full">
        <MenuComponent/>
        <MainSection/>
        <DetailsPanelSection/>
      </div>
    </div>
  );
};

export default WeatherApp;