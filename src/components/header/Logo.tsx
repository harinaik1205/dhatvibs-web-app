import { Link } from "react-router-dom";
import { LOGO_URL } from "../../constants/data";

const Logo = () => (
  <Link to="/" className="flex items-center">
    <img
      src={LOGO_URL}
      alt="Logo"
      className="object-contain h-[100px] w-[100px]"
    />
    <div className="hidden md:block ">
      <h1 className="text-text-primary text-3xl lg:text-4xl font-bold border-b-2 border-primary-500 pb-2">
        DhaTvi
      </h1>
      <p className="uppercase text-sm text-text-primary font-semibold">
        Business Solutions Pvt.ltd.
      </p>
    </div>
  </Link>
);

export default Logo;
