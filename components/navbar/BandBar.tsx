import React from "react";
import Container from "../Container";
import { Facebook, Instagram, Twitch, Twitter } from "lucide-react";

const BandBar = () => {
  return (
    <div className="bg-primary hidden sm:block py-2">
      <Container>
        <div className="flex items-center justify-between ">
          <p className="text-primary-foreground text-lg">
            Bize ulaşın: <span className="hover:text-yellow-500 transition-all duration-300 cursor-pointer">+90 555 555 55 55</span>
          </p>

          <div className="flex it gap-4">
            <Instagram
              size={20}
              className="transition-all duration-200 text-white cursor-pointer hover:text-secondary-foreground"
            />
            <Twitch
              size={20}
              className="transition-all duration-200 cursor-pointer text-white hover:text-secondary-foreground"
            />
            <Twitter
              size={20}
              className="transition-all duration-200 cursor-pointer text-white hover:text-secondary-foreground"
            />
            <Facebook
              size={20}
              className="transition-all duration-200 cursor-pointer text-white hover:text-secondary-foreground"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BandBar;
