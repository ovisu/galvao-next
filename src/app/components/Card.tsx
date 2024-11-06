"use client";

import arrow from "../img/Arrow.svg";
import { useState, useRef, useEffect} from "react";

export default function Card({
  img,
  nome,
  titulo,
  cv,
  imgalign,
}: {
  img: string;
  nome: string;
  titulo: string;
  cv: string;
  imgalign: string;
}) {
  const [viewCV, setViewCV] = useState<undefined | boolean>(false);
  function viewCVhandler() {
    setViewCV(!viewCV);
    console.log(viewCV);
  }
  const fadein = useRef(null);
  const [cardVisible, setCardVisible] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setCardVisible(entry.isIntersecting);
      console.log(entry);

      if (entry.isIntersecting == true) {

        observer.unobserve(fadein.current!);
      }

    });
    console.log(fadein.current);
    observer.observe(fadein.current!);
      
  });

  return (
    <div
      className="bg-white relative flex flex-col items-center justify-center py-3 px-4 rounded-md min-w-56 self-center justify-self-center"
      ref={fadein!}
      style={
        cardVisible
          ? {
              marginTop: "0rem",
              opacity: "1",
              transition: "margin-top ease-in-out 1s, opacity ease-in-out 1s",
            }
          : {
              marginTop: "3rem",
              opacity: "0",
              transition: "margin-top ease-in-out 1s, opacity ease-in-out 1s",
            }
      }
    >
      <div className="w-full h-24 bg-emerald-400 absolute top-0 z-0 rounded-t-md"></div>
      <div className="w-40 h-40 rounded-full z-10">
        <img
          src={img}
          className={`w-full h-full rounded-full object-cover border-2 border-solid border-zinc-800 ${imgalign}`}
        />
      </div>
      <h3 className="text-zinc font-mont font-semibold pt-1 tracking-wide text-lg">
        {nome}
      </h3>
      <p className="text-gray-400 text-center font-open font-semibold text-xs tracking-wide -mt-1 break-words 2xl:text-sm">
        {titulo}
      </p>
      <div
        className="overflow-hidden flex items-center"
        style={
          viewCV
            ? {
                height: "185px",
                width: "16rem",
                transition:
                  "height ease-in-out 0.5s, width ease-in-out 0.5s, padding ease-in-out 0.5s, all ease-in-out 0.8s",
                paddingTop: "1rem",
                opacity: "1",
              }
            : {
                height: "0px",
                width: "0px",
                paddingTop: "0px",
                opacity: "0",
                transition:
                  "height ease-in-out 0.5s, width ease-in-out 0.5s,all ease-in-out 0.8s",
              }
        }
      >
        <p className="font-mont text-zinc-800 text-center text-sm leading-tight">
          {cv}
        </p>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer pt-4"
        onClick={viewCVhandler}
      >
        <p
          className="text-zinc-800 font-open font-bold uppercase tracking-wide text-sm overflow-hidden"
          style={
            viewCV
              ? {
                  opacity: "0",
                  width: "0rem",
                  height: "0rem",
                  transition: "all ease-in-out 0.5s",
                  position: "absolute",
                }
              : {
                  opacity: "1",
                  width: "auto",
                  transition: "all ease-in-out 0.5s",
                }
          }
        >
          Ver Curriculo
        </p>
        <p
          className="text-zinc-800 font-open font-bold uppercase tracking-wide text-sm overflow-hidden"
          style={
            viewCV
              ? {
                  opacity: "1",
                  width: "auto",
                  transition: "all ease-in-out 0.5s",
                }
              : {
                  opacity: "0",
                  width: "0rem",
                  height: "0rem",
                  transition: "all ease-in-out 0.5s",
                  position: "absolute",
                }
          }
        >
          Fechar Curriculo
        </p>
        <img
          src={arrow.src}
          alt=""
          className="w-5 mt-1"
          style={
            viewCV
              ? { rotate: "180deg", transition: "all ease-in-out 0.5s" }
              : { rotate: "0deg", transition: "all ease-in-out 0.5s" }
          }
        />
      </div>
    </div>
  );
}
