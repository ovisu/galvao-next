"use client";

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
import logowhite from "./img/2-logo-p.png";
import welcomeBg from "./img/welcomeBg.jpg";
import pqNos from "./img/porQueNos.jpg";
import { useState } from "react";


export default function Home() {
  const [view, setView] = useState(false);
  function viewhandler() {
    setView(!view);
  }


  return (
    <main>
      <div
        style={{ backgroundImage: `url(${welcomeBg.src})` }}
        className="h-screen bg bg-center bg-no-repeat bg-cover"
      >
        <div className="h-screen bg-black/55 flex flex-col">
          <a href="#" id="inicio" style={{ visibility: "hidden" }}></a>
          <header className="flex justify-between items-center py-2 px-4 border-b border-white/30 relative lg:pl-24 lg:pr-16 xl:px-24">
            <div className="w-40 2xl:w-60">
              <img src={logo.src} className="w-full" />
            </div>
            <div
              className="flex flex-col border-l border-white/30 px-2 py-3 pl-3.5 w-10 cursor-pointer relative lg:hidden"
              onClick={viewhandler}
            >
              <span
                className={`bg-white w-6 h-1 rounded-sm block ${
                  view
                    ? "rotate-45 top-3 absolute transition-all  ease-in-out duration-300"
                    : "top-1 transition-all ease-in-out duration-300 absolute"
                }`}
              ></span>
              <span
                className={`bg-white w-6 h-1 rounded-sm block ${
                  view
                    ? "opacity-0  transition-all  ease-in-out duration-300"
                    : "opacity-100 transition-all  ease-in-out duration-300"
                }`}
              ></span>
              <span
                className={`bg-white w-6 h-1 rounded-sm block ${
                  view
                    ? "-rotate-45 bottom-3 absolute transition-all  ease-in-out duration-300"
                    : " bottom-1 transition-all ease-in-out duration-300 absolute"
                }`}
              ></span>
            </div>

            <nav className="hidden lg:block">
              <ul className="flex gap-6 items-center text-white lg:text-sm xl:text-base 2xl:text-lg font-semibold font-mont">
                <li>
                  <a
                    href="#inicio"
                    className="hover:text-slate-900 transition duration-500 "
                  >
                    INICIO
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="#quem"
                    className="hover:text-slate-900 transition duration-500 "
                  >
                    QUEM SOMOS
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="#servicos"
                    className="hover:text-slate-900 transition duration-500"
                  >
                    SERVIÇOS
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="hover:text-slate-900 transition duration-500"
                  >
                    CONTATO
                  </a>
                </li>
                <li>
                  <a
                    href="https://onvio.com.br/clientcenter/company/B32930AC54B6478FAE0EA3A7D8A7ED96"
                    target="_blank"
                    className="p-2 rounded lg:text-xs xl:text-sm 2xl:text-base bg-gray-800 text-white hover:bg-gray-700 hover:text-slate-200 transition ease-in-out duration-500"
                  >
                    
                    PORTAL DO CLIENTE
                  </a>
                </li>
              </ul>
            </nav>
            <ul
              className={`flex flex-col absolute top-full left-0 bg-gray-800 w-full font-mont text-md text-white overflow-hidden transition-all`}
              style={
                view
                  ? { height: "22.88rem", transition: "height .4s ease-in-out" }
                  : { height: "0px" }
              }
            >
              <li className="p-6 border-t border-b border-solid border-white/20">
                <a href="#inicio" onClick={viewhandler}>
                  INICIO
                </a>
              </li>
              <li className="p-6 border-b border-solid border-white/20">
                <a href="#quem" onClick={viewhandler}>
                  QUEM SOMOS
                </a>
              </li>
              <li className="p-6  border-b border-solid border-white/20">
                <a href="#servicos" onClick={viewhandler}>
                  SERVIÇOS
                </a>
              </li>
              <li className="p-6 border-b border-solid border-white/20">
                <a href="#contato" onClick={viewhandler}>
                  CONTATO
                </a>
                
              </li>
              <li className="p-6 border-b border-solid border-white/20">
                <a  href="https://onvio.com.br/clientcenter/company/B32930AC54B6478FAE0EA3A7D8A7ED96"
                    target="_blank" onClick={viewhandler}>
                  PORTAL DO CLIENTE
                </a>
              </li>
            </ul>
          </header>

          <section className="flex flex-col items-center justify-center text-center grow">
            <div className="flex flex-col w-11/12 h-1/2 justify-between ">
              <p className="font-mont text-xs text-zinc-300 font-semibold tracking-widest lg:text-sm 2xl:text-base">
                BEM-VINDOS À CORPORAÇÕES GALVÃO CONTABILIDADE
              </p>
              <div className="flex flex-col gap-7 2xl:gap-12">
                <h1 className="font-mont text-2xl text-white font-bold lg:text-3xl 2xl:text-5xl">
                  Escritório de Inteligência Contábil em Caldas Novas
                </h1>
                <div className="flex justify-center">
                  <span className="block w-6 h-0.5 bg-white self-center"></span>
                  <span className="block w-6 h-0.5 bg-white/30 self-center"></span>
                </div>
                <p className="font-open text-md text-white text-medium 2xl:text-lg">
                  Consultorias, contabilidade, BPO, assessoria fiscal,
                  tributária e departamento pessoal.
                </p>
              </div>
              <Button
                bgColorH="hover:bg-[#293341]"
                bgColor="bg-gray-800"
                text="AGENDE UMA CONSULTORIA"
                border="border-0"
                textColor="text-white"
              ></Button>
            </div>
          </section>
        </div>
      </div>
      <section className="flex flex-col py-20 px-5 xl:px-24 lg:flex-row lg:gap-20 justify-center relative">
        <a
          href="#"
          id="quem"
          style={{ visibility: "hidden" }}
          className="absolute top-0"
        ></a>
        <Title
          main="Soluções eficientes para fazer a sua empresa crescer de forma ágil e segura"
          sub="QUEM SOMOS"
          subColor="text-zinc-500"
          align="-start"
          maincolor="text-zinc-800"
          decorcolor="bg-zinc-800"
        ></Title>
        <div className="font-open mt-12 lg:w-[100%] xl:w-[115%]">
          <div className="text-5xl text-zinc-800 font-mont font-semibold float-left mr-2 -mt-0.8 2xl:text-[3.5rem] ">
            A
          </div>
          <p className="text-gray-600 text-left leading-6  2xl:text-lg">
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
      <div className="py-5 px-4 bg-gray-800 text-center flex flex-col gap-4">
           
        <p className="text-white font-semibold font-mont text-xs 2xl:text-base">
          Toque no botão para falar conosco por WhatsApp e agende uma
          consultoria agora mesmo!
        </p>
        <Button
          bgColorH="hover:bg-white/10"
          text="FALE CONOSCO"
          border="border-1"
          textColor="text-white"
          bgColor="bg-gray-800"
        ></Button>
      </div>
      <section className="flex flex-col text-center justify-center py-16 px-8 gap-16 relative">
        <a
          href="#"
          id="servicos"
          style={{ visibility: "hidden", position: "absolute", top: 0 }}
        ></a>
        <Title
          sub="NOSSOS SERVIÇOS"
          subColor="text-zinc-500"
          main="Como nós iremos te ajudar"
          align="items-center"
          maincolor="text-zinc-800"
          decorcolor="bg-zinc-800"
        ></Title>
        <div className="flex flex-col items-center justify-center  gap-10 md:flex-row md:flex-wrap md:items-stretch 2xl:grid 2xl:grid-cols-3 2xl:justify-items-center  2xl:gap-y-24">
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
          bgColorH="hover:bg-[#3d4755]"
          text="FALE CONOSCO"
          bgColor="bg-gray-800"
          border="border-0"
          textColor="text-white"
        ></Button>
      </section>
      <section className="bg-gray-800 py-16 px-4 lg:flex lg:items-center lg:gap-16 lg:pt-24 2xl:px-36 ">
        <div>
          <img src={pqNos.src} className="rounded-sm mb-10" />
        </div>
        <div className="lg:w-11/12 2xl:w-8/12">
          <Title
            align="text-left"
            sub="POR QUE NÓS"
            subColor="text-[#85858e]"
            main="Por que escolhar a Corporações Galvão"
            maincolor="text-white"
            decorcolor="bg-white"
          ></Title>
          <div className="mt-5  flex flex-col items-center gap-10 2xl:gap-[4.25rem]">
            <p className="font-open text-sm text-white leading-6 2xl:text-xl">
              Nossa equipe é formada por contadores especialistas em cada
              serviço oferecido e possuem anos de experiência no ramo. Também
              conhecem as legislações perfeitamente, o que garante mais
              segurança para os clientes.
            </p>
            <div className="w-4/6 relative">
              <div className="flex items-center gap-3 -ml-11 ">
                <img src={checkWhite.src} alt="" className="-mt-1" />{" "}
                <h3 className="font-mont text-md text-white font-semibold 2xl:text-xl">
                  Atendimento
                </h3>
              </div>
              <p className="font-open text-xs text-white leading-normal 2xl:text-lg">
                Nosso atendimento é individual e personalizado, para entregar
                resultados concretos, serviços de excelência e garantir a
                satisfação dos empresários.
              </p>
            </div>
            <div className="w-4/6 mb-6 relative">
              <div className="flex items-center gap-3 -ml-11 2xl:text-xl">
                <img src={checkWhite.src} alt="" className="-mt-1" />{" "}
                <h3 className="font-mont text-md text-white font-semibold">
                  Foco nos Resultados
                </h3>
              </div>
              <p className="font-open text-xs text-white leading-normal 2xl:text-lg">
                Temos um suporte preparado para atender e tirar todas as dúvidas
                dos clientes. Temos processos automatizados, que fazem com que
                tudo seja mais ágil.
              </p>
            </div>
            <div className="w-4/6 mb-6 relative">
              <Button
                bgColorH="hover:bg-slate-200"
                text="FALE CONOSCO"
                textColor="text-zinc-800"
                bgColor="bg-white"
                border="border-0"
              ></Button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center flex flex-col items-center justify-center flex-wrap py-16 px-4 relative">
        <a
          href="#"
          id="contato"
          style={{ visibility: "hidden" }}
          className="absolute top-0"
        ></a>
        <Title
          sub="CONTATO"
          subColor="text-zinc-500"
          main="Entre em contato conosco e solicite um atendimento"
          align="items-center"
          maincolor="text-zinc-800"
          decorcolor="bg-zinc-800"
        ></Title>
        <div className="w-8/12 flex flex-col gap-16 pt-16 md:grid md:grid-cols-2 2xl:pt-20 2xl:gap-y-36 2xl:ml-64">
          <Contato
            icon={whats.src}
            link="https://wa.me/5564992055521"
            linkText="(64)99205-5521"
            text="Fale conosco pelo Whatsapp"
          ></Contato>
          <Contato
            icon={pin.src}
            link="https://maps.app.goo.gl/KtNRGTncPLcFbR3q6"
            linkText={`Espaço B3 Coworking
            R.B3, Qd.10, Lt.1/2 - Itanhangá I,
            Caldas Novas - GO, 75690-000`}
            text="Faça-nos uma visita"
          ></Contato>
          <Contato
            icon={insta.src}
            link="https://www.instagram.com/galvaocontabilidade.st/"
            linkText="Corporações Galvão Contabilidade"
            text="Conheça nossa equipe!"
          ></Contato>
          <Contato
            icon={phone.src}
            link="mailto:contato@corporacoesgalvao.com.br"
            linkText="contato@corporacoesgalvao.com"
            text="Entre em contato por email"
          ></Contato>
        </div>
      </section>
      <footer className="bg-gray-800">
        <a href="#inicio">
          <div className="py-4 flex justify-center">
            <img
              src={logowhite.src}
              alt=""
              className="w-2/5 md:w-40 2xl:w-2/12"
            />
          </div>
        </a>
        <ul className="flex hidden md:flex text-white text-xs font-mont justify-center gap-6 pb-4 2xl:text-xl">
          <li>
            <a
              href="#inicio"
              className="hover:text-emerald-500 transition-all duration-500"
            >
              INICIO
            </a>
          </li>
          <li>
            <a
              href="#quem"
              className="hover:text-emerald-500 transition-all duration-500"
            >
              QUEM SOMOS
            </a>
          </li>
          <li>
            <a
              href="#servicos"
              className="hover:text-emerald-500 transition-all duration-500"
            >
              SERVIÇOS
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="hover:text-emerald-500 transition-all duration-500"
            >
              CONTATO
            </a>
          </li>
        </ul>
        <div className="border-t border-white/60 p-2">
          <p className="font-open text-xs text-white/60">
            © Copyright 2024 | Corporações Galvão Contabilidade
          </p>
        </div>
      </footer>
    </main>
  );
}
