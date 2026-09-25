import React from "react";

export const Navbar = () => {
  return (
    <nav className="w-full h-20 border-b flex-shrink-0">
      <div className="w-full max-w-[1400px] h-full mx-auto px-4 flex items-center justify-between">
        <div>Logo</div>
        <ul className="flex items-center gap-6 md:gap-8">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>Login</button>
      </div>
    </nav>
  );
};