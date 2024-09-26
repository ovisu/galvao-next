export default function Contato({text, icon, link, linkText} : {text: string; icon: string; link: string; linkText: string;}){
    return (

        <div className="flex items-center gap-4">
            <div className="p-2 w-12 h-12 pb-1.5 border border-1 border-solid border-black/20 rounded-lg shrink-0" ><img src={icon} alt=""  className="w-full"/></div>
            <div className="text-left flex flex-col justify-center"><p className="font-mont text-md text-zinc-800 font-semibold">{text}</p> <a href={link} className="font-open font-bold text-xs text-gray-600 break-words underline">{linkText}</a></div>

        </div>
    )




}