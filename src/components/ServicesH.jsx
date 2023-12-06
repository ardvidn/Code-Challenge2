import Product_S from "./Product_S";
import FadeIn from "../utility/Fadein";

export default function ServiceH() {
  return (
    <div className="relative bg-white w-full h-auto">
      <FadeIn delay={0.4} direction="up" padding={true} fullWidth={true}>
        <h1 className="text-center text-4xl font-bold mt-4">SERVICES</h1>
        <p className="text-center mt-4 italic text-second text-xl">Our services to capture your memorable momments</p>
        <div className="inline md:w-full md:flex items-center justify-center mt-20 gap-4 pb-20">
          <Product_S />
        </div>
      </FadeIn>
    </div>
  );
}
