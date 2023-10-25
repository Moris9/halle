import {FaStairs} from "react-icons/fa6";
import {IoBusiness, IoGitCommit} from "react-icons/io5";
import {GiProgression} from "react-icons/gi";

function SubServices() {
    return (
        <>

            <div className="justify-center items-center border backdrop-blur-sm self-center flex w-full max-w-[1312px] flex-col mt-20 px-5 py-6 rounded-[32px] border-solid border-white border-opacity-80 max-md:max-w-full">
                <div className="self-center w-full max-w-[1300px] max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-3/12 max-md:w-full">
                            <div className="items-start flex grow flex-col max-md:mt-12">
                                <FaStairs  className="text-white h-8 aspect-square object-cover object-center w-14 overflow-hidden shrink-0"/>

                                <h2 className="text-white text-2xl font-extrabold mt-2">
                                    دسترسی سریع
                                </h2>
                                <p className="text-white text-lg w-[231px] max-w-full mt-2">
                                    با حله می تواتید به سرعت و کمترین زمان متخصص مورد نیاز خود را پیدا کنید.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                            <div className="items-start flex grow flex-col max-md:mt-12">
                                <IoGitCommit className="text-white h-8 aspect-square object-cover object-center w-14 overflow-hidden shrink-0"
                                />

                                <h2 className="text-white text-2xl font-extrabold mt-2">
                                    آنالیز کیفیت کار
                                </h2>
                                <p className="text-white text-lg w-[231px] max-w-full mt-2">
                                    با حله می توانید کیفیت کار هر متخصص را با توجه به نظرات مشتریان قبل بسنجید.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                            <div className="items-start flex grow flex-col max-md:mt-12">
                                <IoBusiness className="text-white h-8 aspect-square object-cover object-center w-14 overflow-hidden shrink-0"
                                />

                                <h2 className="text-white text-2xl font-extrabold mt-2">
                                    مقایسه قیمت و انتخاب مناسب
                                </h2>
                                <p className="text-white text-lg w-[231px] max-w-full mt-2">
                                    با حله می توانید با مقایسه قیمت های مختلف متخصصین و ارزیابی کیفیت کار آن ها، بهترین قیمت را انتخاب کنید!
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                            <div className="items-start flex grow flex-col max-md:mt-12">
                                <GiProgression   className="text-white h-8 aspect-square object-cover object-center w-14 overflow-hidden shrink-0"
                                />

                                <h2 className="text-white text-2xl font-extrabold mt-2">
                                    تلاش برای بهتر شدن
                                </h2>
                                <p className="text-white text-lg w-[231px] max-w-full mt-2">
                                    با حله متخصصین سعی دارند با انجام کار با کیفیت بالا و قیمیت پایین به ستاره های خود بیافزایند و ترفیع رتبه پیدا کنند.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SubServices