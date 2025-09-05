import PillNav from "./PillNav";
import logo from "./mouse.svg";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "ÍNICIO", href: "/" },
            { label: "CARREIRA", href: "/about" },
            { label: "PROJETOS", href: "/services" },
            { label: "CONTATO", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#2a2a2a"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>
    </>
  );
}
