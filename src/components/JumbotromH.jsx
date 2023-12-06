import jumbotron_hp_landsape from "../assets/foto_jumbotron/jumbotron-hp-landsacape-min.png";
import Navbar from "../utility/Navbar";
import FadeIn from "../utility/Fadein";
import { useNavigate } from "react-router-dom";

export default function JumbotronH() {
  const navigate = useNavigate();

  return (
    <div className="h-[125vh] relative flex flex-col items-center scale-100  " style={{ background: `url(${jumbotron_hp_landsape})`, backgroundRepeat: "no-repeat", backgroundPosition: "top", backgroundSize: "cover" }}>
      <div className="relative w-full max-w-[1490px] flex items-center justify-between pt-10 mx-auto px-10">
        <Navbar />
      </div>
      <FadeIn delay={0.2} direction="down" padding={true} fullWidth={true}>
        <h1 className="mt-[120px] text-center text-5xl leading-tight xs:text-[64px] text-first italic font-semibold max-w-[1050px]">Capture your memorable moments with our passion and dignity</h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" padding={true} fullWidth={true}>
        <h1 className="mt-6 text-center text-lg xs:text-xl text-first italic font-semibold max-w-[1050px]">Capture your memorable moments with our passion and dignity</h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="up" padding={true} fullWidth={true}>
        <div className="relative w-[120px] py-3 px-2 text-center rounded-full mt-11 bg-white cursor-pointer hover:bg-first transition-all duration-300">
          <button onClick={() => navigate("/Aboutpage")}>About Us</button>
        </div>
      </FadeIn>
    </div>
  );
}
