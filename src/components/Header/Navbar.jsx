import { IoMdMenu } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { FcShop } from "react-icons/fc";
import { RiUserSmileFill } from "react-icons/ri";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    console.log(visible);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "-translate-y-[50px]" : "-translate-y-[101px]";
  return (
    <ul
      className={`hidden ${cls} lg:flex fixed z-40 items-center *:p-4 *:pt-2 bg-white w-full *:flex *:gap-2 *:items-center last:*:px-0 transition-transform duration-1000 lg:border-b lg:border-b-secondary-200 lg:shadow-sm`}
    >
      <li>
        <IoMdMenu size={25} />
        <h3 className="font-bold">دسته‌بندی کالاها</h3>
      </li>
      <li>
        <MdHomeFilled size={20} />
        <h3>صفحه اصلی</h3>
      </li>
      <li>
        <FcShop size={20} />
        <h3>لیست کالاها</h3>
      </li>
      <li>
        <RiUserSmileFill size={20} />
        <h3>سوالی دارید؟</h3>
      </li>
      <li className="ml-4 mr-auto border-b-3 border-primary-200 font-bold text-secondary-400">
        <h3>فروش ویژه</h3>
      </li>
    </ul>
  );
}
