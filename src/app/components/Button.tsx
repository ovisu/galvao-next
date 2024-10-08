'use client'
export default function Button({text, textColor, bgColor, bgColorH, border} : {text: string; bgColor: string; bgColorH: string; textColor: string;border: string;}) {

    return <a href="#contato"className={`${bgColor} ${textColor} ${bgColorH} transition ease-in-out duration-500 self-center px-4 py-2 rounded font-semibold font-mont text-sm border ${border} border-solid border-white 2xl:text-lg 2xl:px-6 2xl:py-4`}>{`${text}`}</a>

}