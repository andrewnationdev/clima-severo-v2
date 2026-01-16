export default function ErrorScreen(){
    return  <div className="bg-white/10 backdrop-blur-xl w-[90vw] mx-auto border border-white/20 rounded-[40px] p-10 flex flex-col align-center gap-8 justify-around text-center min-h-[400px]">
        <img src="/warning.png" alt="ícone do app" width={200} height={200} className="mx-auto"/>
        <h1 className="text-4xl">ClimaSevero v2</h1>
        <h2 className="text-2xl">Ocorreu um Erro!</h2>
        <span className="text-white/60 text-xl">Orgulhosamente desenvolvido por AndrewNation</span>
    </div>
}