"use client";
import checkWhite from "./../img/checkmark-icon-white.svg";
import { useState } from "react";
import { useRef, useEffect } from "react";


export default function Service({
  img,
  titulo,
  texto,
}: {
  img: string;
  titulo: string;
  texto: string;
}) {
  const fadein = useRef();
  const [cardVisible, setCardVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>{

        const entry = entries[0];
        setCardVisible(entry.isIntersecting);
        console.log(entry);
        if (entry.isIntersecting == true) {

          observer.unobserve(fadein.current);
        }

    });
   observer.observe(fadein.current);
  });
  return (
    <div
      className={`max-w-96 flex flex-col text-center shadow shadow-gray-800/30 basis-full rounded-md p-4 pb-8`}
      ref={fadein}
      style={cardVisible ? {marginTop:"0rem", opacity: "1", transition:"margin-top ease-in-out 1s, opacity ease-in-out 1s"} : {marginTop: "3rem", opacity: "0", transition:"margin-top ease-in-out 1s, opacity ease-in-out 1s"}}

    >
      <div className="w-full relative pt-52 self-start">
        <img
          src={img}
          alt=""
          className="object-cover rounded-md absolute left-1/2 top-0 -translate-x-1/2 h-full w-full"
        />
        <div className="bg-gray-800 absolute rounded-full p-3 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 ">
          <img src={checkWhite.src} alt="" />
        </div>
      </div>

      <h3 className="font-mont font-semibold text-zinc-800 mt-12 2xl:text-xl">
        {titulo}
      </h3>
      <div className={`flex my-5 self-center`}>
        <span className="block w-4 h-0.5 bg-zinc-800 "></span>
        <span className="block w-4 h-0.5 bg-zinc-800/30 "></span>
      </div>
      <div>
        <p className="font-open text-sm text-gray-600 leading-6 2xl:text-lg">
          {texto}
        </p>
      </div>
    </div>
  );
}
