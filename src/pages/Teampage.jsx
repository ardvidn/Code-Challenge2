import CEO_Team from "../components/CEO_Team";
import FadeIn from "../utility/Fadein";
import Navbar from "../utility/Navbar";
import FooterH from "../components/FooterH";

export default function Teampage() {
  return (
    <>
      <Navbar />
      <div className="bg-black h-auto">
        <FadeIn delay={0.4} direction="up" padding={true} fullWidth={true}>
          <CEO_Team />
        </FadeIn>
      </div>
      <FooterH />
    </>
  );
}
