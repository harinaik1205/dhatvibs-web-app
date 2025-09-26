import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/why-choose-us";
import Banner2 from "../components/Banner2";

const ABOUT_BANNER_URL =
  "https://res.cloudinary.com/deyffbvwb/image/upload/v1758869981/6404dad62c3bb48bcc5acbfdcf5490b91a32690b_voqifb.png";

const About = () => {
  return (
    <div className="pb-20">
      <Banner2 imageURL={ABOUT_BANNER_URL} text="About Us" />
      <AboutSection />

      <WhyChooseUs />
    </div>
  );
};

export default About;
