export const weatherMock = {
  city: "Atheria",
  date: "Segunda, 5 de Jan",
  current: {
    temp: 18,
    condition: "Parcialmente Nublado",
    min: 12,
    max: 21,
    feelsLike: 17,
    uvIndex: 3,
    humidity: 70,
    wind: 5,
    sunrise: "07:15",
    sunset: "17:45"
  },
  hourly: [
    { time: "10:00", temp: 17, icon: "sun" },
    { time: "11:00", temp: 18, icon: "cloud" },
    // ...
  ],
  trend: [15, 17, 18, 20, 19, 18, 17] // Dados para o gráfico
};