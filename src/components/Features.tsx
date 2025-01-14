import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Exclusive NFT Integration",
    description:
      "Seamlessly mint, trade, and collect unique digital assets within the platform, unlocking new possibilities for creators and collectors alike.",
    image: image4,
  },
  {
    title: "Real-Time Livestreaming",
    description:
      " Engage with your audience in real-time through dynamic livestreaming features, fostering genuine connections and interactive experiences.",
    image: image3,
  },
  {
    title: "Instant Monetization",
    description:
      "Monetize your content instantly with built-in monetization options, empowering you to earn revenue from your creativity from day one.",
    image: image,
  },
];

const featureList: string[] = [
  "Community-driven Governance",
  "Privacy Protection",
  "Creative Collaboration Tools",
  "Content Discovery",
  "Token Rewards",
  "Decentralized Marketplace",
  "Cross-Platform Integration",
  "Education and Support",
  "Environmental Sustainability",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
