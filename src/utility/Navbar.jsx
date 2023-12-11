import { useState } from "react";
import logo from "../assets/Logo_4.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  let [showMini, setShowMini] = useState(false);
  return (
    <>
      <header className="absolute top-0 left-0 w-full flex items-center">
        <div className="container">
          <div className="md:flex items-center justify-between relative">
            <div className="px-4 cursor-pointer" onClick={() => navigate("/")}>
              <img src={logo} alt="" className="w-[110px] h-[65px] mt-3 ml-10" />
            </div>
            <div className="text-4xl text-white absolute right-7 top-5 cursor-pointer md:hidden" onClick={() => setShowMini(!showMini)}>
              <ion-icon name={showMini ? "close-outline" : "menu-outline"}></ion-icon>
            </div>
            <div className={`z-0 absolute bg-slate-400 md:bg-transparent pb-8 pt-3 pr-10 mt-4 right-4 rounded-2xl transition-all duration-500 ease-in ${showMini ? `opacity-100` : `opacity-0 md:opacity-100`}`}>
              <ul className="md:flex md:items-center">
                <li className="md:ml-6 my-4 ml-4">
                  <Link to="/Aboutpage" className="text-white hover:text-first hover:font-bold transition-all cursor-pointer">
                    ABOUT
                  </Link>
                </li>
                <li className="md:ml-6 my-4 ml-4">
                  <Link to="/srevicepage" className="text-white hover:text-first hover:font-bold transition-all  cursor-pointer">
                    SERVICES
                  </Link>
                </li>
                <li className="md:ml-6 my-4 ml-4">
                  <button to="/Testimonypage" className="text-white hover:text-first hover:font-bold transition-all  cursor-pointer">
                    TESTIMONY
                  </button>
                </li>
                <li className="md:ml-6 my-4 ml-4">
                  <button to="/Teampage" className="text-white hover:text-first hover:font-bold transition-all  cursor-pointer">
                    OUR TEAM
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
