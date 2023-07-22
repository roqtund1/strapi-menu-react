import { useRef } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

export default function Submenu() {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((page) => page.pageId === pageId);

  const submenuContainer = useRef(null);

  function handleOnMouseLeave(e) {
    const submenu = submenuContainer.current;
    const { right, left, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;

   if(clientX< left || clientX > right || clientY > bottom){
    setPageId(null)
   }
  }

  if (!currentPage) {
    return;
  }

  const { links, page, pageId: id } = currentPage;

  return (
    <div
      onMouseLeave={handleOnMouseLeave}
      className={currentPage ? "submenu s-c show-submenu" : "submenu s-c"}
      ref={submenuContainer}
    >
      <article key={pageId} className="single-page">
        <h4 className="page-title">{page}</h4>
        <ul
          style={{
            gridTemplateColumns:
              currentPage?.links?.length > 3 ? "1fr 1fr " : "1fr",
          }}
          className="page-links"
        >
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
    </div>
  );
}
