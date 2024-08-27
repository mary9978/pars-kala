"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BiHomeAlt,
  BiCategoryAlt,
  BiStoreAlt,
  BiPhoneCall,
  BiChevronLeftSquare,
  BiChevronLeft,
  BiChevronRight
} from "react-icons/bi";
import { MdFavoriteBorder, MdOutlineArticle } from "react-icons/md";

export default function MegaMenu() {
  const [mainIsShowing, setMainIsShowing] = useState(true);
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FDFDFD] text-slate-800 rounded-2xl w-[90vw] h-[80vh] shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:flex">
      <ul className={`${mainIsShowing?'':'hidden lg:block'} h-full lg:w-[300px] my-2 flex flex-col py-4 *:flex *:gap-4 *:p-4  *:text-lg hover:*:bg-slate-100 *:transition *:ease-in-out *:duration-500 *:transform `}>
        <li>
          <BiHomeAlt size={30} />
          <Link href={"/"}>صفحه اصلی</Link>
        </li>
        <li>
          <BiCategoryAlt size={30} />
          <Link href={"/"}>دسته‌بندی محصولات</Link>
        </li>
        <li onClick={()=>setMainIsShowing(false)} onMouseEnter={()=>setMainIsShowing(false)}>
          <BiStoreAlt size={30} />
          <p>محصولات</p>
          <BiChevronLeft className="mr-auto" size={30} />
        </li>
        <li>
          <MdFavoriteBorder size={30} />
          <Link href={"/"}>لیست علاقه‌مندی‌ها</Link>
        </li>
        <li>
          <BiPhoneCall size={30} />
          <Link href={"/"}>تماس با ما</Link>
        </li>
        <li>
          <MdOutlineArticle size={30} />
          <Link href={"/"}>آخرین مقالات</Link>
        </li>
        <li>
          <BiChevronLeftSquare size={30} />
          <Link href={"/"}>تست</Link>
        </li>
      </ul>
      <ul onMouseLeave={()=>setMainIsShowing(true)}  className={`${mainIsShowing?'hidden':''}  h-full my-2 flex flex-col py-4 *:flex *:gap-4 *:p-4  *:text-lg hover:*:bg-slate-100 *:transition *:ease-in-out *:duration-500 *:transform `}>
        <li onClick={()=>setMainIsShowing(true)} className="lg:hidden">
          <BiChevronRight size={30} />
          <Link href={"/"}>بازگشت</Link>
        </li>
        <li>
          <Link href={"/"}>دسته‌بندی محصولات</Link>
        </li>
        <li>
          <Link href={"/"}>تماس با ما</Link>
        </li>
        <li>
          <Link href={"/"}>آخرین مقالات</Link>
        </li>
        <li>
          <Link href={"/"}>تست</Link>
        </li>
      </ul>
    </div>
  );
}
