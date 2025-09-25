import OurServices from "../components/services";
import Banner from "../components/Banner";
import AboutSection from "../components/AbouSection";

const BANNER_IMAGE_URL =
  "https://www.offkettech.com/assets/img/banner/banner1-slide1.png";

const Home = () => {
  return (
    <div className="pb-10">
      <Banner imageURL={BANNER_IMAGE_URL} />

      <AboutSection />

      <OurServices />
    </div>
  );
};

export default Home;
