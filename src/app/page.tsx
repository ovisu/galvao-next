import welcomeBg from "./img/welcomeBg.jpg";
import logo from "./img/logo.png";
import Button from "./components/Button";
import Title from "./components/Titles";

export default function Home() {
  return (
    <main>
      <div
        style={{ backgroundImage: `url(${welcomeBg.src})` }}
        className="h-screen bg bg-center bg-no-repeat bg-cover"
      >
        <div className="h-screen bg-black/50 flex flex-col">
          <header className="flex justify-between items-center py-2 px-4 border-b border-white/30">
            <div className="w-36">
              <img src={logo.src} className="w-full" />
            </div>
            <div className="flex flex-col gap-1 border-l border-white/30 px-2 py-3 pl-3.5 w-10">
              <span className="bg-white w-6 h-1 rounded-sm block"></span>
              <span className="bg-white w-6 h-1 rounded-sm block"></span>
              <span className="bg-white w-6 h-1 rounded-sm block"></span>
            </div>
            <nav className="hidden">
              <ul className="flex ">
                <li>INICIO</li>
                <li>QUEM SOMOS</li>
                <li>SERVIÇOS</li>
                <li>CONTATO</li>
              </ul>
            </nav>
          </header>
          <section className="flex flex-col items-center justify-center text-center grow">
            <div className="flex flex-col w-11/12 h-1/2 justify-between ">
              <p className="font-mont text-xs text-zinc-300 font-semibold tracking-widest">
                BEM-VINDOS À CORPORAÇÕES GALVÃO CONTABILIDADE
              </p>
              <div className="flex flex-col gap-7">
                <h1 className="font-mont text-2xl text-white font-bold">
                  Escritório de Inteligência Contábil em Caldas Novas
                </h1>
                <div className="flex justify-center">
                  <span className="block w-4 h-0.5 bg-white self-center"></span>
                  <span className="block w-4 h-0.5 bg-white/30 self-center"></span>
                </div>
                <p className="font-open text-md text-white text-medium">
                  Consultorias, contabilidade, BPO, assessoria fiscal,
                  tributária e departamento pessoal.
                </p>
              </div>
              <Button
                bgColor="gray-700"
                text="AGENDE UMA CONSULTORIA"
                border="-0"
                textColor="white"
              ></Button>
            </div>
          </section>
        </div>
      </div>
      <section className="flex flex-col my-16 py-2 px-5">
        <Title
          main="Soluções eficientes para fazer a sua empresa crescer de forma ágil e segura"
          sub="QUEM SOMOS"
          align="-start"
        ></Title>
        <div className="font-open mt-12">
          <div className="text-5xl text-zinc-800 font-mont font-semibold float-left mr-2 -mt-0.8 ">A</div>
          <p className="text-gray-600 text-left leading-6">
            Corporações Galvão Contabilidade é um escritório de Inteligência
            Contábil renomado em Caldas Novas. Com mais de uma década de
            experiência, a empresa busca alavancar e auxiliar diversos negócios
            e empreendedores com estratégias completas e que trazem resultados
            incríveis. Realizamos atendimento presencial e on-line em mais de 5
            estados do Brasil.
          </p>
          <ul className="mt-12 flex flex-col gap-9 text-sm text-zinc-800 font-mont font-semibold">
            <li>CONTADORES EXPERIENTES</li>
            <li>PROCESSOS INOVADORES</li>
            <li>EMPRESA RENOMADA</li>
            <li>ATENDIMENTO EM TODO BRASIL</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
