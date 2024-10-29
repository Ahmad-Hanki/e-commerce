"use client";
import React from "react";
import Container from "../Container";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BandBar = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      title: "Ana Sayfa",
      url: "/",
      active: pathname === "/",
    },
    {
      title: "Hakkımızda",
      url: "/about",
      active: pathname === "/about",
    },
    {
      title: "İletişim",
      url: "/contact",
      active: pathname === "/contact",
    },
  ];
  return (
    <div className="bg-primary hidden sm:block py-2">
      <Container>
        <div className="flex items-center justify-between ">
          <p className="text-primary-foreground text-lg">
            Bize ulaşın:{" "}
            <span className="hover:text-yellow-500 transition-all duration-300 cursor-pointer">
              +90 555 555 55 55
            </span>
          </p>

          <div className="flex gap-3 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className={`hover:text-yellow-500 transition-all duration-300 cursor-pointer ${
                  link.active ? "text-yellow-500" : "text-secondary"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex it gap-4">
            <InstagramLogoIcon
              width={25}
              height={25}
              className="transition-all duration-200 text-white cursor-pointer hover:text-yellow-500"
            />
            <LinkedInLogoIcon
              width={25}
              height={25}
              className="transition-all duration-200 cursor-pointer text-white hover:text-yellow-500"
            />
            <TwitterLogoIcon
              width={25}
              height={25}
              className="transition-all duration-200 cursor-pointer text-white hover:text-yellow-500"
            />
            <GitHubLogoIcon
              width={25}
              height={25}
              className="transition-all duration-200 cursor-pointer text-white hover:text-yellow-500"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BandBar;
