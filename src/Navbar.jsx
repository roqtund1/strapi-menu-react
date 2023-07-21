import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const { openSidebar, setPageId } = useGlobalContext();

  function handleSubmenu(e) {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  }

  return (
    <nav onMouseOver={handleSubmenu} className="navbar s-c">
      <div className="nav-header">
        <h3 className="nav-logo">strapi</h3>
        <button onClick={openSidebar} className="sidebar-toggle">
          <FaBars />
        </button>
      </div>
      <NavLinks />
    </nav>
  );
}
