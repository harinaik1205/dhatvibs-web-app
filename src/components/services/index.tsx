import Container from "../Container";
import { MAIN_SERVICES } from "../../constants/data";
import ServiceItem from "./ServiceItem";

const OurServices = () => {
  return (
    <div className="w-full h-fit bg-[#f0f4fd] mt-10 py-20">
      <Container>
        <h3 className="text-[28px] text-text-primary font-semibold text-center mb-10">
          Our Services
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-self-center gap-10">
          {MAIN_SERVICES.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default OurServices;
