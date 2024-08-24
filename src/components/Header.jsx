import React from "react";
import Image from "next/image";
import Logo from "../../public/img/logo1.png"
import Search from "../../public/img/serchimg.jpg"

function Header() {
  return (
    <div class="z-50 menu max-w-[1280px] w-[95%] lg:w-full h-[60px] rounded-2xl lg:rounded-none bg-white px-2 lg:px-3 py-2.5 shadow-md lg:shadow-none fixed top-2">
      <div class="flex gap-2 items-center justify-between w-full">
        <div class="inline-block text-Secendry-300 lg:hidden">
          <svg class="w-6 h-6">
            <use xlinkHref="#menu"></use>
          </svg>
        </div>

        <div class="flex items-center justify-between gap-3">
          <div class="w-[98px] max-h[40px] lg:w-[130px] lg:max-h-[60px]">
            <Image src={Logo} alt="logo" width={130} height={60}/>
          </div>

          <div class="hidden lg:flex items-center justify-center">
            <div class="rounded-lg w-[400px]">
              <div class="flex items-center rounded-lg border border-Secendry-100 w-full">
                <button
                  type="button"
                  value="Search"
                  class="bg-gradient-to-r from-orange-600 to-orange-300 p-2 rounded-lg  text-white font-semibold"
                >
                  <svg class="w-6 h-6">
                    <use xlinkHref="#search"></use>
                  </svg>
                </button>
                <input
                  type="text"
                  class="search1 w-full bg-white p-2 text-[15px] text-Secendry-100 font-semibold outline-0"
                  placeholder="جستجو در بین 1500 محصول تخفیف دار"
                  id=""
                />
                {/* searchModal */}
                <div class="modalSearch hidden border border-Secendry-100 w-full h-auto md:w-[400px] lg:h-[450px] absolute rounded-xl mt-14 top-0 transition-all ease-in-out duration-1000 justify-center items-center bg-white ">
                  <div class="bg-white rounded-xl ">
                    <div class="p-4 rounded-xl ">
                      <Image src={Search} alt="search" width={20} height={20} className="rounded-xl"/>
                    </div>

                    <div class="p-4">
                      <span class="flex items-center gap-3">
                        <svg class="w-6 h-6 text-Secendry-400">
                          <use xlinkHref="#fire"></use>
                        </svg>
                        <span class="text-base font-body text-Secendry-400">
                          <b>جستجوی پرطرفدار</b>
                        </span>
                      </span>

                      <div class="flex items-center justify-between gap-x-2 gap-y-2 flex-wrap mt-8">
                        <div class="flex items-center justify-between gap-2 p-2 rounded-full border border-Secendry-100 w-auto h-auto bg-transparent text-Secendry-400 group hover:bg-parsBlue transition-all ease-in-out duration-1000">
                          <h5 class="text-xs group-hover:text-white transition-all ease-in-out duration-1000">
                            گوشی و موبایل
                          </h5>

                          <svg class="w-3 h-3 text-Secendry-400 group-hover:text-white transition-all ease-in-out duration-1000">
                            <use xlinkHref="#chevLeft"></use>
                          </svg>
                        </div>

                        <div class="flex items-center justify-between gap-2 p-2 rounded-full border border-Secendry-100 w-auto h-auto bg-transparent text-Secendry-400 group hover:bg-parsBlue transition-all ease-in-out duration-1000">
                          <h5 class="text-xs group-hover:text-white transition-all ease-in-out duration-1000">
                            آیفون
                          </h5>

                          <svg class="w-3 h-3 text-Secendry-400 group-hover:text-white transition-all ease-in-out duration-1000">
                            <use xlinkHref="#chevLeft"></use>
                          </svg>
                        </div>

                        <div class="flex items-center justify-between gap-2 p-2 rounded-full border border-Secendry-100 w-auto h-auto bg-transparent text-Secendry-400 group hover:bg-parsBlue transition-all ease-in-out duration-1000">
                          <h5 class="text-xs group-hover:text-white transition-all ease-in-out duration-1000">
                            اپل واچ
                          </h5>

                          <svg class="w-3 h-3 text-Secendry-400 group-hover:text-white transition-all ease-in-out duration-1000">
                            <use xlinkHref="#chevLeft"></use>
                          </svg>
                        </div>

                        <div class="flex items-center justify-between gap-2 p-2 rounded-full border border-Secendry-100 w-auto h-auto bg-transparent text-Secendry-400 group hover:bg-parsBlue transition-all ease-in-out duration-1000">
                          <h5 class="text-xs group-hover:text-white transition-all ease-in-out duration-1000">
                            مک بوک سری 8
                          </h5>

                          <svg class="w-3 h-3 text-Secendry-400 group-hover:text-white transition-all ease-in-out duration-1000">
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

          <div class="border border-Secendry-100 rounded-lg p-2.5 text-[10px] hidden lg:flex items-center justify-center gap-0.5 w-[100px] h-[40px] showModalFilter">
            <span>
              <svg class="w-6 h-6 text-Secendry-400">
                <use xlinkHref="#map"></use>
              </svg>
            </span>
            <div class="flex flex-col items-center justify-between">
              <span>انتخاب مکان</span>
              <span class="text-parsBlue">فیلتر شهر</span>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between gap-3">
          <div class="text-Secendry-400">
            <a href="#">
              <svg class="w-6 h-6">
                <use xlinkHref="#phone"></use>
              </svg>
            </a>
          </div>

          <div class="border border-Secendry-100 rounded-lg p-2.5 text-[10px] hidden lg:flex items-center justify-center gap-0.5 w-[150px] h-[40px] ">
            <span>
              <svg class="w-6 h-6 text-Secendry-400">
                <use xlinkHref="#user-cir"></use>
              </svg>
            </span>
            <span class="text-Secendry-300 text-sm">
              <b>ورود / ثبت نام</b>
            </span>
          </div>

          <div class="text-Secendry-400 relative hidden lg:inline-block showModalShopCart">
            <a href="#">
              <svg class="w-8 h-8 relative">
                <use xlinkHref="#shop"></use>
              </svg>
            </a>
            <span class="absolute flex items-center justify-center w-[10px] h-[10px] text-white p-2 text-[10px] bg-Primary-200 rounded-full -top-1 left-0">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
