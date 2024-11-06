import React from "react";
import { useEffect, useRef, useState } from "react";

export default function Contato({
  text,
  icon,
  link,
  linkText,
}: {
  text: string;
  icon: string;
  link: string;
  linkText: string;
}) {

  const fadein = useRef(null);
  const [cardVisible, setCardVisible] = useState<undefined | boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>{

        const entry = entries[0];
        setCardVisible(entry.isIntersecting);
        console.log(entry);
        if (entry.isIntersecting == true) {

          observer.unobserve(fadein.current!);
        }

    });
   observer.observe(fadein.current!);
  });

  return (
    <div className="flex items-center gap-4 2xl:gap-6 max-w-80 2xl:max-w-none" ref={fadein} style={cardVisible ? {marginLeft:"0rem", opacity: "1", transition:"margin-left ease-in-out 1s, opacity ease-in-out 1s"} : {marginLeft: "3rem", opacity: "0", transition:"margin-left ease-in-out 1s, opacity ease-in-out 1s"}} >
      
        <div className="p-2 w-12 h-12 pb-1.5 border border-1 border-solid border-black/20 rounded-lg shrink-0 2xl:w-16 2xl:h-16"  suppressHydrationWarning>
          <img src={icon} alt="" className="w-full" />
        </div>
        <div className="text-left flex flex-col justify-center">
          <p className="font-mont text-md text-zinc-800 font-semibold 2xl:text-xl">
            {text}
          </p>
          <a
            href={link}
            target="_blank"
            className="font-open font-bold text-xs text-gray-600 break-words underline 2xl:text-lg"
          >
            {linkText}
          </a>
        </div>
   
    </div>
  );
}
