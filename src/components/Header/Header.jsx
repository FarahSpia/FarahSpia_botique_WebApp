// Header.jsx
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header  className={`w-full fixed h-20 flex flex-col items-center `}>
      <Navbar />
    </header>
  );
};