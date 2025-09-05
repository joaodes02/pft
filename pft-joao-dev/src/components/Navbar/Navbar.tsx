import { useLocation } from "react-router-dom";
import PillNav from "./PillNav"; // seu componente
import logo from "../../assets/iconeUpdate.svg"; // ajuste o caminho

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-center">
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: "ÍNICIO", href: "/" },
          { label: "CARREIRA", href: "/about" },
          { label: "PROJETOS", href: "/projects" },
          { label: "CONTATO", href: "/contact" },
        ]}
        activeHref={pathname}
        className="custom-nav font-family"
        ease="power2.easeOut"
        baseColor="#2a2a2a"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </div>
  );
}
