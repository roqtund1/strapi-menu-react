import { useGlobalContext } from "./context";
import sublinks from "./data";

export default function NavLinks() {
  const { setPageId } = useGlobalContext();
  return (
    <ul className="nav-links">
      {sublinks.map((link) => {
        const { page, pageId } = link;

        return (
          <li
            onMouseEnter={() => setPageId(pageId)}
            
            key={pageId}
            className="nav-link"
          >
            {page}
          </li>
        );
      })}
    </ul>
  );
}
