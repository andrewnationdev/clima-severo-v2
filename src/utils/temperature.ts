export function formattedTemperature(temp:number){
    return `${temp.toFixed(1)}°C`;
}

export function formatTime(unix: number){
        return new Date(unix * 1000).toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };