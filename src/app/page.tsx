import Button from "./components/Button";
import Title from "./components/Titles";
import Service from "./components/Service";
import Contato from "./components/Contato";

/* icones*/
import checkDark from "./img/checkmark.svg";
import checkWhite from "./img/checkmark-icon-white.svg";
import whats from "./img/whatsapp-icon-black.svg";
import phone from "./img/phone-icon.svg";
import insta from "./img/instagram-icon.svg";
import pin from "./img/pin-icon.svg";

/* imagens card servicos */
import img1 from "./img/1-servico.jpg";
import img2 from "./img/2-servico.jpg";
import img3 from "./img/3-servico.jpg";
import img4 from "./img/4-servico.jpg";
import img5 from "./img/5-servico.jpg";
import img6 from "./img/6-servico.jpg";

/* import imagens site */
import logo from "./img/logo.png";
import logowhite from "./img/2-logo-p.png"
import welcomeBg from "./img/welcomeBg.jpg";
import pqNos from "./img/porQueNos.jpg";

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
              <ul className="flex">
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
                bgColor="bg-gray-700"
                text="AGENDE UMA CONSULTORIA"
                border="border-0"
                textColor="text-white"
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
          maincolor="text-zinc-800"
          decorcolor="bg-zinc-800"
        ></Title>
        <div className="font-open mt-12">
          <div className="text-5xl text-zinc-800 font-mont font-semibold float-left mr-2 -mt-0.8 ">
            A
          </div>
          <p className="text-gray-600 text-left leading-6">
            Corporações Galvão Contabilidade é um escritório de Inteligência
            Contábil renomado em Caldas Novas. Com mais de uma década de
            experiência, a empresa busca alavancar e auxiliar diversos negócios
            e empreendedores com estratégias completas e que trazem resultados
            incríveis. Realizamos atendimento presencial e on-line em mais de 5
            estados do Brasil.
          </p>
          <ul className="mt-12 flex flex-col gap-9 text-sm text-zinc-800 font-mont font-semibold">
            <li className="flex items-center gap-2">
              <img src={checkDark.src} alt="" className="-mt-1" /> CONTADORES
              EXPERIENTES
            </li>
            <li className="flex items-center gap-2">
              <img src={checkDark.src} alt="" className="-mt-1" /> PROCESSOS
              INOVADORES
            </li>
            <li className="flex items-center gap-2">
              <img src={checkDark.src} alt="" className="-mt-1" /> EMPRESA
              RENOMADA
            </li>
            <li className="flex items-center gap-2">
              <img src={checkDark.src} alt="" className="-mt-1" /> ATENDIMENTO
              EM TODO BRASIL
            </li>
          </ul>
        </div>
      </section>
      <div className="py-5 px-4 bg-gray-700 text-center flex flex-col gap-4">
        <p className="text-white font-semibold font-mont text-xs">
          Toque no botão para falar conosco por WhatsApp e agende uma
          consultoria agora mesmo!
        </p>
        <Button
          text="FALE CONOSCO"
          border="border-1"
          textColor="text-white"
          bgColor="bg-gray-700"
        ></Button>
      </div>
      <section className="flex flex-col justify-center py-16 px-8 gap-16">
        <Title
          sub="NOSSOS SERVIÇOS"
          main="Como nós iremos te ajudar"
          align="items-center"
          maincolor="text-zinc-800"
          decorcolor="bg-zinc-800"
        ></Title>
        <div className="flex flex-col gap-20">
          <Service
            img={img1.src}
            titulo="Contabilidade"
            texto="
Escrituração contábil para todos os segmentos, Contabilidade especializada para condomínios, Contabilidade para condomínios, Elaboração de fluxo de caixa, Gerenciamento Financeiro, Balanços Mensais e Anuais."
          ></Service>
          <Service
            img={img2.src}
            titulo="Fiscal"
            texto="
Abertura e encerramento de empresas, alteração de cadastro e registros, escrituração fiscal, inscrição municipal e estadual."
          ></Service>
          <Service
            img={img3.src}
            titulo="Tributária"
            texto="
Planejamento tributário, recuperação de créditos tributários, elisão fiscal, revisão tributária, verificação de contas, tributos, taxas e contribuições a pagar."
          ></Service>
          <Service
            img={img4.src}
            titulo="Departamento Pessoal"
            texto="
Gerenciamento de contratos e demissões, desenvolvimento de folhas de pagamento, benefícios dos funcionários, férias, bonificação e muito mais."
          ></Service>
          <Service
            img={img5.src}
            titulo="BPO"
            texto="
É conhecido como Terceirização de Processos de Negócios, onde o escritório monta estratégias de crescimento para as empresas, a partir de processos avançados e ágeis."
          ></Service>
          <Service
            img={img6.src}
            titulo="Consultorias"
            texto="
As consultorias funcionam para analisar a situação das empresas e as necessidades dos empreendedores em relação aos negócios e burocracias."
          ></Service>
        </div>
        <Button
          text="FALE CONOSCO"
          bgColor="bg-gray-800"
          border="border-0"
          textColor="text-white"
        ></Button>
      </section>
      <section className="bg-gray-800 py-16 px-4">
        <div>
          <img src={pqNos.src} className="rounded-sm mb-10" />
        </div>
        <Title
          align="text-left"
          sub="POR QUE NÓS"
          main="Por que escolhar a Corporações Galvão"
          maincolor="text-white"
          decorcolor="bg-white"
        ></Title>
        <div className="mt-5  flex flex-col items-center gap-10  ">
          <p className="font-open text-sm text-white leading-6">
            Nossa equipe é formada por contadores especialistas em cada serviço
            oferecido e possuem anos de experiência no ramo. Também conhecem as
            legislações perfeitamente, o que garante mais segurança para os
            clientes.
          </p>
          <div className="w-4/6 relative">
            <div className="flex items-center gap-3 -ml-11">
              <img src={checkWhite.src} alt="" className="-mt-1" />{" "}
              <h3 className="font-mont text-md text-white font-semibold">
                Atendimento
              </h3>
            </div>
            <p className="font-open text-xs text-white leading-normal">
              Nosso atendimento é individual e personalizado, para entregar
              resultados concretos, serviços de excelência e garantir a
              satisfação dos empresários.
            </p>
          </div>
          <div className="w-4/6 mb-6 relative">
            <div className="flex items-center gap-3 -ml-11">
              <img src={checkWhite.src} alt="" className="-mt-1" />{" "}
              <h3 className="font-mont text-md text-white font-semibold">
                Foco nos Resultados
              </h3>
            </div>
            <p className="font-open text-xs text-white leading-normal">
              Temos um suporte preparado para atender e tirar todas as dúvidas
              dos clientes. Temos processos automatizados, que fazem com que
              tudo seja mais ágil.
            </p>
          </div>
          <Button
            text="FALE CONOSCO"
            textColor="text-zinc-800"
            bgColor="bg-white"
            border="border-0"
          ></Button>
        </div>
      </section>
      <section className="text-center flex flex-col items-center flex-wrap py-16 px-4 ">
        <Title
          sub="CONTATO"
          main="Entre em contato conosco e solicite um atendimento"
          align="items-center"
          maincolor="text-zinc-800"
          decorcolor="bg-zinc-800"
        ></Title>
        <div className="w-8/12 flex flex-col gap-16 mt-5 ">
          <Contato
            icon={whats.src}
            link="#"
            linkText="(64)99205-5521"
            text="Fale conosco pelo Whatsapp"
          ></Contato>
          <Contato
            icon={phone.src}
            link="#"
            linkText="(64)99205-5521"
            text="Ligue para nós"
          ></Contato>
          <Contato
            icon={insta.src}
            link="#"
            linkText="Corporações Galvão Contabilidade"
            text="Conheça nossa equipe!"
          ></Contato>
          <Contato
            icon={pin.src}
            link="#"
            linkText={`Espaço B3 Coworking
            R.B3, Qd.10, Lt.1/2 - Itanhangá I,
            Caldas Novas - GO, 75690-000`}
            text="Faça-nos uma visita"
          ></Contato>
        </div>
      </section>
      <footer className="bg-gray-800">
        <div className="py-6 flex justify-center">
        <img src={logowhite.src} alt="" className="w-2/5" />
        </div>
      <ul className="flex hidden">
                <li>INICIO</li>
                <li>QUEM SOMOS</li>
                <li>SERVIÇOS</li>
                <li>CONTATO</li>
              </ul>
              <div className="border border-t-0.5 border-white/60 p-4">
                <p className="font-open text-sm text-white/60">© Copyright 2024 | Corporações Galvão Contabilidade</p>
              </div>
      </footer>
    </main>
  );
}
