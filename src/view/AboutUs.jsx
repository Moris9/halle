import {Helmet} from "react-helmet";
import AppLayout from "../layouts/AppLayout.jsx";
import {IoBusiness, IoGitCommit} from "react-icons/io5";
import {FaStairs} from "react-icons/fa6";
import {GiProgression} from "react-icons/gi";
import Banner from "../assets/images/worker.jpg"
import Arrow from "../assets/arrow.svg"
import InputField from "../components/fields/InputField.jsx";
import TextField from "../components/fields/TextField.jsx";
function AboutUs() {
    return (
        <>
            <Helmet>
                <title>خدمت از ما</title>
            </Helmet>

            <AppLayout>
                <div className="flex flex-col">
                    <div className="flex-col overflow-hidden self-center relative flex min-h-[1024px] w-full grow pt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src={Banner}
                            className="absolute h-full w-full object-cover object-center brightness-50"
                            alt=""/>
                        <div className="relative self-center flex w-full max-w-[1476px] grow flex-col mt-40 max-md:max-w-full">
                            <div className="items-start  flex w-[900px] max-w-full flex-col px-5 py-10 rounded-3xl">
                                <div className="items-start self-center flex w-[612px] max-w-full flex-col">
                                    <div className="items-start flex w-full flex-col max-md:max-w-full">
                                        <div className="justify-center items-start flex w-20 max-w-full gap-0">
                                            <div className="bg-yellow-200 self-stretch flex w-4 h-4 flex-col" />
                                            <div className="bg-cyan-300 self-stretch flex w-4 h-4 flex-col" />
                                            <div className="bg-green-400 self-stretch flex w-4 h-4 flex-col" />
                                            <div className="bg-orange-400 self-stretch flex w-4 h-4 flex-col" />
                                            <div className="bg-indigo-600 self-stretch flex w-4 h-4 flex-col" />
                                        </div>
                                        <div className="text-white text-6xl font-extrabold leading-[112.5%] w-full mt-6 max-md:max-w-full max-md:text-4xl">
                                           درباره حله
                                        </div>
                                    </div>
                                    <div className="text-white text-2xl w-[586px] max-w-full mt-10">
                                      توضیحات برند
                                    </div>

                                </div>
                            </div>
                            <div className="justify-center items-center border backdrop-blur-sm self-center flex w-full max-w-[1312px] flex-col mt-20 px-5 py-6 rounded-[32px] border-solid border-white border-opacity-80 max-md:max-w-full">
                                <div className="self-center w-full max-w-[1300px] max-md:max-w-full">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-3/12 max-md:w-full">
                                            <div className="items-start flex grow flex-col max-md:mt-12">
                                             <FaStairs  className="text-white h-8 aspect-square object-cover object-center w-14 overflow-hidden shrink-0"/>

                                                <h2 className="text-white text-xl font-extrabold mt-2">
                                                    دسترسی سریع
                                                </h2>
                                                 <p className="text-white text-lg w-[250px] max-w-full mt-2 text-justify">
                                                    با حله می تواتید به سرعت و کمترین زمان متخصص مورد نیاز خود را پیدا کنید.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                                            <div className="items-start flex grow flex-col max-md:mt-12">
                                                <IoGitCommit className="text-white h-8 aspect-square object-cover object-center w-14 overflow-hidden shrink-0"
                                                />

                                                <h2 className="text-white text-xl font-extrabold mt-2">
                                                    آنالیز کیفیت کار
                                                </h2>
                                                 <p className="text-white text-lg w-[250px] max-w-full mt-2 text-justify">
                                                    با حله می توانید کیفیت کار هر متخصص را با توجه به نظرات مشتریان قبل بسنجید.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                                            <div className="items-start flex grow flex-col max-md:mt-12">
                                                <IoBusiness className="text-white h-8 aspect-square object-cover object-center w-14 overflow-hidden shrink-0"
                                                />

                                                <h2 className="text-white text-xl font-extrabold mt-2">
                                                    مقایسه قیمت و انتخاب مناسب
                                                </h2>
                                                <p className="text-white text-lg w-[250px] max-w-full mt-2 text-justify">
                                                    با حله می توانید با مقایسه قیمت های مختلف متخصصین و ارزیابی کیفیت کار آن ها، بهترین قیمت را انتخاب کنید!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                                            <div className="items-start flex grow flex-col max-md:mt-12">
                                                <GiProgression   className="text-white h-8 aspect-square object-cover object-center w-14 overflow-hidden shrink-0"
                                                />

                                                <h2 className="text-white text-xl font-extrabold mt-2">
                                                    تلاش برای بهتر شدن
                                                </h2>
                                                 <p className="text-white text-lg w-[250px] max-w-full mt-2 text-justify">
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
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17addbfa-d119-40c0-9dab-1cda57eab189?"
                                    className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                            </div>
                            <h5 className="mb-4 text-xl font-semibold">یونسی</h5>
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
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17addbfa-d119-40c0-9dab-1cda57eab189?"
                                    className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                            </div>
                            <h5 className="mb-4 text-xl font-semibold">محمد یونسی</h5>
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
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17addbfa-d119-40c0-9dab-1cda57eab189?"
                                    className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                            </div>
                            <h5 className="mb-4 text-xl font-semibold">محمد رضایی</h5>
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

                <section className="bg-cyan-100 self-stretch flex w-full flex-col -mb-0.5 py-10 px-5 max-md:max-w-full" dir="ltr">
                    <div className="self-center w-full max-w-[1248px] mt-20 max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                                <div className="flex flex-col w-[490px] mt-3 max-md:max-w-full max-md:mt-12">
                                    <div className="text-teal-500 text-6xl font-bold leading-[80px] self-stretch w-full max-md:text-4xl">
                                        <span className="text-zinc-800">نظر شما</span>
                                        <span className="text-white"> </span>
                                        <span className="text-teal-500">درباره ما</span>
                                    </div>
                                    <div className="self-center w-[451px] max-w-full ml-2 mt-2">
                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                            <div className="flex flex-col items-stretch w-[37%] max-md:w-full max-md:ml-0">
                                                <img
                                                    alt="halle"
                                                    loading="lazy"
                                                    srcSet={Arrow}
                                                    className="aspect-[1.24] object-cover object-center w-[161px] rotate-[-30deg] stroke-[4px] stroke-teal-500 stroke-opacity-20 overflow-hidden shrink-0 my-auto max-md:mt-12"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="flex grow flex-col max-md:max-w-full max-md:mt-12">
                                    <div className="items-start flex w-[600px] max-w-full flex-col">
                                        <div className="items-start flex w-full flex-col max-md:max-w-full">
                                            <div dir="rtl" className="justify-between items-start self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                                                <div className="items-start self-stretch flex flex-col grow shrink-0 basis-auto">
                                                    <div className="text-black text-lg font-bold">
                                                        نام و نام خانوادگی
                                                    </div>
                                                    <InputField className="text-black text-opacity-50 text-lg font-bold items-start bg-zinc-700 bg-opacity-50 w-72 max-w-full grow pl-6 pr-5 py-4 rounded-2xl"
                                                                placeholder=" نام و نام خانوادگی"
                                                    />


                                                </div>
                                                <div className="items-start self-stretch flex flex-col grow shrink-0 basis-auto">
                                                    <div className="text-black text-lg font-bold">
                                                        ایمیل
                                                    </div>
                                                    <InputField className="text-black text-opacity-50 text-lg font-bold items-start bg-zinc-700 bg-opacity-50 w-72 max-w-full grow mt-2.5 pl-6 pr-5 py-4 rounded-2xl"
                                                                placeholder="ایمیل"
                                                    />
                                                </div>
                                            </div>
                                            <div className="items-start self-stretch flex grow flex-col mt-6 max-md:max-w-full" dir="rtl">
                                                <div className="text-black text-lg font-bold">
                                                    متن پیام شما
                                                </div>
                                                <TextField rows="10" cols="100"  areaBg={true} className=" text-black text-opacity-50 text-lg font-bold items-start p-4 w-full grow mt-2.5 pl-6 pr-5 pt-4 pb-48 rounded-2xl max-md:max-w-full"
                                                           placeholder="متن نظر شما"
                                                />
                                            </div>
                                        </div>
                                        <div className="items-center bg-teal-500 flex w-[232px] max-w-full grow flex-col mt-6 px-5 py-2.5 rounded-3xl">
                                            <div className="self-center flex w-[168px] max-w-full items-start gap-2.5">
                                                <button className="text-black text-lg font-bold self-stretch w-36">
                                                    ارسال نظر
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

export default AboutUs