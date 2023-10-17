import AppLayout from "../layouts/AppLayout.jsx";
import services from "../assets/services.svg"
function Price() {
    return (
        <>
            <AppLayout>
                <div className="mx-auto p-24">
                    <div className="indent-4 flex gap-10">
                        <div className="w-2/3">
                            <h1 className="text-black text-4xl font-bold self-center">دسترسی آسان به خدمات
                            </h1>

                            <div className="flex gap-12">
                                <div className="self-center">
                                    <p className="text-black mt-10 leading-10 text-justify">وقت کم میاری؟ ⏰ نیاز داری به یک تخصص ولی پیدا نمی کنی؟ دامنه ی انتخابت برای پیدا کردن یک تخصص کوچیکه؟ تفاوت قیمت ها زیاده؟</p>
                                    <p className="text-black mt-2 leading-10 text-justify">ما در اینجا همه این مشکلات را از بین می بریم. به راحتی بهترین متخصص برای رفع نیازت با بهترین قیمت پیدا کن.</p>
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
                        <div className="w-2/3">
                            <img src={services} className="w-96 h-96" alt="سرویس"/>
                        </div>
                    </div>


                    <section className="mt-10">


                    </section>
                </div>
            </AppLayout>

        </>
    )
}

export default Price