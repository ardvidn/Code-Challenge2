import { foto } from "../data/datafoto.js";

export default function CEO_Team() {
  return (
    <>
      <div className="pt-32">
        <h1 className="text-first text-4xl font-semibold text-center italic">MEET OUR PILLARS</h1>
      </div>
      <div className="pt-20">
        {foto.map((data) => (
          <div key={data.id} className="flex flex-wrap justify-center items-center pb-20">
            <div className="mb-10 pt-10 w-[300px] h-[300px] flex justify-center items-center">
              <img src={data.url} className="animate-blob w-auto h-auto" alt="" />
            </div>
            <div className="pb-32 pt-20">
              <h1 className="text-first text-center mb-2 text-2xl font-bold">{data.nama}</h1>
              <h2 className=" text-white text-center text-lg font-medium italic">{data.posisi}</h2>
              <p className="text-white pt-4 text-justify mx-10">{data.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
