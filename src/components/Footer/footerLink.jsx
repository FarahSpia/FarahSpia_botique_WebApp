// import { IoIosArrowRoundBack } from "react-icons/io";
// import type { IconType} from "react-icons/lib";



const footerLink = ({title,icon:Icon,items,moreLink})=>{

    return(
     <nav className="whitespace-nowrap flex flex-col gap-3 ">
        
        <div className=" text-[18px] text-[#FFFFFF] font-bold flex flex-row  justify-start items-center gap-4 w-full">
           {/* <Icon/> */}
          <div>{title}</div>
        </div>

       <ul className="text-[13px] text-[gray] leading-[30px]">
        {items.map((item)=>(
           <li key={item.id}><a href={item.href}>{item.label}</a></li>
        ))}
       </ul>  

     {/* <a href={moreLink.href} className="flex flex-row w-full items-center text-[15px] hover:text-[blue]/50 hover:cursor-pointer">
        موارد بیشتر
        <IoIosArrowRoundBack/>
        </a> */}
      </nav>
    )
}
export default footerLink