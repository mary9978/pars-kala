import React from "react";

function Footer() {
  return (
    <div class="container bg-neutral-100 relative max-w-[1280px] w-full flex justify-center">
      <footer class="flex flex-col p-3  border-t border-t-Secendry-200  w-full">
        <div class="flex items-center justify-between p-2 w-full">
          <img
            src="img/parskala-types.png"
            class="w-[90px] h-[40px] sm:w-[130px] sm:h-[48px]"
            alt="logo"
            loading="lazy"
          />

          <span class="flex items-center justify-between gap-2 p-3 rounded-xl border border-Secendry-200 text-Secendry-200">
            <a href="#top">
              <h4>بازگشت به بالا</h4>
            </a>
            <svg class="w-5 h-5 ">
              <use xlinkhref="#chevTop"></use>
            </svg>
          </span>
        </div>

        <div class="flex flex-col lg:flex-row items-start justify-between lg:justify-start gap-2 lg:gap-5 mt-2">
          <span class="text-sm lg:text-[20px]">
            <b>شماره تماس: 061-535-10225</b>
          </span>
          <span class="text-sm lg:text-[20px] text-black">
            <b>آدرس ایمیل: info@parskala.com</b>
          </span>
          <span class="text-sm lg:text-[20px] text-black">
            <b>هفت روز هفته ، 24 ساعت شبانه‌روز پاسخگوی شما هستیم.</b>
          </span>
        </div>

        <div class="mt-3 lg:mt-8 lg:hidden">
          <div class="relative mb-3">
            <h6 class="mb-0">
              <button
                class="relative flex items-center justify-between w-full p-4 font-semibold  
                    transition-all ease-in  cursor-pointer
                    bg-Secendry-100 rounded-lg group text-dark-500"
                data-collapse-target="animated-collapse-1"
              >
                <span>راهنمای خرید</span>
                <i class="absolute left-0 pt-1 text-base transition-transform fa fa-chevron-down group-open:rotate-180"></i>
              </button>
            </h6>
            
            <div
              data-collapse="animated-collapse-1"
              class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div class="p-4 text-sm leading-normal text-Secendry-300 text-justify gap-2 flex flex-col items-start justify-between">
                <span class="cursor-pointer">
                  <a href="">نحوه ثبت سفارش</a>
                </span>
                <span class="cursor-pointer">
                  <a href="">رویه ارسال سفارش</a>
                </span>
                <span class="cursor-pointer">
                  <a href="">شیوه‌های پرداخت</a>
                </span>
                <span class="cursor-pointer">
                  <a href="">رویه‌های بازگرداندن کالا</a>
                </span>
              </div>
            </div>
          </div>

          <div class="relative mb-3">
            <h6 class="mb-0">
              <button
                class="relative flex items-center justify-between w-full p-4 font-semibold  
                    transition-all ease-in  cursor-pointer
                    bg-Secendry-100 rounded-lg group text-dark-500"
                data-collapse-target="animated-collapse-2"
              >
                <span>با پارس کالا</span>
                <i class="absolute left-0 pt-1 text-base transition-transform fa fa-chevron-down group-open:rotate-180"></i>
              </button>
            </h6>
            <div
              data-collapse="animated-collapse-2"
              class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div class="p-4 text-sm leading-normal text-Secendry-300 text-justify gap-2 flex flex-col items-start justify-between">
                <span class="cursor-pointer">
                  <a href="">حریم خصوصی</a>
                </span>
                <span class="cursor-pointer">
                  <a href=""> شرایط استفاده</a>
                </span>
                <span class="cursor-pointer">
                  <a href="">رویه‌های بازگرداندن کالا</a>
                </span>
                <span class="cursor-pointer">
                  <a href="">پاسخ به پرسش‌های متداول</a>
                </span>
              </div>
            </div>
          </div>

          <div class="relative mb-3">
            <h6 class="mb-0">
              <button
                class="relative flex items-center justify-between w-full p-4 font-semibold  
                    transition-all ease-in  cursor-pointer
                    bg-Secendry-100 rounded-lg group text-dark-500"
                data-collapse-target="animated-collapse-3"
              >
                <span>درباره ما</span>
                <i class="absolute left-0 pt-1 text-base transition-transform fa fa-chevron-down group-open:rotate-180"></i>
              </button>
            </h6>
            <div
              data-collapse="animated-collapse-3"
              class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div class="p-4 text-sm leading-normal text-Secendry-300 text-justify gap-2 flex flex-col items-start justify-between">
                <span class="cursor-pointer">
                  <a href="">اتاق خبر پارس کالا</a>
                </span>
                <span class="cursor-pointer">
                  <a href="">فروش در پارس کالا</a>
                </span>
                <span class="cursor-pointer">
                  <a href="">فرصت های شغلی </a>
                </span>
                <span class="cursor-pointer">
                  <a href="">تماس با پارس کالا</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex lg:items-start lg:justify-between lg:gap-5 mt-10">
          <ul class="flex flex-col justify-between items-start gap-y-5 child:text-[18px]">
            <li>
              <a href="" className="text-xl">
                <b>راهنمای خرید</b>
              </a>
            </li>
            <li class="text-Secendry-400">
              <a href="">نحوه ثبت سفارش</a>
            </li>
            <li class="text-Secendry-400">
              <a href="">رویه ارسال سفارش</a>
            </li>
            <li class="text-Secendry-400">
              <a href="">شیوه های پرداخت</a>
            </li>
            <li class="text-Secendry-400">
              <a href="">رویه های بازگرداندن کالا</a>
            </li>
          </ul>

          <ul class="flex flex-col justify-between items-start gap-y-5 child:text-[18px]">
            <li>
              <a href="" className="text-xl">
                <b>با پارس کالا</b>
              </a>
            </li>
            <li class="text-Secendry-400">
              <a href="">حریم خصوصی</a>
            </li>
            <li class="text-Secendry-400">
              <a href="">شرایط استفاده</a>
            </li>
            <li class="text-Secendry-400">
              <a href="">رویه های بازگرداندن کالا</a>
            </li>
            <li class="text-Secendry-400">
              <a href="">پاسخ به سوالات متداول</a>
            </li>
          </ul>

          <ul class="flex flex-col justify-between items-start gap-y-5 child:text-[18px] child:tracking-tighter">
            <li>
              <a href="" className="text-xl">
                <b>درباره ما</b>
              </a>
            </li>
            <li class="text-Secendry-400">
              <a href="">اتاق خبر پارس کالا</a>
            </li>
            <li class="text-Secendry-400">
              <a href="">فروش در پارس کالا</a>
            </li>
            <li class="text-Secendry-400">
              <a href="">فرصت‌های شغلی</a>
            </li>
            <li class="text-Secendry-400">
              <a href="">تماس با پارس کالا</a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-start lg:items-center justify-between mt-3 gap-2 lg:flex-row">
          <div class="flex flex-col items-start lg:items-center justify-between mt-3 gap-2">
            <h4 class="text-black font-bold w-full text-wrap lg:text-[20px]">
              فروشگاه اینترنتی پارس کالا، بررسی، انتخاب و خرید آنلاین
            </h4>
            <p
              id="textMore"
              class="text-Secendry-300 text-justify w-full lg:text-[18px] h-[55px] overflow-hidden line-clamp-2 transition-all ease-in-out duration-1000"
            >
              پارس کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش
              از یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، ۷ روز ضمانت
              بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های
              معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض
              ورود به سایت دیجی‌کالا با دنیایی از کالا رو به رو می‌شوید! هر آنچه
              که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
              پارس کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش
              از یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، ۷ روز ضمانت
              بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های
              معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض
              ورود به سایت دیجی‌کالا با دنیایی از کالا رو به رو می‌شوید! هر آنچه
              که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
            </p>
            <a href="">
              <b>
                <span class="text-Primary-100 cursor-pointer more1">
                  مطالب بیشتر
                </span>
              </b>
            </a>
            <a href="">
              <b>
                <span class="text-Primary-100 cursor-pointer hidden more2">
                  مطالب کمتر
                </span>
              </b>
            </a>
          </div>
          <div class="flex items-center justify-between lg:justify-center gap-2 mt-5 w-full">
            <div class="w-[85px] border border-Secendry-200 p-2 h-[85px] rounded-lg">
              <img
                src="img/1e5dab5a.png"
                class="w-[73px]"
                alt=""
                loading="lazy"
              />
            </div>
            <div class="w-[85px] border border-Secendry-200 p-4 h-[85px] rounded-lg">
              <img
                src="img/enamad.png"
                class="w-[73px]"
                alt=""
                loading="lazy"
              />
            </div>
            <div class="w-[85px] border border-Secendry-200 p-2 h-[85px] rounded-lg">
              <img
                src="img/samandehi.png"
                class="w-[73px]"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div class="mt-2 lg:mt-5 text-gray-950 lg:text-[18px]">
          استفاده از مطالب فروشگاه اینترنتی پارس کالا فقط برای مقاصد غیرتجاری و
          با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به پارس کالا
          می‌باشد. Copyright © 2006 - 2022
        </div>
      </footer>
    </div>
  );
}

export default Footer;
