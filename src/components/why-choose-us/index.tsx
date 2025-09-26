import {
  DollarSign,
  Handshake,
  ToolCase,
  TrendingUp,
  User,
} from "lucide-react";
import FeatureItem from "./FeatureItem";
import Container from "../Container";

const FEATURES = [
  {
    icon: <User />,
    title: "Experienced Industry Experts",
    description:
      "Our team brings years of expertise across industries to deliver impactful solutions.",
  },
  {
    icon: <Handshake />,
    title: "Client-Centric Approach",
    description:
      "We prioritize your needs, ensuring every solution aligns with your goals.",
  },
  {
    icon: <TrendingUp />,
    title: "Scalable Solutions",
    description:
      "Our solutions grow with your business, adapting seamlessly to increasing demands.",
  },
  {
    icon: <DollarSign />,
    title: "Competitive Pricing",
    description: "High-quality services at prices that respect your budget.",
  },
  {
    icon: <ToolCase />,
    title: "Post-launch Support & Maintenance",
    description:
      "We stay by your side after launch, providing reliable support and updates.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
