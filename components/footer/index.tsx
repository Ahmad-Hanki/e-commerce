import Container from "../Container";
import { Separator } from "../ui/separator";
import Links from "../Link";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Logo from "../Logo";
const Footer = () => {
  const navItems = [
    {
      name: "Ana Sayfa",
      href: "/",
    },
    {
      name: "Hakkımızda",
      href: "/about ",
    },

    {
      name: "İletişim",
      href: "/contact",
    },
  ];
  const hizmet = [
    {
      name: "Siparişlerim",
      href: "/my-orders",
    },
    {
      name: "İade",
      href: "/return",
    },
  ];
  const Musteri = [
    {
      name: "Sipareş ve Teslimat",
      href: "/handling-orders",
    },
    {
      name: "Gizlilik Politikasi",
      href: "/privacy-policy",
    },

    {
      name: "Şartlar Koşullar",
      href: "/terms-conditions",
    },
    {
      name: "Kvkk Politikasi",
      href: "/kvkk-policy",
    },
    {
      name: "Iptal Iade Kosullari",
      href: "/cancel-return-conditions",
    },
    {
      name: "Banka Hesap Bilgileri",
      href: "/bank-account-information",
    },
    {
      name: "Mesafeli Satis Sozlesmesi",
      href: "/distance-sales-agreement",
    },
  ];

  return (
    <div className="bg-popover border border-t dark:border-0">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row lg:justify-between gap-12">
          <div className="w-full space-y-4 mx-auto flex justify-center flex-col">
            <Logo w="w-16" />
            <p className="text-base text-muted-foreground">
              [Mağaza Adınız] olarak, kaliteyi ve müşteri memnuniyetini ön
              planda tutarak benzersiz bir alışveriş deneyimi sunuyoruz. Özenle
              seçtiğimiz ürünlerimizle en yeni trendleri ve zamansız parçaları
              bir araya getiriyoruz. Alışverişinizi keyifli, kolay ve güvenilir
              hale getirmek için buradayız. Bizi tercih ettiğiniz için teşekkür
              ederiz!
            </p>
          </div>

          <div className="w-full ">
            <div className="space-y-4 ">
              <p className="text-xl text-secondary-foreground ">
                Hızlı Erişim
              </p>
              <div className="flex flex-col gap-2 ">
                {navItems.map((item) => (
                  <Links key={item.href} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full ">
            <div className="space-y-4 ">
              <p className="text-xl text-secondary-foreground ">
                Müşteri Hizmetleri
              </p>
              <div className="flex flex-col gap-2 ">
                {hizmet.map((item) => (
                  <Links key={item.href} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full ">
            <div className="space-y-4 ">
              <p className="text-xl text-secondary-foreground ">
                Müşteri İlişkileri
              </p>
              <div className="flex flex-col gap-2 ">
                {Musteri.map((item) => (
                  <Links key={item.href} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full flex  ">
            <div className=" space-y-4">
              <p className="text-xl text-secondary-foreground ">Bize Takip</p>
              <div className="flex items-center gap-2">
                <InstagramLogoIcon className="text-muted-foreground hover:text-secondary-foreground transition-all duration-300 cursor-pointer w-7 h-7" />
                <TwitterLogoIcon className="text-muted-foreground hover:text-secondary-foreground transition-all duration-300 cursor-pointer w-7 h-7" />
                <LinkedInLogoIcon className="text-muted-foreground hover:text-secondary-foreground transition-all duration-300 cursor-pointer w-7 h-7" />
                <GitHubLogoIcon className="text-muted-foreground hover:text-secondary-foreground transition-all duration-300 cursor-pointer w-7 h-7" />
              </div>
              <div className="flex items-center w-full">
                <Input
                  placeholder="Your Email"
                  className={cn(
                    "rounded-md h-[40px] flex-1 w-full text-secondary-foreground ",
                    "rounded-r-none"
                  )}
                />
                <Button
                  variant={"default"}
                  className={cn(
                    "rounded-md h-[40px] w-[30%]",
                    "rounded-l-none"
                  )}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="py-5  ">
          {/* generate a copy right */}
          <p className="text-muted-foreground text-center">
            © 2021 [Mağaza Adınız]. Tüm hakları saklıdır.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
