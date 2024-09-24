export default function Title({sub, main, align} : {sub: string; main: string; align: string;}){

    return (
        <div className="flex flex-col">
            <p className="font-mont font-bold text-xs text-zinc-500 mb-4 tracking-wider">{sub}</p>
            <h2 className="font-mont font-semibold text-2xl text-zinc-800">{main}</h2>
            <div className={`flex justify${align} mt-5 ml-1`}>
                <span className="block w-4 h-0.5 bg-zinc-800 "></span>
                <span className="block w-4 h-0.5 bg-zinc-800/30 "></span>
            </div>
        </div>


    );

}