import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main
      dir="rtl"
      className="min-h-screen w-full flex items-center justify-center px-4 outline"
    >
      <div
        className="
          w-full
          max-w-5xl
          min-h-[400px]
          flex
          flex-col
          lg:flex-row
          items-center
          justify-center
          gap-8
          lg:gap-10
        "
      >
        <div
          className="
            order-1
            lg:order-2
            w-full
            lg:w-1/2
            sm:w-[350px]
            flex
            justify-center
            items-center
          "
        >
          <div
            className="
              w-full
              max-w-[450px]
              flex
              justify-center
              bg-white
              shadow-xl
              rounded-xl
              p-4
            "
          >
            <img
              src="src/assets/image/404Image.png"
              alt="404 Error"
              className="
                w-full
                h-auto
                object-contain
              "
            />
          </div>
        </div>

        <div
          className="
            order-2
            lg:order-1
            w-full
            lg:w-1/2
            flex
            flex-col
            items-center
            lg:items-start
            justify-center
            text-center
            lg:text-right
          "
        >
          <span
            dir="ltr"
            className="
              text-[45px]
              sm:text-[55px]
              md:text-[65px]
              lg:text-[70px]
              xl:text-[80px]
              font-medium
              text-[#2196F3]
              leading-none
            "
          >
            —404
          </span>

          <div>
            <h1
              className="
                mt-4
                text-xl
                sm:text-2xl
                md:text-3xl
                font-bold
                text-[#263238]
              "
            >
              صفحه مورد نظر پیدا نشد
            </h1>

            <p
              className="
                mt-3
                w-full
                max-w-[520px]
                text-sm
                sm:text-[15px]
                leading-7
                text-[#68747D]
              "
            >
              به نظر می‌رسد آدرس این صفحه تغییر کرده یا دیگر در دسترس نیست.
              نگران نباشید، می‌توانید به صفحه اصلی برگردید و یا به جست‌وجوی
              خود ادامه دهید.
            </p>
          </div>

          <button
            className="
              mt-4
              flex
              items-center
              justify-center
              bg-[#2196F3]
              rounded-full
              gap-4
              text-white
              px-5
              md:px-6
              py-3
              text-sm
              font-medium
              shadow-[0_5px_15px_rgba(33,150,243,0.3)]
              transition
              hover:bg-[#1687df]
              hover:duration-300
              delay-150
              ease-in-out
              hover:-translate-y-1 
              hover:scale-110
              cursor-pointer
            "
          >
            <Link to="/">
            بازگشت به صفحه اصلی
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
};