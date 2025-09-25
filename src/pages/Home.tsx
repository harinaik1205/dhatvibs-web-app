import OurServices from "../components/services";
import Banner from "../components/Banner";
import AboutSection from "../components/AbouSection";
import { Link } from "react-router-dom";

const BANNER_IMAGE_URL =
  "https://www.offkettech.com/assets/img/banner/banner1-slide1.png";

const Home = () => {
  return (
    <div className="pb-10">
      <Banner imageURL={BANNER_IMAGE_URL} />

      <AboutSection />

      <OurServices />

      <div className="relative w-full h-[480px] mt-20">
        <img
          src={
            "https://res.cloudinary.com/deyffbvwb/image/upload/v1758787284/a26b111a5d57569a67767104616b48399af872df_z2otoq.jpg"
          }
          className="w-full h-full"
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center bg-black/40">
          <p className="text-5xl sm:text-6xl text-white max-w-2xl">
            Let’s Make the Most Unique ideas Together
          </p>
          <Link to={"/contact"}>
            <button className="bg-primary-500 px-6 py-2 rounded-full text-lg text-white font-semibold mt-10 cursor-pointer hover:bg-green-600 transition duration-300">
              Let's Connect
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
