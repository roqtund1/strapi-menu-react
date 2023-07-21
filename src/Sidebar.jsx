import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button onClick={closeSidebar} className="close-sidebar-btn">
        <FaTimes />
      </button>
      <div className="page-container">
        {sublinks.map((singlePage) => {
          const { links, page, pageId } = singlePage;
          return (
            <article key={pageId} className="single-page">
              <h4 className="page-title">{page}</h4>
              <ul className="page-links">
                {links.map((link) => {
                  const { id, label, icon, url } = link;
                  return (
                    <li key={id} className="page-link">
                      <a href="#">
                        {icon}
                        <span>{label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </aside>
  );
}
