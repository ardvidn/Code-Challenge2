import FadeIn from "../utility/Fadein";
import logo from "../assets/Logo_4.png";

export default function CprofileH() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-black to-white block md:flex md:flex-row-reverse items-center justify-center">
      <FadeIn delay={0.4} direction="left" padding={true} fullWidth={true}>
        <div className="pt-10 bg-first animate-blob w-[300px] h-[300px] flex justify-center items-center">
          <img src={logo} className="w-[200px]" alt="" />
        </div>
      </FadeIn>
      <FadeIn delay={0.4} direction="right" padding={true} fullWidth={true}>
        <h2 className="pt-8 text-first text-3xl font-semibold italic">Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
        <p className="text-white md:pt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum laudantium, amet expedita quibusdam minus, dolor eaque consectetur sequi quo ullam atque corrupti ipsa quae repudiandae, voluptatum nulla delectus
          voluptas!
        </p>
      </FadeIn>
    </div>
  );
}
