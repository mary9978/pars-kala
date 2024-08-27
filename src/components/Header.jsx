"use client";
import Image from "next/image";
import Logo from "../../public/img/logo1.png";
import Search from "../../public/img/serchimg.jpg";
import { provinces } from "../data";
import React, { useState, useEffect, useRef } from "react";
import MegaMenu from "./MegaMenu";

function Header() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const [selectedList, setSelectedList] = useState(provinces);
  const [isInitialList, setIsInitialList] = useState(true);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsMenuModalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuModalOpen]);

  const handleItemClick = (city) => {
    const filteredProvinces = provinces.filter((item) => item.name === city);
    if (filteredProvinces) {
      setSelectedList(filteredProvinces);
      setIsInitialList(false);
    }
  };

  const handleBackButtonClick = () => {
    setSelectedList(provinces);
    setIsInitialList(true);
  };

  return (
    <>
      <div className="z-50 menu max-w-[1280px] w-[95%] lg:w-full h-[60px] rounded-2xl lg:rounded-none bg-white px-2 lg:px-3 py-2.5 shadow-md lg:shadow-none fixed top-2">
        <div className="flex gap-2 items-center justify-between w-full">
          <div
            className="inline-block text-Secendry-300 lg:hidden"
            onClick={() => setIsMenuModalOpen(true)}
          >
            <svg className="w-6 h-6">
              <use xlinkHref="#menu"></use>
            </svg>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="w-[98px] max-h[40px] lg:w-[130px] lg:max-h-[60px]">
              <Image src={Logo} alt="logo" width={130} height={60} />
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="rounded-lg w-[400px]">
                <div className="flex items-center rounded-lg border border-Secendry-100 w-full">
                  <button
                    type="button"
                    value="Search"
                    className="bg-gradient-to-r from-orange-600 to-orange-300 p-2 rounded-lg  text-white font-semibold"
                  >
                    <svg className="w-6 h-6">
                      <use xlinkHref="#search"></use>
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="w-full bg-white p-2 text-[15px] text-Secendry-100 font-semibold outline-0"
                    placeholder="جستجو در بین 1500 محصول تخفیف دار"
                    id=""
                    onFocus={() => setIsSearchModalOpen(true)}
                    onBlur={() => setIsSearchModalOpen(false)}
                  />
                  {/* searchModal */}
                  <div
                    className={`${
                      isSearchModalOpen ? "" : "hidden"
                    } border border-Secendry-100 w-full h-auto md:w-[400px] lg:h-[450px] absolute rounded-xl mt-14 top-0 transition-all ease-in-out duration-1000 justify-center items-center bg-white`}
                  >
                    <div className="bg-white rounded-xl ">
                      <div className="p-4 rounded-xl ">
                        <Image
                          src={Search}
                          alt="search"
                          width={380}
                          height={150}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="p-4">
                        <span className="flex items-center gap-3">
                          <svg className="w-6 h-6 text-Secendry-400">
                            <use xlinkHref="#fire"></use>
                          </svg>
                          <span className="text-base font-yekanbach text-Secendry-400">
                            <b>جستجوی پرطرفدار</b>
                          </span>
                        </span>

                        <div className="flex items-center justify-between gap-x-2 gap-y-2 flex-wrap mt-8">
                          <div className="flex items-center justify-between gap-2 p-2 rounded-full border border-Secendry-100 w-auto h-auto bg-transparent text-Secendry-400 group hover:bg-parsBlue transition-all ease-in-out duration-1000">
                            <h5 className="text-xs group-hover:text-white transition-all ease-in-out duration-1000">
                              گوشی و موبایل
                            </h5>

                            <svg className="w-3 h-3 text-Secendry-400 group-hover:text-white transition-all ease-in-out duration-1000">
                              <use xlinkHref="#chevLeft"></use>
                            </svg>
                          </div>

                          <div className="flex items-center justify-between gap-2 p-2 rounded-full border border-Secendry-100 w-auto h-auto bg-transparent text-Secendry-400 group hover:bg-parsBlue transition-all ease-in-out duration-1000">
                            <h5 className="text-xs group-hover:text-white transition-all ease-in-out duration-1000">
                              آیفون
                            </h5>

                            <svg className="w-3 h-3 text-Secendry-400 group-hover:text-white transition-all ease-in-out duration-1000">
                              <use xlinkHref="#chevLeft"></use>
                            </svg>
                          </div>

                          <div className="flex items-center justify-between gap-2 p-2 rounded-full border border-Secendry-100 w-auto h-auto bg-transparent text-Secendry-400 group hover:bg-parsBlue transition-all ease-in-out duration-1000">
                            <h5 className="text-xs group-hover:text-white transition-all ease-in-out duration-1000">
                              اپل واچ
                            </h5>

                            <svg className="w-3 h-3 text-Secendry-400 group-hover:text-white transition-all ease-in-out duration-1000">
                              <use xlinkHref="#chevLeft"></use>
                            </svg>
                          </div>

                          <div className="flex items-center justify-between gap-2 p-2 rounded-full border border-Secendry-100 w-auto h-auto bg-transparent text-Secendry-400 group hover:bg-parsBlue transition-all ease-in-out duration-1000">
                            <h5 className="text-xs group-hover:text-white transition-all ease-in-out duration-1000">
                              مک بوک سری 8
                            </h5>

                            <svg className="w-3 h-3 text-Secendry-400 group-hover:text-white transition-all ease-in-out duration-1000">
                              <use xlinkHref="#chevLeft"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="border border-Secendry-100 rounded-lg p-2.5 text-[10px] hidden lg:flex items-center justify-center gap-0.5 w-[100px] h-[40px]"
              onClick={() => setIsCityModalOpen(true)}
            >
              <span>
                <svg className="w-6 h-6 text-Secendry-400">
                  <use xlinkHref="#map"></use>
                </svg>
              </span>
              <div className="flex flex-col items-center justify-between">
                <span>انتخاب مکان</span>
                <span className="text-parsBlue">فیلتر شهر</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="text-Secendry-400">
              <a href="#">
                <svg className="w-6 h-6">
                  <use xlinkHref="#phone"></use>
                </svg>
              </a>
            </div>

            <div className="border border-Secendry-100 rounded-lg p-2.5 text-[10px] hidden lg:flex items-center justify-center gap-0.5 w-[150px] h-[40px] ">
              <span>
                <svg className="w-6 h-6 text-Secendry-400">
                  <use xlinkHref="#user-cir"></use>
                </svg>
              </span>
              <span className="text-Secendry-300 text-sm">
                <b>ورود / ثبت نام</b>
              </span>
            </div>

            <div
              className="text-Secendry-400 relative hidden lg:inline-block"
              onClick={() => setIsCartModalOpen(true)}
            >
              <a href="#">
                <svg className="w-8 h-8 relative">
                  <use xlinkHref="#shop"></use>
                </svg>
              </a>
              <span className="absolute flex items-center justify-center w-[10px] h-[10px] text-white p-2 text-[10px] bg-Primary-200 rounded-full -top-1 left-0">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- filteMobile --> */}
      <div className="showModalFilter z-50 w-[95%] mt-14 flex items-center justify-between lg:hidden h-[100px]">
        <div className="flex items-center justify-between gap-2">
          <span>
            <svg className="w-6 h-6 text-Primary-100">
              <use xlinkHref="#map"></use>
            </svg>
          </span>
          <span className="text-Secendry-400 tracking-tight text-xs md:text-sm">
            <b>مکان را جهت فیلتر محصولات انتخاب کنید</b>
          </span>
        </div>

        <span>
          <svg className="w-5 h-5 text-Primary-100">
            <use xlinkHref="#chevLeft"></use>
          </svg>
        </span>
      </div>

      {/* <!-- modal login --> */}
      <div
        className={`z-50 ${
          isAccountModalOpen ? "" : "hidden"
        } border border-Secendry-100 w-full h-auto md:w-[400px] lg:h-[450px] absolute rounded-xl mx-auto  transition-all ease-in-out duration-1000 justify-center items-center bg-white`}
      >
        <div className="bg-white rounded-xl ">
          <div className="p-4 rounded-xl ">
            <span
              className={`text-Secendry-300 cursor-pointer`}
              onClick={() => setIsAccountModalOpen(false)}
            >
              &times;
            </span>
            <div className="flex justify-center items-center">
              <img
                className="w-[90px] h-[40px"
                src="img/logo1.png"
                alt="logo"
                loading="lazy"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl ">
            <form action="#">
              <h5 className="text-dark tracking-tight text-base">
                <b>ورود / عضویت </b>
              </h5>
              <span className="text-Secendry-300 text-[12px] tracking-tight">
                موبایل یا ایمیل خود را وارد کنید
              </span>
              <br />
              <input
                type="text"
                className="border border-Secendry-200 rounded-md w-[90%] mt-2"
              />
              <button className="bg-Primary-100 w-[90%] p-3 mt-3 rounded-md text-white tracking-tight text-base">
                ورود / عضویت{" "}
              </button>
              <p className="text-Secendry-300 text-[12px] mt-3 tracking-tight w-[90%] text-justify">
                با ورود و یا ثبت نام در سایت شما
                <a href="#" className="text-parsBlue">
                  شرایط و وقوانین
                </a>
                استفاده از سرویس های سایت و قوانین حریم خصوصی آن را می‌پذیرید.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* <!-- modal shopCart --> */}
      <div
        className={`${
          isCartModalOpen ? "block" : "hidden"
        } z-50  border border-Secendry-100 lg:fixed  h-screen right-0 top-0 transition-all ease-in-out duration-1000 justify-center items-center bg-white`}
      >
        <div className="bg-white ">
          {/* <!-- headerModal --> */}
          <div className="p-4 bg-gradient-to-r from-orange-600 to-orange-400 flex items-center justify-between">
            <span className="text-white text-base">
              <b>شما این محصولات را انتخاب کرده اید</b>
              <span className="rounded-md bg-Secendry-400 px-2 text-sm w-[30px]">
                0
              </span>
            </span>

            <span
              className="text-white left-0 cursor-pointer"
              onClick={() => setIsCartModalOpen(false)}
            >
              &times;
            </span>
          </div>

          {/* <!-- bodyModal --> */}
          <div className="flex flex-col items-center justify-center gap-3 p-8 w-full h-[400px]">
            <img src="img/empty-cart.svg" alt="" />
            <span className="text-dark">
              <b>هیچ محصولی در سبد خرید نیست.</b>
            </span>
            <span className="text-Secendry-300 text-xs">
              جهت مشاهده محصولات بیشتر به صفحات زیر مراجعه نمایید.
            </span>
            <span className="text-parsPurple flex items-center justify-around gap-3">
              <a href="#">فروشگاه</a>|<a href="#"> خانه </a>
            </span>
          </div>
        </div>
      </div>

      {/* <!-- filterModal --> */}
      <div
        className={`${
          isCityModalOpen ? "" : "hidden"
        }  z-50  border border-Secendry-100 w-full h-auto md:w-[420px] lg:h-[450px] fixed overflow-scroll rounded-xl mx-auto  transition-all ease-in-out duration-1000 justify-center items-center bg-white`}
      >
        <div className="bg-white rounded-xl flex flex-col items-center justify-between">
          <div className="p-4 rounded-xl w-full h-[60px]  flex items-center justify-between">
            <span className="">
              <b>فیلتر بر اساس شهر محصول</b>
            </span>
            <span
              className="text-Primary-100 text-sm p-2 rounded-full hover:cursor-pointer bg-transparent hover:bg-red-200 transition-all ease-in-out duration-1000"
              // onClick="removCity()"
            >
              حذف همه
            </span>
          </div>
          <div className="showCheckCity flex flex-wrap items-center justify-between pb-5">
            {/* <!-- <div className="rounded-full px-3 border border-Primary-100 text-Primary-100 flex items-center justify-between text-[12px]">dfgfg</div> --> */}
          </div>
          <div className="border-b border-Secendry-100 w-full flex items-center justify-center pb-2">
            <form
              action="#"
              className="flex items-center justify-between w-[90%] bg-transparent p-2 text-[13px] rounded-xl border border-Secendry-200"
            >
              <button
                type="button"
                value="Search"
                className="p-1 font-semibold"
              >
                <svg className="w-6 h-6 text-Secendry-200">
                  <use xlinkHref="#search"></use>
                </svg>
              </button>
              <input
                type="text"
                className="bg-transparent w-full font-semibold placeholder:text-Secendry-200"
                placeholder="جستجو در شهر ها"
                id=""
              />
            </form>
          </div>

          <div className="citySearch flex flex-col w-full items-center justify-center relative">
            {isInitialList ? (
              selectedList.map((item) => (
                <div className="border-b border-Secendry-100 w-[90%] flex items-center justify-between p-2">
                  <button
                    type="button"
                    key={item.name}
                    onClick={() => handleItemClick(item.name)}
                  >
                    {item.name}
                  </button>
                  <span>
                    <svg className="w-5 h-5 text-Secendry-200">
                      <use xlinkHref="#chevLeft" />
                    </svg>
                  </span>
                </div>
              ))
            ) : (
              <>
                <span
                  className="flex items-center gap-1 justify-center text-sm mt-2 pb-2 border-b border-Secendry-100 cursor-pointer"
                  onClick={handleBackButtonClick}
                >
                  <svg className="w-4 h-4 ">
                    <use xlinkHref="#chevRight" />
                  </svg>
                  <b>همه ی شهرها</b>
                </span>
                <div className="border-b border-Secendry-100 w-[90%] flex flex-col items-center justify-between mt-3 p-2">
                  <div className="border-b border-Secendry-100 flex items-center justify-between p-2 w-full">
                    <label className="ml-auto" htmlFor="county">
                      همه ی شهرهای {selectedList[0].name}
                    </label>
                    <input
                      type="checkbox"
                      name="county"
                      id="county"
                      value={selectedList[0].name}
                    />
                  </div>

                  {selectedList[0].counties.map((item) => (
                    <div className="border-b border-Secendry-100 flex items-center p-2 w-full">
                      <label className="ml-auto" htmlFor={item}>
                        {item}
                      </label>
                      <input
                        type="checkbox"
                        name={item}
                        id={item}
                        value={item}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="z-50 menu w-[95%] h-[60px] rounded-2xl bg-white px-2 py-2.5 shadow-md  fixed bottom-0 mb-2  flex lg:hidden justify-around items-center gap-2">
        <div className="flex flex-col items-center justify-center gap-1 text-Secendry-400  hover:-translate-y-2 transition-all ease-in-out duration-700">
          <svg className="w-6 h-6 ">
            <use xlinkHref="#home"></use>
          </svg>
          <span className="text-[10px] tracking-tighter">
            <a href="index.html">
              <b>خانه</b>
            </a>
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 text-Secendry-400 hover:-translate-y-2 transition-all ease-in-out duration-700">
          <svg className="w-6 h-6">
            <use xlinkHref="#search"></use>
          </svg>
          <span className="text-[10px] tracking-tighter">
            <a href="search.html">
              <b>جستجو</b>
            </a>
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 text-Secendry-400 hover:-translate-y-2 transition-all ease-in-out duration-700">
          <svg className="w-6 h-6 text-Green-1000">
            <use xlinkHref="#category"></use>
          </svg>
          <span className="text-[10px] tracking-tighter">
            <b> دسته بندی</b>
          </span>
        </div>

        <div
          className="flex flex-col items-center justify-center gap-1 text-Secendry-400 hover:-translate-y-2 transition-all ease-in-out duration-700"
          onClick={() => setIsCartModalOpen(true)}
        >
          <svg className="w-6 h-6 ">
            <use xlinkHref="#shop"></use>
          </svg>
          <span className="text-[10px] tracking-tighter">
            <a href="shop.html">
              <b>سبد خرید</b>
            </a>
          </span>
        </div>

        <div
          className="flex flex-col items-center justify-center gap-1 text-Secendry-400 hover:-translate-y-2 transition-all ease-in-out duration-700"
          onClick={() => {
            setIsAccountModalOpen(true);
          }}
        >
          <svg className="w-6 h-6 ">
            <use xlinkHref="#user"></use>
          </svg>
          <span className={`text-[10px] tracking-tighter`}>
            <b>حساب کاربری</b>
          </span>
        </div>
      </div>
      <div className={`${isMenuModalOpen ? "" : "hidden"}`} ref={wrapperRef}>
        <MegaMenu />
      </div>
    </>
  );
}

export default Header;
