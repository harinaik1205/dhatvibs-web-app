import { Link } from "react-router-dom";
import Container from "./Container";
import { Check, PhoneCall } from "lucide-react";

const FeatureItem = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <li className="flex items-center gap-3">
    <div className="w-6 h-6 rounded-full bg-[#c9c9c9]/50 flex items-center justify-center">
      <Icon className="text-primary-500" size={20} />
    </div>
    <span className="text-xl font-semibold">{text}</span>
  </li>
);

const AboutSection = () => (
  <div className="w-full py-20">
    <Container>
      <div className="flex flex-col-reverse items-center md:flex-row md:items-start gap-10">
        <div className="relative w-full md:w-[50%] h-[440px] rounded-lg">
          <img
            src="https://www.offkettech.com/assets/img/about/about1.png"
            alt="About"
            className="w-full h-full rounded-lg"
          />
          <img
            src="https://www.offkettech.com/assets/img/element/dot-grp1.png"
            alt="Decorative"
            className="absolute top-0 -right-5 -z-10 animate-bounce object-contain"
          />
        </div>

        <div className="flex flex-col items-center md:items-start flex-1 text-center md:text-start gap-3">
          <h2 className="uppercase text-base text-text-primary tracking-wide font-medium">
            Get to know us
          </h2>
          <p className="text-xl font-semibold lg:max-w-[80%]">
            Driving Growth Through Smart Software & Scalable Solutions
          </p>
          <p className="text-lg">
            At Dhatvi, we empower businesses with smart, scalable, and
            future-ready digital solutions. From robust e-commerce platforms and
            intelligent quick commerce systems to reliable IT operations and
            customer-centric voice support — we help vendors and clients grow,
            adapt, and thrive in the digital era.
          </p>

          <ul className="w-full space-y-3 mt-3">
            <FeatureItem icon={Check} text="Custom Software Development" />
            <FeatureItem icon={Check} text="24/7 Technical Support" />
            <FeatureItem icon={Check} text="Training & Skill Development" />
          </ul>

          <div className="flex items-center gap-6 mt-3">
            <Link to="/services">
              <button className="px-6 py-2 bg-gradient-to-r from-primary-500 via-green-400 to-primary-500 rounded-full text-base text-white tracking-wide font-medium cursor-pointer hover:shadow-xl transition duration-200">
                Discover More
              </button>
            </Link>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c9c9c9]/40 flex items-center justify-center">
                <PhoneCall size={20} className="text-primary-500" />
              </div>
              <div className="flex flex-col items-start">
                <span>Call Us</span>
                <span>+91 40 45374487</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default AboutSection;
