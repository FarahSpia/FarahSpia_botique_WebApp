

export const Navbar = () => {
  return (
    <nav className="fixed h-20 bg-white w-full min-2xl:container mx-auto outline ">
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