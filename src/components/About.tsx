import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Decentrifie
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Decentrify is a groundbreaking decentralized social media platform revolutionizing the way creators engage with their audience. Empowering users with transparent content moderation, direct monetization, and fair revenue sharing, Decentrify puts creators first. With AI-driven content filtering, community-driven governance, and innovative tokenomics, Decentrify fosters a vibrant and inclusive online community where creativity thrives. Join us in reshaping the future of social media, one empowered creator at a time. Welcome to Decentrify, where your voice matters
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
