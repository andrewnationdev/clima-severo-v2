export default function Footer(){
	const year = new Date().getFullYear();
	return (
		<footer
			role="contentinfo"
			aria-label="Rodapé do site"
			title="Informações do rodapé"
			className="mt-6 border-t border-white/10 py-2 text-sm text-white/70 motion-safe:animate-fade-in"
		>
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
				<div className="text-center md:text-left">
					<span className="text-white font-medium">© {year} AndrewNation</span>
					<span className="hidden md:inline"> — ClimaSevero v2</span>
				</div>

				<div className="flex items-center gap-4">
					<a
						href="https://andrewnationdev.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visitar portfólio de AndrewNation (abre em nova aba)"
						title="Portfólio AndrewNation"
						className="underline hover:text-white"
					>
						Portfólio
					</a>

					<a
						href="https://github.com/andrewnationdev/clima-severo-v2"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Abrir repositório do projeto no GitHub (abre em nova aba)"
						title="Repositório do projeto no GitHub"
						className="underline hover:text-white"
					>
						Código
					</a>
				</div>
			</div>
		</footer>
	);
}