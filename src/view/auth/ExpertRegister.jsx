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
                        <div className="flex gap-10 container justify-center mt-6">
                            <span className="text-center"><BsPersonCircle className="m-5 h-10 w-10"/>زیبایی</span>
                            <span className="text-center"><BuildingOfficeIcon className="m-5 h-10 w-10"/>ساختمان</span>
                            <span className="text-center"><BiLaptop className="m-5 h-10 w-10"/>دیجیتال</span>
                            <span className="text-center"><span className="flex justify-center"><BiCar className="m-5 h-10 w-10"/></span>خوردو و حمل و نقل</span>
                            <span className="text-center"><FaHandshake className="m-5 h-10 w-10"/>کسب و کار</span>
                            <span className="text-center"><BiHealth className="m-5 h-10 w-10"/>سلامت</span>
                            <span className="text-center"><MdWork className="m-5 h-10 w-10"/>تاسیسات</span>
                            <span className="text-center"><GiVacuumCleaner className="m-5 h-10 w-10"/>نظافت</span>
                        </div>
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
                                                            label="   نام و نام خانوادگی*"
                                                            type="text"
                                                />
                                                <InputField className="text-[rgba(0,0,0,0.50)] text-xl self-stretch max-w-[285px] bg-gray-400 bg-opacity-40 grow mt-2.5 pt-6 pb-6 px-5 rounded-3xl max-md:max-w-full max-md:pl-2.5"
                                                            placeholder="ایمیل را وارد کنید"
                                                            variant="auth"
                                                            extra="space-y-2"
                                                            label="ایمیل*"
                                                            type="email"
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
                                                    <select name="category_id"
                                                            onChange=""
                                                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl  border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 text-black dark:text-white" id="category">
                                                        <option >سرویس را انتخاب کنید</option>
                                                        <option></option>
                                                    </select>
                                                </div>

                                                <div className="">
                                                    <label htmlFor="category" className="text-sm text-navy-700 dark:text-white">تخصص*</label>
                                                    <select name="category_id"
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
                                                                type="password"
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