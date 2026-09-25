// Header.jsx
import React from "react";
import { Navbar } from "./Navbar";
import { Herosection } from "./Herosection";

export const Header = () => {
  return (
    <header className="w-full border-2 border-green-500">
      <Navbar />
      <Herosection />
    </header>
  );
};