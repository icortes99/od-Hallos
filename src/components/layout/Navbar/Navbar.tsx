import React from "react";
import Image from "next/image";
import Button from "../../common/Button/Button";
import Link from "next/link";

export const Navbar = () => {
  const navItems = ["/events", "/prices"];

  return (
    <header className="flex justify-between items-center px-4 py-[20px] h-full">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/LogoHallos.svg"
            alt="Hallos Logo"
            width={88}
            height={47}
            priority
          />
        </Link>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Links */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item}
              className="text-white font-medium hover:text-gray-400 transition text-text2"
            >
              {item === "/events" ? "Events" : "Prices"}
            </a>
          ))}
        </nav>

        {/* Language Switcher */}
        <div
          className="flex items-center justify-between w-[62px] h-[34px] rounded-[17px] bg-[rgba(217,217,217,0.12)] opacity-70"
          style={{
            padding: "3px 4px 3px 3px",
          }}
        >
          <div className="flex items-center justify-center w-[28px] h-[28px] rounded-full overflow-hidden">
            <Image
              src="/Spain.svg"
              alt="Spanish Flag"
              width={28}
              height={28}
            />
          </div>
          <div className="flex items-center justify-center w-[16px] h-[16px] m-[9px] opacity-50">
            <Image
              src="/Frame.svg"
              alt="Dropdown Icon"
              width={16}
              height={16}
            />
          </div>
        </div>

        <div>
          {/* Login Button */}
          <Button type="outline" className="mr-[20px]">
            login
          </Button>

          {/* Create Event Button */}
          <Button type="primary">
            Create event
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden items-center">
        <button
          className="text-white text-2xl leading-7 cursor-pointer"
        >
          ☰ {/* Icono de hamburguesa */}
        </button>
      </div>
    </header>
  );
};