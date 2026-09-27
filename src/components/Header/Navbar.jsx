import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed h-20 w-full min-2xl:container mx-auto">
      <div className="w-full max-w-[1280px] h-16 mx-auto mt-3 px-10 flex items-center justify-between bg-white shadow-lg rounded-3xl">
        <Link to={"/"}>
          <div className="w-auto h-10 flex flex-row justify-center gap-2">
            <img src="../src/assets/icon/logo-icon.png" alt="فراسپیا" />
            <h2 className="font-bold text-[18px] my-1">فراسپیا بوتیک</h2>
          </div>
        </Link>
        <ul className="flex items-center gap-8 md:gap-8 mr-16">
          <Link to="#" className="font-bold">
            کالکشن
          </Link>
          <Link to="#" className="font-bold">
            درباره‌ما
          </Link>
          <Link to="#" className="font-bold">
            پشتیبانی
          </Link>
        </ul>
        <input
          type="search"
          placeholder="چی میخوای بپوشی؟"
          className="w-[395px] h-12 rounded-xl bg-white px-5 text-sm outline-none shadow-sm"
        />
        <div className="rounded-full bg-white h-10 px-2 flex items-center justify-center shadow-sm cursor-pointer">🛍️</div>
        <button className="h-10 px-5 rounded-full text-white bg-[#2196F3] outline ml-4 cursor-pointer">
          ورود به حساب
        </button>
      </div>
    </nav>
  );
};
