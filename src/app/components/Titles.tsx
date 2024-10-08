'use client';
export default function Title({sub, main, align, subColor, maincolor, decorcolor} : {sub: string; main: string; align: string; maincolor: string; subColor: string; decorcolor: string;}){

    return (
        <div className={`flex flex-col ${align}`}>
            <p className={`font-mont font-bold text-xs ${subColor} mb-4 tracking-wider 2xl:text-lg`}>{sub}</p>
            <h2 className={`font-mont font-semibold text-2xl ${maincolor} xl:text-3xl 2xl:text-5xl`}>{main}</h2>
            <div className={`flex mt-5 ml-1`}>
                <span className={`block w-6 h-0.5 ${decorcolor} `}></span>
                <span className={`block w-6 h-0.5 ${decorcolor}/30 `}></span>
            </div>
        </div>

        
    );

}