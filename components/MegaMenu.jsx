import Link from "next/link";
import {
  BiHomeAlt,
  BiCategoryAlt,
  BiStoreAlt,
  BiPhoneCall,
  BiChevronLeftSquare,
  BiChevronLeft
} from "react-icons/bi";
import { MdFavoriteBorder, MdOutlineArticle } from "react-icons/md";

export default function MegaMenu() {
  return (
    <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FDFDFD] text-slate-800 rounded-2xl w-[90vw] h-[80vh] flex flex-col px-4 py-8 gap-8 *:flex *:gap-4 *:text-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <li>
        <BiHomeAlt size={30}/>
        <Link href={"/"}>صفحه اصلی</Link>
      </li>
      <li>
        <BiCategoryAlt size={30}/>
        <Link href={"/"}>دسته‌بندی محصولات</Link>
      </li>
      <li>
        <BiStoreAlt size={30}/>
        <p>محصولات</p>
        <BiChevronLeft className="mr-auto" size={30}/>
      </li>
      <li>
        <MdFavoriteBorder size={30}/>
        <Link href={"/"}>لیست علاقه‌مندی‌ها</Link>
      </li>
      <li>
        <BiPhoneCall size={30}/>
        <Link href={"/"}>تماس با ما</Link>
      </li>
      <li>
        <MdOutlineArticle size={30}/>
        <Link href={"/"}>آخرین مقالات</Link>
      </li>
      <li>
        <BiChevronLeftSquare size={30}/>
        <Link href={"/"}>تست</Link>
      </li>
    </ul>
  );
}
