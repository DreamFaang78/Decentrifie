import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Bull Crypto 1000X",
    userName: "@john_Doe",
    comment: "Your project is fantastic 🔥 🚀",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "CryptoPamela100x💎",
    userName: "@john_Doe1",
    comment:
      "This project is fantastic! I'm intrigued and would like to discuss it further",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Mr Big Whale 100x ",
    userName: "@john_Doe2",
    comment:
      "Hey 👋 I really liked your project.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Crypto Professor",
    userName: "@john_Doe3",
    comment:
      "It is an amazing 👏 project that is  needed for the future.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "The Monkey Calls 🐒",
    userName: "@john_Doe4",
    comment:
      "We definitely need to discuss something huge for your project",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Crypto Jack",
    userName: "@john_Doe5",
    comment:
      "Nice Idea 💡 when will you launching this",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover What
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        Saying About Us
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      Your feedback shapes our future. Join the conversation and let's build something incredible together!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
