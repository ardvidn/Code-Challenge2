import FadeIn from "../utility/Fadein";
import { useNavigate } from "react-router-dom";

export default function TestimonyH() {
  const navigate = useNavigate();
  return (
    <div className=" bg-gradient-to-b from-white to-first h-auto">
      <FadeIn delay={0.4} direction="up" padding={true} fullWidth={true}>
        <div>
          <div className="text-center pt-10">
            <h1 className="text-4xl font-extrabold">TESTIMONY</h1>
            <p className="pt-3 text-second italic font-semibold md:text-xl">Lets see how customers feel about our service!!!</p>
          </div>
          <div className="flex md:items-center mx-10 pt-10 pb-10">
            <div className="w-1/2 items-center my-auto mx-auto  md:mx-auto md:flex md:justify-center">
              <img className="border-2 border-white rounded-md w-[100px] h-[100px] md:w-auto md:h-auto" src="https://source.unsplash.com/200x200?graduate" alt="" />
            </div>
            <div className="w-1/2">
              <h1 className="font-bold text-lg mb-4 text-right">Talitha Azzahra</h1>
              <p className="italic text-second font-semibold text-right">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consectetur?"</p>
            </div>
          </div>
          <div className="flex md:items-center mx-10 pt-10">
            <div className="w-1/2 ml-4">
              <h1 className="font-bold text-lg mb-4 text-left">Talitha Azzahra</h1>
              <p className="italic text-second font-semibold text-left">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consectetur?"</p>
            </div>
            <div className="w-1/2 md:items-center my-auto md:flex md:justify-center">
              <img className="border-2 border-white rounded-md w-[100px] h-[100px] md:w-auto md:h-auto" src="https://source.unsplash.com/200x200?graduate" alt="" />
            </div>
          </div>
          <div className="pb-20">
            <FadeIn delay={0.4} direction="left" padding={true} fullWidth={true}>
              <div className="relative w-auto py-3 px-4 text-center rounded-full mt-11 bg-white cursor-pointer hover:shadow-lg transition-all duration-300">
                <button onClick={() => navigate("/Testimonypage")}>More testimony...</button>
              </div>
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
