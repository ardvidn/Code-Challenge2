import Navbar from "../utility/Navbar";
import logo from "../assets/Logo_4.png";
import FadeIn from "../utility/Fadein";
import foto_team from "../assets/foto_team/team.png";
import { useNavigate } from "react-router-dom";
import FooterH from "./FooterH";
// import { DefaultPlayer as Video } from "react-html5video";
// import "react-html5video/dist/styles.css";
import cultureVideo from "../assets/video/Konten_1.mp4";

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="h-auto bg-black">
        <FadeIn delay={0.4} direction="up" padding={true} fullWidth={true}>
          <div className="flex flex-wrap items-center justify-center pt-32 pb-20">
            <div className="pt-10 bg-first animate-blob w-[300px] h-[300px] flex justify-center items-center">
              <img src={logo} className="w-[200px]" alt="" />
            </div>
            <div className="pt-20">
              <h2 className="pt-8 text-first text-3xl font-semibold italic mx-4 md:mx-20">Our History...</h2>
              <p className="text-white md:pt-8 mx-6 md:mx-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum laudantium, amet expedita quibusdam minus, dolor eaque consectetur sequi quo ullam atque corrupti ipsa quae repudiandae, voluptatum nulla delectus
                voluptas!
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="h-auto">
        <FadeIn delay={0.4} direction="up" padding={true} fullWidth={true}>
          <div className="mx-4 pb-4 md:flex md:justify-center">
            <div className="md:w-1/2">
              <img className="md:w-[450px] md:h-[450px]" src={foto_team} alt="" />
            </div>
            <div className="md:w-1/2 md:my-auto">
              <h2 className="pt-8 text-black text-right text-3xl font-semibold italic mx-4 md:mx-20">FLAP's Pillar</h2>
              <p className="text-second text-right md:pt-8 mx-6 md:mx-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum laudantium, amet expedita quibusdam minus, dolor eaque consectetur sequi quo ullam atque corrupti ipsa quae repudiandae, voluptatum nulla delectus
                voluptas!
              </p>
            </div>
          </div>
          <div className="flex justify-center pb-20">
            <div className="relative w-[120px] py-3 px-2 text-center rounded-full mt-11 bg-first cursor-pointer hover:bg-first hover:shadow-lg transition-all duration-300">
              <button onClick={() => navigate("/Teampage")}>Find More...</button>
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="h-auto">
        <FadeIn delay={0.4} direction="up" padding={true} fullWidth={true}>
          <div className="text-center">
            <h1 className="text-first text-4xl font-semibold italic">Here's how we provide our services to you</h1>
          </div>
          <div className="my-20 mx-10 flex flex-wrap-reverse justify-center ">
            <video controls loop width="280" height="340">
              <source src={cultureVideo} type="video/mp4" />
            </video>
            <div className="pb-10">
              <h1 className="font-semibold text-4xl pb-4 text-center">Here our culture</h1>
              <p className="text-justify md:px-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda consequuntur odit maxime omnis optio iusto praesentium totam, veniam architecto.</p>
            </div>
          </div>
        </FadeIn>
      </div>
      <FooterH />
    </>
  );
}
