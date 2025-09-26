import { Link } from "react-router-dom";
import Container from "./Container";
// import { LOGO_URL } from "../constants/data";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] py-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-5 border-b border-[#333333]">
          {/* about */}
          <div className="flex flex-col gap-5">
            <h1 className="text-lg text-white font-semibold">About Dhatvi</h1>
            <p className="text-base text-[#b3b3b3]">
              We empower businesses with scalable digital solutions — from
              seamless e-commerce platforms and robust IT operations to
              AI-driven tools and dedicated customer support. Our mission is to
              help you grow, innovate, and succeed in the digital era.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-center gap-5">
            <h2 className="text-lg text-white font-semibold">Company</h2>
            <div className="flex flex-col gap-3">
              <Link
                to={"/about"}
                className="text-base text-primary-500 hover:underline"
              >
                About Us
              </Link>
              <Link
                to={"/contact"}
                className="text-base text-primary-500 hover:underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-lg text-white font-semibold text-start">
              Our Services
            </h2>
            <div className="flex flex-col gap-3">
              <Link
                to={"/services"}
                className="text-base text-primary-500 hover:underline"
              >
                Software & Services
              </Link>
              <Link
                to={"/contact"}
                className="text-base text-primary-500 hover:underline"
              >
                Technical & Voice Support
              </Link>
              <Link
                to={"/services"}
                className="text-base text-primary-500 hover:underline"
              >
                Knowledge Center & Training
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-lg text-white font-semibold">Contact Us</h4>
            <h5 className="text-lg text-white font-semibold">
              Dhatvi Business Solutions Pvt.Ltd.
            </h5>
            <p className="text-base text-[#b3b3b3]">
              PB House, 1st Floor, HUDA Techno Enclave, Street No.7, Madhapur,
              Hyderabad, Telangana 500081
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
