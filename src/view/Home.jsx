import AppLayout from "../layouts/AppLayout.jsx";
import {Helmet} from "react-helmet";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import worker_1 from "../assets/worker_1.svg"
import worker_2 from "../assets/worker_2.svg"
import SerchIcon from "../assets/search.svg";
import MainCategories from "../components/MainCategories.jsx";
import axiosClient from "./axios-client.js";

function Home() {
    const [activeTab, setActiveTab] = useState('page1');
    const switchTab = (tabName) => {
        setActiveTab(tabName);
    };

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //send GET request to API catch all category
        axiosClient.get(`/services`)
            .then((response) => {
                setServices(response.data.services);
                setLoading(true);
            })
            .catch((error) => {
                console.error('خطا در درخواست به API Laravel:', error);
            });
    }, []);



    return (
        <>
            <Helmet>
                <title>حله</title>
            </Helmet>

            <AppLayout>
                <div className="mx-auto">
                    <section className="px-24 mt-10 max-sm:px-5">
                        <ul className="text-center flex  gap-4 text-gray-900 sm:p-10 pb-10 self-center">
                            <li>
                                <span
                                    onClick={() => switchTab('page1')}
                                    className={` justify-center cursor-pointer py-10 ${activeTab === 'page1' ? 'border-b-2 border-indigo-500 shadow text-indigo-900' : ''}`}
                                >
                                   یافتن متخصصین
                                </span>
                            </li>
                            <li>
                                <span
                                    onClick={() => switchTab('page2')}
                                    className={` justify-center mt-5 cursor-pointer py-10 ${activeTab === 'page2' ? 'border-b-2 border-indigo-500  shadow text-indigo-900' : ''}`}
                                >
                                    ثبت نام متخصصین
                                </span>
                            </li>
                        </ul>

                        {activeTab === 'page1' && (
                            <div className="sm:p-5 container max-sm:mt-10" key="page1">
                                <h1 className="text-4xl max-sm:text-xl max-sm:text-justify font-semibold">
                                    با <span className="text-blue-700">حله</span> در کمترین زمان متخصص مورد نیازتو پیدا کن
                                </h1>
                                <div className="sm:flex">
                                    <div className="mt-10 sm:max-w-2xl">
                                        <p className="text-black leading-10 text-justify">وقت کم میاری؟ نیاز داری به یک تخصص ولی پیدا نمی کنی؟ دامنه ی انتخابت برای پیدا کردن یک تخصص کوچیکه؟ تفاوت قیمت ها زیاده؟ ما در اینجا همه این مشکلات را از بین می بریم. به راحتی بهترین متخصص برای رفع نیازت با بهترین قیمت پیدا کن.</p>
                                            <div className="relative flex items-center w-full overflow-hidden mt-5">
                                                <div className="flex w-[723px] max-w-full items-start justify-between gap-5 ml-4 max-md:flex-wrap max-md:justify-center">
                                                    <div className="self-center align-middle rounded-lg flex w-full border-2 border-black max-w-full justify-between gap-5 my-auto">
                                                        <input
                                                            className="peer-[${1}]:${0}  py-10 h-full w-full outline-none text-sm text-gray-700 pr-2"
                                                            type="text"
                                                            id="search"
                                                            placeholder="به چه خدمتی نیاز دارید؟" />

                                                        <button className="px-2 py-4">
                                                            <img
                                                                loading="lazy"
                                                                srcSet={SerchIcon}
                                                                className="aspect-square object-cover object-center w-11 overflow-hidden self-center max-w-full my-auto"
                                                             alt="حله"/>
                                                        </button>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                    <div className="flex sm:justify-end max-sm:justify-center">
                                        <img className="w-4/6" src={worker_1} loading="lazy" alt="worker"/>
                                    </div>
                                </div>

                            </div>
                        )}

                        {activeTab === 'page2' && (
                            <div className="sm:p-5 container max-sm:mt-10" key="page2">
                                <h1  className="text-4xl max-sm:text-xl font-semibold">
                                    با <span className="text-blue-700">حله</span> کارت را معرفی کن
                                </h1>
                                <div className="sm:flex">
                                    <div className="mt-10">
                                        <p className="text-black leading-10 text-justify sm:w-[74.666667%]">می خواهی مشتری های بیشتری داشته باشی؟ کیفیت کارت بالاست ولی کار کم؟ میخوای اسم در کنی؟ قیمت مناسب ارائه میدی ولی بازخورد باید را نداری؟ ما حلش می کنیم! با ما باش تا مشتری را به راحتی پیدات کنه و سفارش هات چند برابر باشه!</p>

                                        <div className="flex">
                                            <a href="/providers" className="bg-transparent text-center w-2/3 mt-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                                شروع کنید
                                            </a>
                                        </div>
                                    </div>
                                    <div className="">
                                        <img className="w-4/6" src={worker_2} alt="worker"/>
                                    </div>
                                </div>


                            </div>
                        )}
                    </section>

                       <MainCategories/>

                    <section className="mt-10 py-10 px-6">
                        <h2 className="text-4xl max-sm:text-center max-sm:text-3xl font-extrabold">خدمات محبوب در زنجان</h2>
                        <div className="mt-10 grid sm:grid-cols-6  xl:sm:grid-cols-6 grid-cols-2 gap-1">
                            {services.map((item)=>(
                                <article key={item.id} className="relative w-full rounded-lg h-48 bg-cover bg-center group bg-navy-700  overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                         >
                                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                        <div className="text-center">
                                            <h3 className="mb-10">
                                                <Link className="text-white sm:text-4xl text-2xl font-extrabold  text-center"  to={"sub-services/"+item.slug}>
                                                    <span className="absolute inset-0"></span>
                                                    {item.title}</Link>
                                            </h3>
                                            <Link to={"sub-services/"+item.slug} className="z-10 relative sm:text-sm text-xs font-medium transition rounded-full pt-2 pb-2 px-4 bg-blue-800/70 text-blue-100 ring-1 ring-inset ring-blue-400/20 hover:bg-blue-400/10 hover:text-blue-300 hover:ring-blue-300" href="/services">
                                                ثبت سفارش</Link>
                                        </div>

                                    </div>

                                </article>



                            ))}


                        </div>
                    </section>

                    <section className="mt-10 py-10 sm:px-10 px-5">

                        <div className="text-white sm:mx-10 relative items-center justify-evenly xl:py-2 pb-2 pt-2 sm:px-16 px-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl">
                          <div className="flex xl:flex-row flex-col ">
                              <div className="sm:text-justify text-center self-center">
                                  <h2 className="text-2xl">دسترسی به بهترین متخصصین، در اپلیکیشن حله
                                  </h2>

                                  <p className="pt-5 text-sm sm:w-4/6 max-sm:text-justify leading-10">
                                      قبل از انجام کارهایتان، از چند متخصص قیمت بگیرید. سوابق حرفه ای متخصصین و نظرات مشتریان را مشاهده کنید. در اپلیکیشن "حله"، به بهترین متخصصین دسترسی دارید.

                                      برای دریافت لینک دانلود اپلیکیشن، شماره خود را وارد کنید
                                  </p>
                              </div>
                              <div>
                                  <img src="https://anophel.com/build/assets/Phone-mockup-d2a6718a.webp" alt="halle"/>
                              </div>

                          </div>
                            <div>
                                <div className="sm:flex max-sm:flex-col max-sm:space-y-4 justify-center my-10">
                                    <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
                                        <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8"/>
                                        <div className="text-right mr-3">
                                            <p className="text-xs text-gray-200">دانلود از</p>
                                            <p className="text-sm md:text-base"> Google Play Store </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                                        <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" alt="وبسایت خدماتی حله"/>
                                        <div className="text-right mr-3">
                                            <p className="text-xs text-gray-200">دانلود از</p>
                                            <p className="text-sm md:text-base"> Apple Store </p>
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

export default Home