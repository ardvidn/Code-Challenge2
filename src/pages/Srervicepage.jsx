import FooterH from "../components/FooterH";
import Product_S from "../components/Product_S";
import Navbar from "../utility/Navbar";

export default function Servicepage() {
  return (
    <>
      <Navbar />
      <div className="h-auto bg-black">
        <div className="flex flex-wrap items-center justify-center pt-28 ">
          <div className="">
            <h1 className="text-first text-4xl font-bold">Our Services</h1>
          </div>
          <div className="md:w-auto md:flex items-center justify-center mt-20 gap-4 pb-20 mx-4">
            <Product_S />
          </div>
        </div>
      </div>
      <FooterH />
    </>
  );
}
