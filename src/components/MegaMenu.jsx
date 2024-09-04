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
  BiChevronRight,
} from "react-icons/bi";
import { MdFavoriteBorder, MdOutlineArticle } from "react-icons/md";

export default function MegaMenu({ toShow }) {
  const [mainIsShowing, setMainIsShowing] = useState(true);
  return (
    <div
      className={`${
        toShow ? "lg:flex" : "hidden" 
      } fixed z-30 top-1/2  left-1/2 transform -translate-x-1/2  -translate-y-1/2 bg-white text-black rounded-2xl w-[90vw] h-[80vh] shadow-[0_3px_10px_rgb(0,0,0,0.2)]
      lg:absolute lg:top-[50px] lg:right-[0px] lg:translate-x-0 lg:translate-y-0 lg:shadow-none lg:rounded-none lg:h-auto lg:w-[800px] lg:rounded-b-md`}
    >
      <ul
        className={`${
          mainIsShowing ? "" : "hidden lg:block"
        } h-full lg:w-[300px] my-2 lg:my-0 flex flex-col py-4 lg:pt-0 *:flex *:gap-4 *:p-4 hover:*:bg-gray-100 *:transition *:ease-in-out *:duration-500 *:transform `}
      >
        <li>
          <BiHomeAlt size={30} />
          <Link href={"/"}>صفحه اصلی</Link>
        </li>
        <li>
          <BiCategoryAlt size={30} />
          <Link href={"/"}>دسته‌بندی محصولات</Link>
        </li>
        <li
          onClick={() => setMainIsShowing(false)}
          onMouseEnter={() => setMainIsShowing(false)}
        >
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
      <ul
        onMouseLeave={() => setMainIsShowing(true)}
        className={`${
          mainIsShowing ? "hidden" : ""
        }  h-full my-2 flex flex-col py-4 *:flex *:gap-4 *:p-4 hover:*:bg-gray-100 *:transition *:ease-in-out *:duration-500 *:transform `}
      >
        <li onClick={() => setMainIsShowing(true)} className="lg:hidden">
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
