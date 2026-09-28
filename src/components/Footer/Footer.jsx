import {footSection} from "../../data/Footer/footSection.data";
import { FaInstagram } from "react-icons/fa";
import FooterLink from "./footerLink";

export const Footer = () => {
  return (
     <main  className={`w-full   flex flex-col items-center  `}>
      <footer className="w-full bg-[#455A64] max-w-[1530px] h-full mx-auto  px-10">

    <div className="w-full  max-w-[1440px] mx-auto 
        py-15 flex flex-row max-xl:flex-wrap gap-8 justify-between
      ">

         <section className="w-[28%] max-md:w-full  max-md:h-[40%] h-full">
           <h1 className="w-full text-[#FFFFFF] h-[30%] p-1 font-bold text-[30px]">
            فراسپیا
           </h1>
           <h3 className="w-[95%] h-[70%] text-[gray] pt-2 font-medium text-[14px]">
             بوتیک مستقل و بین‌المللی، طراحی مد لوکس و محصولات <br/>دست‌ساز منحصربه‌فرد. با تعهد به پارچه‌های اصیل، ساختارهای معمارانه و هنر ماندگار.
           </h3>
        </section>  
        
      <section className="w-[60%] max-md:w-full max-md:h-[60%] h-full 
         flex min-md:flex-row flex-col  justify-evenly
       ">
            {footSection.map((section,index)=>(
               <FooterLink
               key={index}
                title={section.title}
                icon = {section.icon}
                items = {section.items}
                moreLink={section.moreLink}
               />
            ))}
       </section>  
      </div>  

      <section className="border-t border-[gray]/80 py-4 flex flex-row justify-between items-center  text-xs">
          <div className="border rounded-full border-[gray] p-2">
         <FaInstagram className="w-6 h-6 text-[white]"/>
         </div>
        <div dir="ltr" className="flex flex-row gap-2 text-[12px] max-lg:text-[8px] whitespace-nowrap text-[gray] items-center ">
          <p >فراسپیا. تمامی حقوق محفوظ است</p>
         <p >۱۴۰۵ ©</p>
          <p>حریم شخصی</p>
         <p>شرایط استفاده</p>
         </div>
      </section>

    </footer>
    </main>
  );
};



{/* <div className="w-full max-w-[1400px] mx-auto  py-10 flex flex-col md:flex-row gap-8">
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
      </div> */}