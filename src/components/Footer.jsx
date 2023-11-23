import {Link} from "react-router-dom";
import logo from "../assets/logo/PNG/Logo/Hale Logo Fr.png"
function Footer() {
    return (
        <>
            <div className="bg-gray-900">
                <div className="mx-auto text-white py-10">
                    <div className="sm:flex justify-center">
                        <div>
                            <img className="sm:h-[350px] " src={logo} alt="وبسایت خدماتی حله"/>
                        </div>
                        <div className="text-center w-full">
                            <h3 className="text-3xl mb-3 max-sm:px-2 leading-[52px]">دانلود اپلیکیشن حله </h3>
                            <p>با ما متخصصین را به راحتی پیدا کنید!</p>
                            <div className="sm:flex max-sm:flex-col max-sm:space-y-4 justify-center my-10 ">
                                <div className="flex items-center text-center border w-auto rounded-lg px-4 py-2 mx-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" alt="وبسایت خدماتی حله"/>
                                    <div className="text-right mr-3">
                                        <p className='text-xs text-gray-200'>دانلود از</p>
                                        <p className="text-sm md:text-base"> Google Play Store </p>
                                    </div>
                                </div>
                                <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" alt="وبسایت خدماتی حله"/>
                                    <div className="text-right mr-3">
                                        <p className='text-xs text-gray-200'>دانلود از</p>
                                        <p className="text-sm md:text-base"> Apple Store </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:mt-10 mt-5 sm:px-10 px-5 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                        <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; وبسایت حله 2024 </p>
                        <div className="order-1 md:order-2">
                            <Link to="/about-us" className="px-2 border-l">درباره ما </Link>
                            <span className="mr-2">ارتباط با ما: <span  className="mr-2">09227085246</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer