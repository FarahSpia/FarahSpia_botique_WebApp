import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="h-20 w-full min-2xl:container max-md:px-5 mt-2 mx-auto">
      <div className="w-full max-w-[1440px] px-3  h-16 mx-auto mt-3 flex items-center justify-between backdrop-blur-xs shadow-lg rounded-3xl">
         <div className="flex flex-row items-center">
        <Link to={"/"}>
          <div className="w-auto h-10 flex flex-row items-center justify-center gap-2">
            <img src="../src/assets/icon/logo-icon.png" alt="فراسپیا" />
            <h2 className="font-bold text-[18px] max-md:text-[12px] my-1">فراسپیا بوتیک</h2>
          </div>
        </Link>

        <ul className="flex items-center max-xl:hidden block gap-8 md:gap-8 mr-16">
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
        </div>
        

        <div className="flex flex-row items-center gap-5">
          <input
          type="search"
          placeholder="چی میخوای بپوشی؟"
          className="w-[490px] max-md:w-[200px] max-lg:w-[330px] h-12 rounded-xl bg-white px-5 text-sm outline-none shadow-sm"
        />
        
        <div className="flex flex-row items-center gap-2 max-md:hidden block">
          <div className="rounded-full bg-white h-10 px-2 flex items-center justify-center shadow-sm cursor-pointer">🛍️</div>
          <button className="h-10 px-5 rounded-full text-white bg-[#2196F3] outline ml-4 cursor-pointer">
            ورود به حساب
          </button>
          </div>

        </div>

      </div>
    </nav>
  );
};
