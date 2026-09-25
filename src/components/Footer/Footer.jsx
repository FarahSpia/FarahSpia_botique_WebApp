import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full border-t mt-20 flex-shrink-0">
      <div className="w-full max-w-[1400px] mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
           <ul className="flex flex-col space-y-2 text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <ul className="flex flex-col space-y-2 text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
         <ul className="flex flex-col space-y-2 text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 flex items-center justify-center text-xs">
        Test
      </div>
    </footer>
  );
};