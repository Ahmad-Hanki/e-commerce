import Container from "@/components/Container";
import { Card } from "@/components/ui/card";
import { Phone, Map, Mail } from "lucide-react";
interface ContactDataProps {
  contactData: string;
  address: string;
  phone: string;
  email: string;
}

const ContactData = ({
  address,
  contactData,
  email,
  phone,
}: ContactDataProps) => {
  const data = [
    {
      icon: <Map size={30} />,
      text: address,
      info: "25 Aralık, Tüfekçi Yusuf Blv. No:86, 27100 Şahinbey/Gaziantep",
    },
    {
      icon: <Phone size={30} />,
      text: phone,
      info: "+90 999 99 99 00 0",
    },
    {
      icon: <Mail size={30} />,
      text: email,
      info: "email@provider.com",
    },
  ];
  return (
    <div className="py-20">
      <h3 className="text-center text-5xl font-semibold mb-5">{contactData}</h3>
      <Container>
        <div className="flex flex-wrap justify-center gap-5 w-full ">
          {data.map((item, index) => (
            <Card
              key={index}
              className="w-full h-full aspect-square max-w-[300px] py-3 px-4 space-y-6"
            >
              <div>{item.icon}</div>

              <div className="flex flex-col gap-3">
                <h4 className="text-xl">{item.text}</h4>

                <p className="text-muted-foreground">{item.info}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ContactData;
