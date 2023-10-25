import AppLayout from "../layouts/AppLayout.jsx";
import {Helmet} from "react-helmet";
import {useState} from "react";
import {BiCar, BiHealth, BiHome, BiLaptop} from "react-icons/bi";
import {Link} from "react-router-dom";
import worker_1 from "../assets/worker_1.svg"
import worker_2 from "../assets/worker_2.svg"
import {BsPersonCircle} from "react-icons/bs";
import {BuildingOfficeIcon} from "@heroicons/react/20/solid/index.js";
import {FaHandshake} from "react-icons/fa";
import {MdWork} from "react-icons/md";
import {GiVacuumCleaner} from "react-icons/gi";
import SerchIcon from "../assets/search.svg";

function Home() {
    const [activeTab, setActiveTab] = useState('page1');
    const switchTab = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <>
            <Helmet>
                <title>حله</title>
            </Helmet>

            <AppLayout>
                <div className="mx-auto">
                    <section className="px-14">
                        <ul className="text-center flex gap-4 text-gray-900 p-10 self-center">
                            <li>
                                <span
                                    onClick={() => switchTab('page1')}
                                    className={` justify-center cursor-pointer py-4 ${activeTab === 'page1' ? 'bg-white border-b-2 border-indigo-500 shadow text-indigo-900' : ''}`}
                                >
                                   یافتن متخصصین
                                </span>
                            </li>
                            <li>
                                <span
                                    onClick={() => switchTab('page2')}
                                    className={` justify-center mt-5 cursor-pointer py-4 ${activeTab === 'page2' ? 'bg-white border-b-2 border-indigo-500  shadow text-indigo-900' : ''}`}
                                >
                                    ثبت نام متخصصین
                                </span>
                            </li>
                        </ul>

                        {activeTab === 'page1' && (
                            <div className="p-5 container">
                                <h1 className="text-4xl font-semibold">
                                    با <span className="text-blue-700">حله</span> در کمترین زمان متخصص مورد نیازتو پیدا کن
                                </h1>
                                <div className="flex gap-12">
                                    <div className="self-center max-w-2xl">
                                        <p className="text-black leading-10 text-justify">وقت کم میاری؟ ⏰ نیاز داری به یک تخصص ولی پیدا نمی کنی؟ دامنه ی انتخابت برای پیدا کردن یک تخصص کوچیکه؟ تفاوت قیمت ها زیاده؟</p>
                                        <p className="text-black mt-2 leading-10 text-justify">ما در اینجا همه این مشکلات را از بین می بریم. به راحتی بهترین متخصص برای رفع نیازت با بهترین قیمت پیدا کن.</p>

                                            <div className="relative flex items-center w-full overflow-hidden mt-5">
                                                <div className="flex w-[723px] max-w-full items-start justify-between gap-5 ml-4 max-md:flex-wrap max-md:justify-center">
                                                    <div className="self-center align-middle rounded-lg flex w-full border-2 border-black max-w-full justify-between gap-5 my-auto">
                                                        <input
                                                            className="peer-[${1}]:${0}  py-10 h-full w-full outline-none text-sm text-gray-700 pr-2"
                                                            type="text"
                                                            id="search"
                                                            placeholder="به چه خدمتی نیاز دارید؟" />

                                                        <button className=" px-2 py-4">
                                                            <img
                                                                loading="lazy"
                                                                srcSet={SerchIcon}
                                                                className="aspect-square object-cover object-center w-11 overflow-hidden self-center max-w-full my-auto"
                                                            />
                                                        </button>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                    <div className="flex justify-end">
                                        <img className="w-4/5" src={worker_1} loading="lazy" alt="worker"/>
                                    </div>
                                </div>

                            </div>
                        )}

                        {activeTab === 'page2' && (
                            <div className="p-5">
                                <h1  className="text-4xl font-semibold">
                                    با <span className="text-blue-700">حله</span> کارت را معرفی کن
                                </h1>
                                <div className="flex gap-12">
                                    <div className="self-center">
                                        <p className="text-black leading-10 text-justify w-[74.666667%]">می خواهی مشتری های بیشتری داشته باشی؟ کیفیت کارت بالاست ولی کار کم؟ میخوای اسم در کنی؟ قیمتت مناسب ارائه میدی ولی بازخورد باید را نداری؟ ما حلش می کنیم! با ما باش تا مشتری را به راحتی پیدات کنه و سفارش هات چند برابر باشه!</p>

                                        <div className="flex">
                                            <a href="/providers" className="bg-transparent text-center w-2/3 mt-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                                شروع کنید
                                            </a>
                                        </div>
                                    </div>
                                    <div className="my-5">
                                        <img className="w-full" src={worker_2} alt="worker"/>
                                    </div>
                                </div>


                            </div>
                        )}
                    </section>
                    <section className="mt-10 bg-blue-200  py-10">
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
                    <section className="mt-10 py-10 px-6">
                        <h2 className="text-4xl font-bold">خدمات محبوب در زنجان</h2>
                        <div className="mt-10 grid sm:grid-cols-6  xl:sm:grid-cols-6 grid-cols-6 gap-1">


                            <article className="relative w-full rounded-lg h-48 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                     style={{backgroundImage:`url(https://khedmatazma.com/images/subservices/site_image/full/214--w255-h170-q70.jpg)`}}>
                                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                    <div className="text-center">
                                        <h3 className="mb-10">
                                            <Link className="text-white sm:text-4xl text-2xl font-extrabold  text-center"  to="/e-category">
                                                <span className="absolute inset-0"></span>
                                                نظافت منزل   </Link>
                                        </h3>
                                        <a className="z-10 relative text-sm font-medium transition rounded-full pt-2 pb-2 px-4 bg-blue-800/70 text-blue-100 ring-1 ring-inset ring-blue-400/20 hover:bg-blue-400/10 hover:text-blue-300 hover:ring-blue-300" href="/login">
                                            ثبت سفارش</a>
                                    </div>

                                </div>

                            </article>


                            <article className="relative w-full rounded-lg h-48 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                     style={{backgroundImage:`url(https://khedmatazma.com/images/subservices/site_image/full/214--w255-h170-q70.jpg)`}}>
                                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                    <div className="text-center">
                                        <h3 className="mb-10">
                                            <Link className="text-white sm:text-4xl text-2xl font-extrabold  text-center"  to="/e-category">
                                                <span className="absolute inset-0"></span>
                                                نظافت منزل   </Link>
                                        </h3>
                                        <a className="z-10 relative text-sm font-medium transition rounded-full pt-2 pb-2 px-4 bg-blue-800/70 text-blue-100 ring-1 ring-inset ring-blue-400/20 hover:bg-blue-400/10 hover:text-blue-300 hover:ring-blue-300" href="/login">
                                            ثبت سفارش</a>
                                    </div>

                                </div>

                            </article>



                            <article className="relative w-full rounded-lg h-48 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                     style={{backgroundImage:`url(https://khedmatazma.com/images/subservices/site_image/full/214--w255-h170-q70.jpg)`}}>
                                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                    <div className="text-center">
                                        <h3 className="mb-10">
                                            <Link className="text-white sm:text-4xl text-2xl font-extrabold  text-center"  to="/e-category">
                                                <span className="absolute inset-0"></span>
                                                نظافت منزل   </Link>
                                        </h3>
                                        <a className="z-10 relative text-sm font-medium transition rounded-full pt-2 pb-2 px-4 bg-blue-800/70 text-blue-100 ring-1 ring-inset ring-blue-400/20 hover:bg-blue-400/10 hover:text-blue-300 hover:ring-blue-300" href="/login">
                                            ثبت سفارش</a>
                                    </div>

                                </div>

                            </article>


                            <article className="relative w-full rounded-lg h-48 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                     style={{backgroundImage:`url(https://khedmatazma.com/images/subservices/site_image/full/214--w255-h170-q70.jpg)`}}>
                                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                    <div className="text-center">
                                        <h3 className="mb-10">
                                            <Link className="text-white sm:text-4xl text-2xl font-extrabold  text-center"  to="/e-category">
                                                <span className="absolute inset-0"></span>
                                                نظافت منزل   </Link>
                                        </h3>
                                        <a className="z-10 relative text-sm font-medium transition rounded-full pt-2 pb-2 px-4 bg-blue-800/70 text-blue-100 ring-1 ring-inset ring-blue-400/20 hover:bg-blue-400/10 hover:text-blue-300 hover:ring-blue-300" href="/login">
                                            ثبت سفارش</a>
                                    </div>

                                </div>

                            </article>


                            <article className="relative w-full rounded-lg h-48 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                     style={{backgroundImage:`url(https://khedmatazma.com/images/subservices/site_image/full/214--w255-h170-q70.jpg)`}}>
                                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                    <div className="text-center">
                                        <h3 className="mb-10">
                                            <Link className="text-white sm:text-4xl text-2xl font-extrabold  text-center"  to="/e-category">
                                                <span className="absolute inset-0"></span>
                                                نظافت منزل   </Link>
                                        </h3>
                                        <a className="z-10 relative text-sm font-medium transition rounded-full pt-2 pb-2 px-4 bg-blue-800/70 text-blue-100 ring-1 ring-inset ring-blue-400/20 hover:bg-blue-400/10 hover:text-blue-300 hover:ring-blue-300" href="/login">
                                            ثبت سفارش</a>
                                    </div>

                                </div>

                            </article>


                            <article className="relative w-full rounded-lg h-48 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                     style={{backgroundImage:`url(https://khedmatazma.com/images/subservices/site_image/full/214--w255-h170-q70.jpg)`}}>
                                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                    <div className="text-center">
                                        <h3 className="mb-10">
                                            <Link className="text-white sm:text-4xl text-2xl font-extrabold  text-center"  to="/e-category">
                                                <span className="absolute inset-0"></span>
                                                نظافت منزل   </Link>
                                        </h3>
                                        <a className="z-10 relative text-sm font-medium transition rounded-full pt-2 pb-2 px-4 bg-blue-800/70 text-blue-100 ring-1 ring-inset ring-blue-400/20 hover:bg-blue-400/10 hover:text-blue-300 hover:ring-blue-300" href="/login">
                                            ثبت سفارش</a>
                                    </div>

                                </div>

                            </article>


                            <article className="relative w-full rounded-lg h-48 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                     style={{backgroundImage:`url(https://khedmatazma.com/images/subservices/site_image/full/214--w255-h170-q70.jpg)`}}>
                                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                    <div className="text-center">
                                        <h3 className="mb-10">
                                            <Link className="text-white sm:text-4xl text-2xl font-extrabold  text-center"  to="/e-category">
                                                <span className="absolute inset-0"></span>
                                                نظافت منزل   </Link>
                                        </h3>
                                        <a className="z-10 relative text-sm font-medium transition rounded-full pt-2 pb-2 px-4 bg-blue-800/70 text-blue-100 ring-1 ring-inset ring-blue-400/20 hover:bg-blue-400/10 hover:text-blue-300 hover:ring-blue-300" href="/login">
                                            ثبت سفارش</a>
                                    </div>

                                </div>

                            </article>


                            <article className="relative w-full rounded-lg h-48 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                     style={{backgroundImage:`url(https://khedmatazma.com/images/subservices/site_image/full/214--w255-h170-q70.jpg)`}}>
                                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                    <div className="text-center">
                                        <h3 className="mb-10">
                                            <Link className="text-white sm:text-4xl text-2xl font-extrabold  text-center"  to="/e-category">
                                                <span className="absolute inset-0"></span>
                                                نظافت منزل   </Link>
                                        </h3>
                                        <a className="z-10 relative text-sm font-medium transition rounded-full pt-2 pb-2 px-4 bg-blue-800/70 text-blue-100 ring-1 ring-inset ring-blue-400/20 hover:bg-blue-400/10 hover:text-blue-300 hover:ring-blue-300" href="/login">
                                            ثبت سفارش</a>
                                    </div>

                                </div>

                            </article>

                        </div>
                    </section>

                    <section className="mt-10 py-10 px-10">

                        <div className="text-white sm:mx-10 relative items-center justify-evenly xl:py-2 pb-2 pt-2 sm:px-16 px-9 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl">
                          <div className="flex xl:flex-row flex-col ">
                              <div className="text-justify self-center">
                                  <h2 className="text-2xl">دسترسی به بهترین متخصصین، در اپلیکیشن حله
                                  </h2>

                                  <p className="pt-5 text-sm w-4/6 leading-10">
                                      قبل از انجام کارهایتان، از چند متخصص قیمت بگیرید. سوابق حرفه ای متخصصین و نظرات مشتریان را مشاهده کنید. در اپلیکیشن "حله"، به بهترین متخصصین دسترسی دارید.

                                      برای دریافت لینک دانلود اپلیکیشن، شماره خود را وارد کنید
                                  </p>
                              </div>
                              <div>
                                  <img src="https://anophel.com/build/assets/Phone-mockup-d2a6718a.webp" alt="halle"/>
                              </div>

                          </div>
                            <div>
                                <div className="flex justify-center my-10"><div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2"><img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8"/><div className="text-right mr-3"><p className="text-xs text-gray-200">دانلود از</p><p className="text-sm md:text-base"> Google Play Store </p></div></div><div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2"><img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8"/><div className="text-right mr-3"><p className="text-xs text-gray-200">دانلود از</p><p className="text-sm md:text-base"> Apple Store </p></div></div></div>
                            </div>
                        </div>

                    </section>


                </div>
            </AppLayout>
        </>
    )
}

export default Home