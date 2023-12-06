import { products } from "../data/dataproduk.js";

export default function Product_S() {
  return (
    <>
      {products.map((Produk) => (
        <div key={Produk.id} className="flex flex-wrap md:w-1/2 lg:1/3 h-[380px] rounded-2xl items-center shadow-2xl mb-10">
          <div className="bg-first h-full w-1/2 rounded-l-2xl">
            <img src={Produk.url} className="w-[120px] h-[150px] rounded-lg ml-4 mt-20"></img>
          </div>
          <div className="bg-slate-300 h-full w-1/2 rounded-r-2xl flex flex-col justify-center">
            <p className="mb-2 font-bold text-white text-center md:text-sm lg:text-lg">{Produk.package.toUpperCase()}</p>
            <ul>
              <li className="list-disc ml-6 md:ml-5 md:text-xs lg:text-sm">{Produk.sesi}</li>
              <li className="list-disc ml-6 md:ml-5 md:text-xs lg:text-sm">{Produk.edited_photo}</li>
              <li className="list-disc ml-6 md:ml-5 md:text-xs lg:text-sm">{Produk.raw_photo}</li>
              <li className="mb-2 list-disc ml-6 md:ml-5 md:text-xs lg:text-sm">{Produk.photographer}</li>
            </ul>
            <a href="https://wa.me/6281222352002" className="w-[100px] mx-auto mb-2 text-center bg-first rounded-full border border-black">
              {Produk.price}
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
