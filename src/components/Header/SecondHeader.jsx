import { IoMdMenu } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { FcShop } from "react-icons/fc";
import { RiUserSmileFill } from "react-icons/ri";

export default function SecondHeader() {
  return (
    <ul className="hidden lg:flex items-center *:p-4 bg-white w-full *:flex *:gap-2 *:items-center last:*:px-0">
      <li>
        <IoMdMenu size={25}/>
        <h3 className="font-bold">دسته‌بندی کالاها</h3>
      </li>
      <li>
        <MdHomeFilled size={20}/>
        <h3>صفحه اصلی</h3>
      </li>
      <li>
        <FcShop size={20}/>
        <h3>لیست کالاها</h3>
      </li>
      <li>
        <RiUserSmileFill size={20}/>
        <h3>سوالی دارید؟</h3>
      </li>
      <li className="ml-4 mr-auto border-b-3 border-primary-200 font-bold text-secondary-400">
        <h3>فروش ویژه</h3>
      </li>
    </ul>
  );
}
