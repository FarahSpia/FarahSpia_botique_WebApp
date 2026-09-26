

export const Footer = () => {
  return (
     <main  className={`w-full   flex flex-col items-center outline `}>
        <footer className="w-full  max-w-[1400px] h-full mx-auto border px-4">

      <div className="w-full max-w-[1400px] mx-auto  py-10 flex flex-col md:flex-row gap-8">
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
    </main>
  );
};