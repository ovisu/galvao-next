export default function Title({sub, main, align, maincolor, decorcolor} : {sub: string; main: string; align: string; maincolor: string; decorcolor: string;}){

    return (
        <div className={`flex flex-col ${align}`}>
            <p className="font-mont font-bold text-xs text-zinc-500 mb-4 tracking-wider">{sub}</p>
            <h2 className={`font-mont font-semibold text-2xl ${maincolor}`}>{main}</h2>
            <div className={`flex mt-5 ml-1`}>
                <span className={`block w-6 h-0.5 ${decorcolor} `}></span>
                <span className={`block w-6 h-0.5 ${decorcolor}/30 `}></span>
            </div>
        </div>

        
    );

}