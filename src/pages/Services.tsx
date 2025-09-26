import Banner2 from "../components/Banner2";
import OurServices from "../components/services";

const BANNER_IMAGE_URL =
  "https://www.offkettech.com/assets/img/banner/breadcrumb.png";

const Services = () => {
  return (
    <div className="pb-20">
      <Banner2 imageURL={BANNER_IMAGE_URL} text="Services" />
      <OurServices />
    </div>
  );
};

export default Services;
