import AppLayout from "../../layouts/AppLayout.jsx";
import {BiCar, BiHealth, BiLaptop} from "react-icons/bi";
import {BuildingOfficeIcon} from "@heroicons/react/20/solid/index.js";
import {GiVacuumCleaner} from "react-icons/gi";
import {FaHandshake} from "react-icons/fa";
import {MdWork} from "react-icons/md";
import {BsPersonCircle} from "react-icons/bs";
import InputField from "../../components/fields/InputField.jsx";
import RegisterImage from "../../assets/register.svg"
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
                            <li>
                                بدون نیاز به پرداخت کمیسیون یا حق عضویت
                            </li>
                        </ul>
                    </div>

                    <section className="mt-5">
                        <h2 className="text-2xl text-center">
                            در "خدمت از ما" مشتری ها به دنبال خدمات زیر هستند
                        </h2>
                        <div className="flex gap-10 container justify-center mt-6">
                            <span className="text-center"><BsPersonCircle className="m-5 h-10 w-10"/>زیبایی</span>
                            <span className="text-center"><BuildingOfficeIcon className="m-5 h-10 w-10"/>ساختمان</span>
                            <span className="text-center"><BiLaptop className="m-5 h-10 w-10"/>دیجیتال</span>
                            <span className="text-center"><BiCar className="m-5 h-10 w-10"/>خوردو و حمل و نقل</span>
                            <span className="text-center"><FaHandshake className="m-5 h-10 w-10"/>کسب و کار</span>
                            <span className="text-center"><BiHealth className="m-5 h-10 w-10"/>سلامت</span>
                            <span className="text-center"><MdWork className="m-5 h-10 w-10"/>تاسیسات</span>
                            <span className="text-center"><GiVacuumCleaner className="m-5 h-10 w-10"/>نظافت</span>
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
                                        />
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
                </div>
            </AppLayout>

        </>
    )
}

export default ExpertRegister