export default function Button({text, textColor, bgColor, border} : {text: string; bgColor: string; textColor: string;border: string;}) {

    return <a href="#"className={`bg-${bgColor} text-${textColor} self-center px-4 py-2 rounded font-semibold font-mont text-sm border border${border} border-solid border-white`}>{`${text}`}</a>

}