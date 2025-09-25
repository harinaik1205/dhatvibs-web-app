import Container from "../Container";
import { MAIN_SERVICES } from "../../constants/data";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div className="w-full h-fit bg-[#f0f4fd] mt-10 py-20">
      <Container>
        <h3 className="text-[28px] text-text-primary font-semibold text-center mb-10">
          Our Services
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-self-center gap-10">
          {MAIN_SERVICES.map((service) => (
            <li
              key={service.id}
              className="relative h-[340px] rounded-lg group cursor-pointer"
            >
              <img
                src={service.imageURL}
                alt={service.label}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="w-full h-full flex items-center justify-center px-6 absolute top-0 z-10">
                <span className="text-4xl text-white font-semibold text-center">
                  {service.label}
                </span>
              </div>

              <div className="hidden group-hover:block absolute inset-0 z-20 bg-black/10 p-4">
                <div className="w-full h-full bg-primary-500 flex flex-col items-center justify-center gap-3">
                  <span className="text-2xl text-white font-semibold text-center">
                    {service.label}
                  </span>

                  <Link
                    to={"/services"}
                    className="h-12 w-12 rounded-full bg-white flex items-center justify-center"
                  >
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default OurServices;
