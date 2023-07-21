import { useGlobalContext } from "./context";
import sublinks from "./data";

export default function Submenu() {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((page) => page.pageId === pageId);

  // console.log(currentPage);

  if (!currentPage) {
    return;
  }

  const { links, page, pageId: id } = currentPage;

  return (
    <div
      onMouseLeave={() => setPageId(null)}
      className={currentPage ? "submenu s-c show-submenu" : "submenu s-c"}
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
