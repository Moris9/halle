import AppLayout from "../../layouts/AppLayout.jsx";
import {BiCar, BiHealth, BiLaptop} from "react-icons/bi";
import {BuildingOfficeIcon} from "@heroicons/react/20/solid/index.js";
import {GiVacuumCleaner} from "react-icons/gi";
import {FaHandshake} from "react-icons/fa";
import {MdWork} from "react-icons/md";
import {BsPersonCircle} from "react-icons/bs";
import InputField from "../../components/fields/InputField.jsx";
import RegisterImage from "../../assets/register.svg"
import Worker from "../../assets/images/worker.jpg"
import ProvidersPhone from "../../assets/providers-phone.svg";
import ProvidersCall from "../../assets/providers-call.svg";
import ProvidersMoney from "../../assets/providers-money.svg"
import GuideImg from "../../assets/images/img.png"
import GuideBg from "../../assets/guide.svg"
import MainCategories from "../../components/MainCategories.jsx";
function ExpertRegister() {
    return (
        <>
            <AppLayout>
                <div className="mx-auto p-24">
                    <h1 className="text-black text-4xl font-bold">دسترسی آسان به هزاران مشتری
                       </h1>
                    <div className="indent-4 mt-10">
                        <ul>
                            <li> عضویت بدون نیاز به مراجعه حضوری
                             </li>
                            <li>
                                دریافت کار با هر مهارتی در محدوده‌ی انتخابی خودتان
                            </li>
                        </ul>
                    </div>

                    <section className="mt-5">
                        <h2 className="text-2xl text-center">
                            در <span className="text-blue-700">حله</span> مشتری ها به دنبال خدمات زیر هستند
                        </h2>
                        <MainCategories/>
                    </section>
                </div>
                    <section className="flex-col overflow-hidden relative flex min-h-[807px]">
                            <img
                                loading="lazy"
                                srcSet={Worker}
                                className="absolute z-[-1] brightness-50 h-full w-full object-cover object-center inset-0"
                             alt="وب سایت خدماتی حله"/>
                            <div className="relative self-stretch flex w-full flex-col pt-52 pb-28 px-5 max-md:max-w-full">
                                <div className="flex mb-0 w-[487px] max-w-full flex-col mr-48 max-md:mr-2.5 max-md:mb-2.5">
                                    <div className="text-white text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                        چگونه در <span className="text-blue-700">حله</span> درآمد کسب کنیم؟
                                    </div>
                                    <p className="text-white text-xl leading-[166.667%] max-w-[434px] mt-11 max-md:mt-10">
                                        با حله هیچ وقت بیکار نیستی!
                                    </p>
                                    <div dir="ltr"  className="flex w-[273px] max-w-full items-start justify-between gap-5 mt-3.5">
                                        <div className="text-sky-500 text-base justify-center items-center rounded shadow-[0px_20px_40px_-12px_rgba(0,0,0,0.25)] bg-white w-[167px] max-w-full mt-7 px-4 py-3">
                                            دریافت سفارشات
                                        </div>
                                        <svg  className="aspect-[1.27] object-cover object-center w-20 overflow-hidden max-w-full"
                                                width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M77.7924 0.804141C72.2724 32.7768 38.3716 48.3069 2.98076 51.8381C2.37304 51.8997 1.93609 52.3666 2.00891 52.8809C2.08172 53.3951 2.63341 53.7648 3.24113 53.7032C39.6233 50.0749 74.314 33.9428 79.988 1.07429C80.0776 0.562383 79.6575 0.0860309 79.0498 0.0101934C78.4448 -0.0656442 77.882 0.289868 77.7924 0.804141Z" fill="white"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.77523 52.705C5.34915 51.731 7.34036 50.527 7.56161 50.3848C13.5576 46.5313 18.5258 42.0972 22.9003 36.8952C23.256 36.4734 23.1383 35.8856 22.6398 35.5847C22.1413 35.2837 21.4469 35.3833 21.0912 35.8051C16.8511 40.8507 12.0342 45.1521 6.21739 48.8895C5.87852 49.1075 1.40034 51.8115 0.543362 52.4159C0.19049 52.6623 0.0813442 52.8946 0.0617402 52.9515C-0.0558838 53.2501 0.0141086 53.4847 0.109328 53.6553C0.21855 53.8473 0.490135 54.127 1.01664 54.2692C1.56835 54.4161 2.79506 54.4825 3.10312 54.5204C7.74927 55.1034 12.9948 55.4115 17.7697 56.5301C22.3235 57.5965 26.4542 59.4024 29.1036 63.0213C29.4256 63.4621 30.1118 63.5972 30.6327 63.3246C31.1536 63.0521 31.3133 62.4715 30.9912 62.0307C28.0282 57.9852 23.452 55.9115 18.3634 54.7194C13.6164 53.6079 8.41858 53.2714 3.77523 52.705Z" fill="white"/>
                                        </svg>


                                    </div>
                                    <div className="flex max-w-full justify-between items-baseline gap-5 mt-20 max-md:mt-10">
                                        <div className="px-5">
                                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                                    <div className="items-start border flex w-full grow flex-col flex-1 mx-auto pt-10 pb-14 px-5 rounded-xl  max-md:mt-9">
                                                        <div className="self-center flex w-[375px] max-w-full flex-col">
                                                            <div className="justify-center items-center flex w-[55px] max-w-full flex-col">
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet={ProvidersPhone}
                                                                    className="aspect-square object-cover object-center w-full overflow-hidden self-stretch grow scale-[2.2]"
                                                                />
                                                            </div>
                                                            <h3 className="text-white text-2xl font-medium leading-[166.667%] w-full mt-4">
                                                                دریافت سفارش در اپلیکیشن
                                                            </h3>
                                                            <p className="text-white text-justify text-opacity-80 text-sm mt-5">
                                                                ما مشتریانی مطابق با تخصصتان به شما معرفی میکنیم. تعیین اجرتها و زمان در دسترس بودن کاملا در اختیار شماست. می توانید برای هر سفارشی که مایلید پیشنهاد انجام کار بفرستید.

                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                                    <div className="items-start border flex w-full grow flex-col flex-1 mx-auto pt-10 pb-14 px-5 rounded-xl max-md:mt-9">
                                                        <div className="self-center flex w-[275px] max-w-full flex-col">
                                                            <div className="justify-center items-center flex w-[55px] max-w-full flex-col">
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet={ProvidersCall}
                                                                    className="aspect-square object-cover object-center w-full overflow-hidden self-stretch grow scale-[2.2]"
                                                                />
                                                            </div>
                                                            <h3 className="text-white text-2xl font-medium leading-[166.667%] w-full mt-4">
                                                                تماس با مشتریان
                                                            </h3>
                                                            <p className="text-white text-justify text-opacity-80 text-sm mt-5">
                                                                پیشنهاد شما به مشتریان نمایش داده می شود و اطلاعات تماستان در اختیارشان قرار می گیرد. از طریق چت هم می توانید بیشتر در مورد جزییات کار صحبت کنید.


                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                                    <div className="items-start border flex w-full grow flex-col flex-1 mx-auto pt-10 pb-14 px-5 rounded-xl max-md:mt-9">
                                                        <div className="self-center flex w-[375px] max-w-full flex-col">
                                                            <div className="justify-center items-center flex w-[55px] max-w-full flex-col">
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet={ProvidersMoney}
                                                                    className="aspect-square scale-[2.2] object-cover object-center w-full overflow-hidden self-stretch grow"
                                                                />
                                                            </div>
                                                            <h3 className="text-white text-2xl font-medium leading-[166.667%] w-full mt-4">
                                                                تمام درآمد کار متعلق به شماست
                                                            </h3>
                                                            <p className="text-white text-justify text-opacity-80 text-sm mt-5">
                                                                پس از به توافق رسیدن و انجام کار، مشتری مستقیما وجه را به شما پرداخــت می کند و خدمت از ما هیچ درصدی از اجرت کار بر نمی دارد.

                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </section>

                <section className="flex-col overflow-hidden relative flex min-h-[888px] px-5">
                    <img
                        loading="lazy"
                        srcSet={GuideImg}
                        className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    />
                    <img
                        loading="lazy"
                        srcSet={GuideBg}
                        className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative self-center w-[739px] max-w-full mt-24 mb-24 max-md:my-10">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[96%] max-md:w-full max-md:ml-0" >
                                <div className="relative flex grow flex-col max-md:max-w-full max-md:mt-10">
                                    <h2 className="text-white text-center text-5xl font-semibold self-center max-w-[527px] ml-6 max-md:max-w-full max-md:text-4xl">
                                        همکار و همراهتان هستیم
                                    </h2>
                                    <p className="text-white mt-5">
                                        ما به شما آموزش‌های لازم را می‌دهیم و از شما حمایت می‌کنیم تا در کسب درآمد موفق باشید
                                        هر زمانی که سوالی دارید، می توانید با ما تماس بگیرید یا چت کنید
                                    </p>
                                    <div className="w-[601px] max-w-full mt-11 max-md:mt-10" >
                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                            <div className="flex flex-col items-stretch w-[6%] max-md:w-full max-md:ml-0">
                                                <div className="text-white text-2xl font-semibold self-stretch bg-rose-500 w-[38px] h-[38px] max-w-full mx-auto flex text-center  pr-3  rounded-full">
                                                    1
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-stretch w-[94%] ml-5 max-md:w-full max-md:ml-0">
                                                <div className="bg-white flex grow flex-col w-full mt-5 mx-auto pl-5 pr-5 py-8 rounded-xl max-md:max-w-full">
                                                    <div className="flex w-[510px] max-w-full items-start justify-between gap-5 max-md:flex-wrap">

                                                        <div className="flex flex-col grow shrink-0 basis-auto max-md:max-w-full">
                                                            <div className="text-black text-center text-lg font-medium">
                                                                پشتیبانی آنلاین و در دسترس

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                            <div className="flex flex-col items-stretch w-[5%] max-md:w-full max-md:ml-0">
                                                <svg   className="aspect-[0.22] object-cover object-center w-[29px] overflow-hidden my-auto max-md:mt-10"
                                                       width="30" height="130" viewBox="0 0 30 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.13304 1.48903C14.3046 10.4755 20.0215 23.1116 22.6019 36.8876C26.4984 57.6922 23.2459 81.101 17.222 98.6575C13.4372 109.692 7.18795 115.892 1.14041 125.802C0.895674 126.203 1.0223 126.727 1.42375 126.972C1.82305 127.216 2.34901 127.09 2.5916 126.688C8.70998 116.663 15.0022 110.373 18.8321 99.2092C24.9398 81.408 28.2244 57.6708 24.2743 36.5742C21.623 22.4182 15.7129 9.44938 5.26011 0.213842C4.90803 -0.097444 4.37136 -0.0652755 4.06008 0.2868C3.74879 0.638875 3.78096 1.17774 4.13304 1.48903Z" fill="white"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.68119 129.085C1.7048 129.051 1.85718 128.819 2.00531 128.638C2.615 127.887 3.80218 126.67 5.39081 125.223C10.7256 120.375 20.5687 112.969 28.6815 112.226C29.1495 112.183 29.493 111.769 29.4501 111.301C29.4071 110.833 28.9949 110.487 28.5269 110.53C20.0857 111.303 9.79603 118.92 4.24655 123.965C3.50376 124.641 2.84262 125.27 2.28445 125.83C2.76534 123.462 3.30626 121.112 3.87516 118.761C5.51532 111.994 5.53248 105.801 4.13491 98.9266C4.0426 98.4672 3.59179 98.1689 3.13238 98.2633C2.67296 98.3556 2.37459 98.8064 2.46905 99.2658C3.81294 105.882 3.80009 111.846 2.22219 118.359C1.47939 121.432 0.783797 124.508 0.202015 127.614C0.144051 127.924 0.0023748 128.729 0.000228 128.844C-0.0126528 129.506 0.524047 129.669 0.644268 129.699C0.702232 129.714 1.43216 129.858 1.68119 129.085ZM0.0817812 128.505C0.0753408 128.527 0.0667327 128.548 0.0602923 128.572C0.0645859 128.553 0.073194 128.531 0.0817812 128.505Z" fill="white"/>
                                                </svg>


                                            </div>
                                            <div className="flex flex-col items-stretch w-[95%] ml-5 max-md:w-full max-md:ml-0">
                                                <div className="flex grow flex-col max-md:max-w-full max-md:mt-7">
                                                    <div className="self-stretch max-md:max-w-full">
                                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                            <div className="flex flex-col items-stretch w-[6%] max-md:w-full max-md:ml-0">
                                                                <div className="text-white text-2xl font-semibold self-stretch bg-blue-500 w-[38px] h-[38px] max-w-full mx-auto flex text-center  pr-3  rounded-full">
                                                                    2
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col items-stretch w-[94%] ml-5 max-md:w-full max-md:ml-0">
                                                                <div className="bg-white flex grow flex-col w-full mt-5 mx-auto pl-5 pr-5 py-8 rounded-xl max-md:max-w-full">
                                                                    <div className="flex w-[509px] max-w-full items-start justify-between gap-5 max-md:flex-wrap">

                                                                        <div className="flex flex-col grow shrink-0 basis-auto max-md:max-w-full">
                                                                            <div className="text-black text-center text-lg font-medium">
                                                                                آموزش گام به گام

                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                            <div className="flex flex-col items-stretch w-[6%] max-md:w-full max-md:ml-0">
                                                                <div className="text-white text-2xl font-semibold self-stretch bg-rose-500 w-[38px] h-[38px] max-w-full mx-auto flex text-center pr-3  rounded-full">                                                                    3
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col items-stretch w-[94%] ml-5 max-md:w-full max-md:ml-0">
                                                                <div className="bg-white flex grow flex-col w-full mt-5 mx-auto px-5 py-8 rounded-xl max-md:max-w-full">
                                                                    <div className="flex w-[507px] max-w-full items-start justify-between gap-5 max-md:flex-wrap">
                                                                        <div className="flex flex-col grow shrink-0 basis-auto max-md:max-w-full">
                                                                            <div className="text-black text-center text-lg font-medium">
                                                                                مشاوره برای افزایش درآمد

                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-stretch w-[4%] ml-5 max-md:w-full max-md:ml-0">
                                <svg  className="aspect-[0.22] object-cover object-center w-[29px] overflow-hidden my-auto max-md:mt-10"
                                       width="30" height="230" viewBox="0 0 30 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3207 1.48903C15.1492 10.4755 9.43228 23.1116 6.85182 36.8876C2.95538 57.6922 6.20779 81.101 12.2317 98.6575C16.0165 109.692 22.2658 115.892 28.3133 125.802C28.5581 126.203 28.4314 126.727 28.03 126.972C27.6307 127.216 27.1047 127.09 26.8621 126.688C20.7438 116.663 14.4515 110.373 10.6216 99.2092C4.51397 81.408 1.22934 57.6708 5.17945 36.5742C7.83075 22.4182 13.7409 9.44938 24.1936 0.213842C24.5457 -0.097444 25.0824 -0.0652755 25.3937 0.2868C25.7049 0.638875 25.6728 1.17774 25.3207 1.48903Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7725 129.085C27.7489 129.051 27.5966 128.819 27.4484 128.639C26.8387 127.887 25.6516 126.67 24.0629 125.223C18.7281 120.376 8.88499 112.969 0.772238 112.226C0.304235 112.183 -0.0392704 111.769 0.00366592 111.301C0.0466022 110.833 0.458851 110.487 0.926853 110.53C9.36807 111.303 19.6577 118.92 25.2072 123.965C25.95 124.641 26.6111 125.27 27.1693 125.831C26.6884 123.463 26.1475 121.112 25.5786 118.761C23.9384 111.994 23.9213 105.801 25.3188 98.9269C25.4111 98.4675 25.8619 98.1691 26.3214 98.2636C26.7808 98.3559 27.0791 98.8067 26.9847 99.2661C25.6408 105.883 25.6537 111.846 27.2315 118.36C27.9743 121.432 28.6699 124.508 29.2517 127.615C29.3097 127.924 29.4514 128.729 29.4535 128.845C29.4664 129.506 28.9297 129.669 28.8095 129.699C28.7515 129.714 28.0216 129.858 27.7725 129.085ZM29.372 128.506C29.3784 128.527 29.387 128.548 29.3934 128.572C29.3891 128.553 29.3805 128.531 29.372 128.506Z" fill="white"/>
                                </svg>


                            </div>
                        </div>
                    </div>
                </section>

                    <section className="mt-10">
                        <div className="justify-end items-center bg-sky-100 flex flex-col p-5">
                            <div className="self-center w-full max-w-[1751px] max-md:max-w-full">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-[35%] max-md:w-full">
                                        <img
                                            loading="lazy"
                                            src={RegisterImage}
                                            className="aspect-[0.99] object-cover object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-52"
                                         alt="ثبت نام در حله"/>
                                    </div>
                                    <div className="flex flex-col items-stretch w-[65%] ml-5 max-md:w-full">
                                        <div className="bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-3xl max-md:max-w-full max-md:mt-12">
                                            <div className="self-center flex ml-0 w-[758px] max-w-full flex-col mt-24">
                                                <h2 className="text-black text-2xl font-semibold self-center max-w-[310px] ml-2.5">
                                                    فرم ثبت نام
                                                </h2>

                                            </div>
                                            <div className="self-center flex w-[764px] max-w-full flex-col space-y-10">
                                                <InputField className="text-[rgba(0,0,0,0.50)] text-xl self-stretch max-w-[285px] bg-gray-400 bg-opacity-40 grow mt-2.5 pt-6 pb-6 px-5 rounded-3xl max-md:max-w-full max-md:pl-2.5"
                                                            placeholder="نام و نام خانوادگی را وارد کنید"
                                                            variant="auth"
                                                            extra="space-y-2"
                                                            name="name"
                                                            label="   نام و نام خانوادگی*"
                                                            type="text"
                                                />
                                                <InputField className="text-[rgba(0,0,0,0.50)] text-xl self-stretch max-w-[285px] bg-gray-400 bg-opacity-40 grow mt-2.5 pt-6 pb-6 px-5 rounded-3xl max-md:max-w-full max-md:pl-2.5"
                                                            placeholder="ایمیل را وارد کنید"
                                                            variant="auth"
                                                            extra="space-y-2"
                                                            name="email"
                                                            label="ایمیل*"
                                                            type="email"
                                                />

                                                <InputField className="text-[rgba(0,0,0,0.50)] text-xl self-stretch max-w-[285px] bg-gray-400 bg-opacity-40 grow mt-2.5 pt-6 pb-6 px-5 rounded-3xl max-md:max-w-full max-md:pl-2.5"
                                                            placeholder="کد ملی تان را وارد کنید"
                                                            variant="auth"
                                                            extra="space-y-2"
                                                            name="national_code"
                                                            label="کد ملی *"
                                                            type="text"
                                                />

                                                <InputField className="text-[rgba(0,0,0,0.50)] text-xl self-stretch max-w-[285px] bg-gray-400 bg-opacity-40 grow mt-2.5 pt-6 pb-6 px-5 rounded-3xl max-md:max-w-full max-md:pl-2.5"
                                                            placeholder="شماره تماس"
                                                            variant="auth"
                                                            extra="space-y-2"
                                                            label="شماره تماس*"
                                                            type="tel"
                                                />

                                                <div className="my-5">
                                                    <label htmlFor="category" className="text-sm text-navy-700 dark:text-white">دسته بندی*</label>
                                                    <select name="category_id"
                                                            onChange=""
                                                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl  border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 text-black dark:text-white" id="category">
                                                        <option >دسته بندی  را انتخاب کنید</option>
                                                      <option></option>
                                                    </select>
                                                </div>

                                                <div className="my-5">
                                                    <label htmlFor="category" className="text-sm text-navy-700 dark:text-white">سرویس*</label>
                                                    <select name="subcategory_id"
                                                            onChange=""
                                                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl  border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 text-black dark:text-white" id="category">
                                                        <option >سرویس را انتخاب کنید</option>
                                                        <option></option>
                                                    </select>
                                                </div>

                                                <div className="">
                                                    <label htmlFor="category" className="text-sm text-navy-700 dark:text-white">تخصص*</label>
                                                    <select name="service_id"
                                                            onChange=""
                                                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl  border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 text-black dark:text-white" id="category">
                                                        <option >تخصص تان  را انتخاب کنید</option>
                                                        <option></option>
                                                    </select>
                                                </div>


                                                    <InputField className="text-[rgba(0,0,0,0.50)] text-xl self-stretch max-w-[285px] bg-gray-400 bg-opacity-40 grow mt-2.5 pt-6 pb-6 px-5 rounded-3xl max-md:max-w-full max-md:pl-2.5"
                                                                placeholder="رمز عبور"
                                                                variant="auth"
                                                                extra="space-y-2"
                                                                label="رمز عبور*"
                                                                type="password"
                                                    />
                                                    <InputField className="text-[rgba(0,0,0,0.50)] text-xl self-stretch max-w-[285px] bg-gray-400 bg-opacity-40 grow mt-2.5 pt-6 pb-6 px-5 rounded-3xl max-md:max-w-full max-md:pl-2.5"
                                                                placeholder="رمز عبورتان را دوباره وارد کنید"
                                                                variant="auth"
                                                                extra="space-y-2"
                                                                label="تکرار رمز عبور*"
                                                                type="c_password"
                                                    />

                                                <div className="bg-sky-100 self-stretch flex flex-col mr-3.5 mt-10 px-5 py-5 rounded-[30px_20px] max-md:max-w-full max-md:mr-2.5">
                                                    <button className="text-black text-2xl font-medium self-center w-[125px] -ml-1.5 mt-0.5 -mb-0.5">
                                                        ثبت نام
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

            </AppLayout>

        </>
    )
}

export default ExpertRegister