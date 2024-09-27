export default function Contato({text, icon, link, linkText} : {text: string; icon: string; link: string; linkText: string;}){
    return (

        <div className="flex items-center gap-4 2xl:gap-6 ">
            <div className="p-2 w-12 h-12 pb-1.5 border border-1 border-solid border-black/20 rounded-lg shrink-0 2xl:w-16 2xl:h-16" ><img src={icon} alt=""  className="w-full"/></div>
            <div className="text-left flex flex-col justify-center"><p className="font-mont text-md text-zinc-800 font-semibold 2xl:text-xl">{text}</p> <a href={link} className="font-open font-bold text-xs text-gray-600 break-words underline 2xl:text-lg">{linkText}</a></div>

        </div>
    )




}