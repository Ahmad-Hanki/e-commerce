import { Truck, Medal } from "lucide-react";
import SupportIcon from "@/public/icons/SupportIcon";
import Container from "@/components/Container";
import PaymentIcon from "@/public/icons/PaymentIcon";
import { cn } from "@/lib/utils";

const featuresData = [
  {
    title: "Ücretsiz Kargo",
    icon: <Truck size={50} />,
    bg: "bg-green-200",
  },
  {
    title: "100% kaliteli",
    icon: <Medal size={50} />,
    bg: "bg-yellow-200",
  },
  {
    title: "Ödeme Güvenliği",
    icon: <PaymentIcon height={50} width={50} />,
    bg: "bg-blue-200",
  },

  {
    title: "7/24 Destek",
    icon: <SupportIcon height={50} width={50} />,
    bg: "bg-purple-200",
  },
];

const Features = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div
                className={cn(
                  `aspect-square h-28 rounded-full flex justify-center items-center ${feature.bg} transition-all group duration-300 hover:bg-primary/70 hover:text-white`
                )}
              >
                <div className="p-4 border rounded-full border-primary group-hover:border-white">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-lg font-semibold">{feature.title}</h4>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Features;
