import checkWhite from "./../img/checkmark-icon-white.svg";
export default function Service({
  img,
  titulo,
  texto,
}: {
  img: string;
  titulo: string;
  texto: string;
}) {
  return (
    <div className="max-w-96 flex flex-col text-center justify-center">
      <div className="w-full relative pt-52">
        <img
          src={img}
          alt=""
          className="object-cover rounded-md absolute left-1/2 top-0 -translate-x-1/2 h-full w-full"
        />
        <div className="bg-gray-700 absolute rounded-full p-3 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 ">
          <img src={checkWhite.src} alt="" />
        </div>
      </div>
      
      <h3 className="font-mont font-semibold text-zinc-800 mt-12">{titulo}</h3>
      <div className={`flex my-5 justify-center`}>
        <span className="block w-4 h-0.5 bg-zinc-800 "></span>
        <span className="block w-4 h-0.5 bg-zinc-800/30 "></span>
      </div>
      <p className="font-open text-sm text-gray-600 leading-6">{texto}</p>
    </div>
  );
}
