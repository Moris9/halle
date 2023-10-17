import AppLayout from "../layouts/AppLayout.jsx";
import {Helmet} from "react-helmet";
import {useState} from "react";
import {BiHome} from "react-icons/bi";
import {Link} from "react-router-dom";
import worker_1 from "../assets/images/worker.jpg"
import worker_2 from "../assets/images/worker_2.jpg"

function Home() {
    const [activeTab, setActiveTab] = useState('page1');
    const switchTab = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <>
            <Helmet>
                <title>خدمت از ما</title>
            </Helmet>

            <AppLayout>
                <div className="mx-auto">
                    <section className="p-14 flex ">
                        <ul className="text-center text-gray-500 bg-gray-100 rounded-lg p-1 self-center">
                            <li>
                                <span
                                    onClick={() => switchTab('page1')}
                                    className={`flex justify-center cursor-pointer py-4 ${activeTab === 'page1' ? 'bg-white border-b-2 border-indigo-500 rounded-lg shadow text-indigo-900' : ''}`}
                                >
                                   یافتن متخصصین
                                </span>
                            </li>
                            <li>
                                <span
                                    onClick={() => switchTab('page2')}
                                    className={`flex justify-center mt-5 cursor-pointer py-4 ${activeTab === 'page2' ? 'bg-white border-b-2 border-indigo-500 rounded-lg shadow text-indigo-900' : ''}`}
                                >
                                    ثبت نام متخصصین
                                </span>
                            </li>
                        </ul>

                        {activeTab === 'page1' && (
                            <div className="p-5 container">
                                <h1 className="text-4xl font-semibold">
                                    دسترسی آسان به متخصصین، در خدمت از ما
                                </h1>
                                <div className="flex gap-12">
                                    <div className="self-center">
                                        <p className="text-black mt-10 leading-10 text-justify">وقت کم میاری؟ ⏰ نیاز داری به یک تخصص ولی پیدا نمی کنی؟ دامنه ی انتخابت برای پیدا کردن یک تخصص کوچیکه؟ تفاوت قیمت ها زیاده؟</p>
                                        <p className="text-black mt-2 leading-10 text-justify">ما در اینجا همه این مشکلات را از بین می بریم. به راحتی بهترین متخصص برای رفع نیازت با بهترین قیمت پیدا کن.</p>
                                    </div>
                                    <div>
                                        <img className="w-96 rounded h-auto" src={worker_1} alt="worker"/>
                                    </div>
                                </div>

                                <div className='mt-10 w-[500px]'>
                                    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                                        <div className="grid place-items-center h-full w-12 text-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>

                                        <input
                                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 shadow-xl"
                                            type="text"
                                            id="search"
                                            placeholder="به چه خدمتی نیاز دارید؟" />
                                        <button className="bg-blue-500 text-white px-2 py-4 w-full">
                                            جست و جو
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'page2' && (
                            <div className="p-5">
                                <h1  className="text-4xl font-semibold">
                                    در "خدمت از ما" تعداد مشتری و میزان درآمد خود را افزایش دهید
                                </h1>
                                <div className="flex gap-12">
                                    <div className="self-center">
                                        <p className="text-black mt-10 leading-10 text-justify">می خواهی مشتری های بیشتری داشته باشی؟ کیفیت کارت بالاست ولی کار کم؟ میخوای اسم در کنی؟ قیمتت مناسب ارائه میدی ولی بازخورد باید را نداری؟ ما حلش می کنیم! با ما باش تا مشتری را به راحتی پیدات کنه و سفارش هات چند برابر باشه!</p>
                                    </div>
                                    <div className="my-5">
                                        <img className="rounded h-auto" src={worker_2} alt="worker"/>
                                    </div>
                                </div>


                                <button className="bg-transparent mt-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    شروع کنید
                                </button>
                            </div>
                        )}
                    </section>
                    <section className="mt-10 bg-blue-200  py-10">
                        <div className="flex justify-center gap-10 px-14 max-sm:px-5 w-full relative">
                            <a href="" className="text-center">
                                <BiHome className="h-10 w-10"/>
                                <span className="">
                                    خانه
                                </span>
                            </a>
                            <a href="" className="text-center">
                                <BiHome className="h-10 w-10"/>
                                <span className="">
                                    خانه
                                </span>
                            </a>
                            <a href="" className="text-center">
                                <BiHome className="h-10 w-10"/>
                                <span className="">
                                    خانه
                                </span>
                            </a>
                            <a href="" className="text-center">
                                <BiHome className="h-10 w-10"/>
                                <span className="">
                                    خانه
                                </span>
                            </a>
                        </div>
                    </section>
                    <section className="mt-10 py-10 px-6">
                        <h2 className="text-4xl ">خدمات محبوب در بازار تهران "خدمت از ما"</h2>
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
                                  <h2 className="text-2xl">دسترسی به بهترین متخصصین، در اپلیکیشن خدمت از ما
                                  </h2>

                                  <p className="pt-5 text-sm w-4/6">
                                      قبل از انجام کارهایتان، از چند متخصص قیمت بگیرید. سوابق حرفه ای متخصصین و نظرات مشتریان را مشاهده کنید. در اپلیکیشن "خدمت از ما"، به بهترین متخصصین دسترسی دارید.

                                      برای دریافت لینک دانلود اپلیکیشن، شماره خود را وارد کنید
                                  </p>
                              </div>
                              <div>
                                  <img src="https://anophel.com/build/assets/Phone-mockup-d2a6718a.webp" alt="aa"/>
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