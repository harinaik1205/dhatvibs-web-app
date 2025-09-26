import { Slash } from "lucide-react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const getPathName = (path: string): string => {
  switch (path) {
    case "about":
      return "About Us";
    case "contact":
      return "Contact Us";

    default:
      return path;
  }
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").slice(1);

  let breadcrumPath = "";

  return (
    <div className="flex items-center gap-2 text-xs text-[#878787] mb-2">
      <span className="flex items-center gap-2">
        <Link
          to="/"
          className="text-lg text-green-400 font-medium hover:text-primary-500"
        >
          Home
        </Link>
        <Slash size={15} className="text-green-400 -rotate-10" />
      </span>
      {pathnames.map((path, index) => {
        breadcrumPath += `/${path}`;
        if (index === pathnames.length - 1) {
          return (
            <span key={path} className="text-lg text-white capitalize">
              {getPathName(path)}
            </span>
          );
        }
        return (
          <span key={path} className="flex items-center gap-2">
            <Link
              to={breadcrumPath}
              className="text-lg text-green-400 hover:text-primary-500 capitalize"
            >
              {getPathName(path)}
            </Link>
            <Slash size={15} className="text-green-400 -rotate-10" />
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
