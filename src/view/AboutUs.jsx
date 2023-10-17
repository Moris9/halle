import {Helmet} from "react-helmet";
import AppLayout from "../layouts/AppLayout.jsx";
import {IoBusiness, IoGitCommit} from "react-icons/io5";
import {FaStairs} from "react-icons/fa6";
import {GiProgression} from "react-icons/gi";
import Banner from "../assets/images/worker_2.jpg"
function AboutUs() {
    return (
        <>
            <Helmet>
                <title>خدمت از ما</title>
            </Helmet>

            <AppLayout>
                <div className="flex flex-col pl-5">
                    <div className="flex-col overflow-hidden self-center relative flex min-h-[1024px] w-full grow pt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src={Banner}
                            className="absolute h-full w-full object-cover object-center"
                            alt=""/>
                        <div className="relative self-center flex w-full max-w-[1476px] grow flex-col mt-40 max-md:max-w-full">
                            <div className="items-start backdrop-blur-sm flex w-[900px] max-w-full flex-col px-5 py-10 rounded-3xl">
                                <div className="items-start self-center flex w-[612px] max-w-full flex-col">
                                    <div className="items-start flex w-full flex-col max-md:max-w-full">
                                        <div className="justify-center items-start flex w-20 max-w-full gap-0">
                                            <div className="bg-yellow-200 self-stretch flex w-4 h-4 flex-col" />
                                            <div className="bg-cyan-300 self-stretch flex w-4 h-4 flex-col" />
                                            <div className="bg-green-400 self-stretch flex w-4 h-4 flex-col" />
                                            <div className="bg-orange-400 self-stretch flex w-4 h-4 flex-col" />
                                            <div className="bg-indigo-600 self-stretch flex w-4 h-4 flex-col" />
                                        </div>
                                        <div className="text-black text-6xl font-extrabold leading-[112.5%] w-full mt-6 max-md:max-w-full max-md:text-4xl">
                                           برند
                                        </div>
                                    </div>
                                    <div className="text-black text-2xl w-[586px] max-w-full mt-10">
                                      توضیحات برند
                                    </div>
                                    <div className="items-start shadow-[0px_0px_20px_0px_rgba(99,225,225,0.25)] bg-teal-300 flex w-[182px] max-w-full grow flex-col mt-10 px-5 py-6 rounded-[36px]">
                                        <div className="text-black text-2xl leading-[75%] self-center">
                                            ثبت نام
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center items-center border backdrop-blur-sm self-center flex w-full max-w-[1312px] flex-col mt-20 px-5 py-6 rounded-[32px] border-solid border-white border-opacity-80 max-md:max-w-full">
                                <div className="self-center w-full max-w-[1300px] max-md:max-w-full">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-3/12 max-md:w-full">
                                            <div className="items-start flex grow flex-col max-md:mt-12">
                                             <FaStairs  className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"/>

                                                <h2 className="text-black text-2xl font-extrabold mt-2">
                                                    دسترسی سریع
                                                </h2>
                                                <p className="text-black text-lg w-[231px] max-w-full mt-2">
                                                    با حله می تواتید به سرعت و کمترین زمان متخصص مورد نیاز خود را پیدا کنید.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                                            <div className="items-start flex grow flex-col max-md:mt-12">
                                                <IoGitCommit className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                                                />

                                                <h2 className="text-black text-2xl font-extrabold mt-2">
                                                    آنالیز کیفیت کار
                                                </h2>
                                                <p className="text-black text-lg w-[231px] max-w-full mt-2">
                                                    با حله می توانید کیفیت کار هر متخصص را با توجه به نظرات مشتریان قبل بسنجید.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                                            <div className="items-start flex grow flex-col max-md:mt-12">
                                                <IoBusiness className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                                                />

                                                <h2 className="text-black text-2xl font-extrabold mt-2">
                                                    مقایسه قیمت و انتخاب مناسب
                                                </h2>
                                                <p className="text-black text-lg w-[231px] max-w-full mt-2">
                                                    با حله می توانید با مقایسه قیمت های مختلف متخصصین و ارزیابی کیفیت کار آن ها، بهترین قیمت را انتخاب کنید!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                                            <div className="items-start flex grow flex-col max-md:mt-12">
                                                <GiProgression   className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                                                />

                                                <h2 className="text-black text-2xl font-extrabold mt-2">
                                                    تلاش برای بهتر شدن
                                                </h2>
                                                <p className="text-black text-lg w-[231px] max-w-full mt-2">
                                                    با حله متخصصین سعی دارند با انجام کار با کیفیت بالا و قیمیت پایین به ستاره های خود بیافزایند و ترفیع رتبه پیدا کنند.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center items-start flex w-20 max-w-full gap-0 mt-12">
                                <div className="bg-yellow-200 self-stretch flex w-4 h-4 flex-col" />
                                <div className="bg-cyan-300 self-stretch flex w-4 h-4 flex-col" />
                                <div className="bg-green-400 self-stretch flex w-4 h-4 flex-col" />
                                <div className="bg-orange-400 self-stretch flex w-4 h-4 flex-col" />
                                <div className="bg-indigo-600 self-stretch flex w-4 h-4 flex-col" />
                            </div>
                        </div>
                    </div>
                </div>

                <section className="mx-auto text-center py-10">
                    <h3
                        className="mb-6 text-4xl font-bold text-neutral-800 ">
                        نظرات
                    </h3>
                    <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                        نظرات ارزشمند شما درباره خدمات ما
                    </p>

                    <div className="grid text-center md:grid-cols-3 px-12 gap-10">
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 flex justify-center">
                                <img
                                    src="https://avatars.githubusercontent.com/u/53135000?v=4"
                                    className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                            </div>
                            <h5 className="mb-4 text-xl font-semibold">محمد عبدالرحمانی</h5>
                            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                                Web Developer
                            </h6>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                                id officiis hic tenetur quae quaerat ad velit ab hic tenetur.


                            </p>
                        </div>
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 flex justify-center">
                                <img
                                    src="https://avatars.githubusercontent.com/u/53135000?v=4"
                                    className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                            </div>
                            <h5 className="mb-4 text-xl font-semibold">محمد عبدالرحمانی</h5>
                            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                                Web Developer
                            </h6>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                                id officiis hic tenetur quae quaerat ad velit ab hic tenetur.


                            </p>
                        </div>
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 flex justify-center">
                                <img
                                    src="https://avatars.githubusercontent.com/u/53135000?v=4"
                                    className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                            </div>
                            <h5 className="mb-4 text-xl font-semibold">محمد عبدالرحمانی</h5>
                            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                                Web Developer
                            </h6>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                                id officiis hic tenetur quae quaerat ad velit ab hic tenetur.


                            </p>
                        </div>

                    </div>
                </section>
            </AppLayout>

        </>
    )
}

export default AboutUs