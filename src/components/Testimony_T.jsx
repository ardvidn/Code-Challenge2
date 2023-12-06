import { testimoni } from "../data/datatestimoni.js";
import Navbar from "../utility/Navbar.jsx";
import FooterH from "./FooterH.jsx";

export default function Testimony_T() {
  return (
    <>
      <Navbar />
      <div className="bg-black h-auto">
        <div className="text-center pt-32 mx-4">
          <h1 className="text-first text-4xl italic font-semibold">More feedback from our client</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center mx-10 pt-20">
          {testimoni.map((data) => (
            <div key={data.id}>
              <div className="flex items-center justify-center my-4">
                <div className="mx-4">
                  <img src={data.url} alt="wisudawan" />
                </div>
                <div className="">
                  <div className="text-first font-medium">{data.nama}</div>
                  <div className="text-white">"{data.testi}"</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ml-8 md:ml-0 mt-4 pb-4">
          <h1 className="text-first text-3xl font-semibold md:text-center">Interest?</h1>
          <p className="text-white md:text-center">Come see us and talk about the package you need.</p>
        </div>
        <div className="pt-4 flex justify-center pb-20">
          <a href="https://wa.me/6281222352002" className="w-auto px-5 py-2 text-center bg-first rounded-full border border-black">
            Contact Us
          </a>
        </div>
      </div>
      <FooterH />
    </>
  );
}
