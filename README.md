Essa é uma versão atualizada e melhorada do ClimaSevero (agora legacy) que eu havia feito em Svelt. Agora, decidi refazê-lo em ReactJS, TypeScript e Tailwind, a fim de melhorar a experiência do usuário. A tela inicial do aplicativo é simples e concisa, de modo a auxiliar o usuário na obtenção dos dados sem a necessidade de muitos toques/cliques. Se está à procura da versão legacy, [clique aqui](https://andrewnationdev.vercel.app/docs/projects/climasevero).

Optei por este projeto porque me auxiliaria bastante na manipulação de dados vindos da API, além de me fornecer uma panorama de como eu deveria estruturar a interface para melhor exibir os dados para o usuário. Também o escolhi como forma de consolidar todos os meus conhecimentos adquiridos até aqui. 

Futuramente, pretendo implementar outras melhorias neste projeto, tais como: a possibilidade de favoritar cidades para acesso rápido, previsão do tempo por dia, mais dados interessantes, bibliotecas como ReactQuery e Zustand para tornar mais eficiente os processos de obtenção e armazenamento de dados e possivelmente o uso de outras ferramentas do react, como contexts, tornando os dados acessíveis a qualquer componente.

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

# BIBLIOTECAS ADICIONAIS
- Tailwind Animated para animações.
- Recharts para o gráfico elegante de temperatura.
- OpenWeatherMap para a obtenção dos dados do clima.

# RECURSOS
- Busca de cidades por nome.
- Efeito Glassmorphism construído inteiramente com o Tailwind, para conferir elegância e modernidade à interface.
- Tela de carregamento e tratamento de erros.
- Tipagem dos componentes em TypeScript.
- Previsão do tempo por hora.
- Temperatura máxima, mínima e sensação térmica.
- Ícones para demonstrar o estado do clima.
- Velocidade do vento, nível de umidade, visibilidade e horários aproximados do nascer e do pôr do sol.
- Gráfico de temperatura com Recharts.
- API da OpenWeatherMaps, garantindo consistência e precisão dos dados.
- Design pensado para a adaptabilidade a qualquer dispositivo e acessibilidade do usuário.
- Capacidade de mostrar e ocultar partes da interface, exibindo para o usuário apenas as informações que ele deseja no momento.

# DEMONSTRAÇÃO
- [Vídeo 1](https://youtu.be/UQH1eKVlvZk)
- [Vídeo 2](https://youtu.be/J_-oHoTGi40)

# COMO EXECUTAR

- Baixe o arquivo zip do repositório e descompacte.
- Crie um arquivo `.env` com a chave da API que você obtiver do OpenWeatherMap.
- Instale as dependências com `npm install` e depois execute o projeto com `npm run dev`.