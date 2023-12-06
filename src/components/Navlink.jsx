import { Link } from "react-scroll";

const NavLink = ({ children, to, offset = -50 }) => {
  const className = "text-lg lg:text-xl text-black";

  return (
    <Link to={to} spy={true} smooth={true} offset={offset} duration={1000} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;
