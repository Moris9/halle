import {Helmet} from "react-helmet";
import AppLayout from "../layouts/AppLayout.jsx";
import Header from "../components/Header.jsx";
import star from "../assets/star.svg";
import Unstar from "../assets/unStar.svg"
function MainService() {
    return (
        <>
            <Helmet>
                <title>                                                لوله کشی فاضلاب زنجان
                </title>
            </Helmet>
            <AppLayout>
                <div className="self-stretch flex w-full flex-col max-md:max-w-full mb-56">
                    <Header title="لوله کشی فاضلاب زنجان"/>
                    <div className="self-center z-[1] mt-0 w-full max-w-[1507px] max-md:max-w-full">


                        <section className="mt-10 p-12">


                            <div className="bg-indigo-100 flex flex-col px-5 rounded-3xl">
                                <div className="self-center flex w-full max-w-[962px] flex-col mt-20 mb-20 max-md:max-w-full max-md:my-10">
                                    <h2 className="text-blue-950 text-center text-4xl font-bold self-center ml-0 whitespace-nowrap max-md:max-w-full">
                                        افرادی که توانایی انجام این کار را دارند
                                    </h2>
                                    <div className="self-stretch flex grow flex-col mt-10 max-md:max-w-full">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a439a0f-9dd0-443b-9434-051ec8e46b37?"
                                            className="aspect-[0.9] object-cover object-center w-[52px] fill-indigo-200 overflow-hidden max-w-full self-end"
                                        />
                                        <div className="grid grid-cols-1 gap-4">

                                            <div className="justify-center h-full items-center bg-[#B9E4FF80] flex max-w-full flex-col pt-12 pb-11 px-5 rounded-2xl self-start">
                                                <div className="self-center max-w-full contents">
                                                    <span className="text-center text-blue-700 font-bold">VIP</span>
                                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                        <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17addbfa-d119-40c0-9dab-1cda57eab189?"
                                                                className="aspect-square object-cover object-center w-full overflow-hidden mt-3 rounded-[50%] max-md:mt-8"
                                                                alt=""/>

                                                        </div>
                                                        <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                                                            <div className="flex grow flex-col max-md:max-w-full max-md:mt-6">
                                                                <div className="flex gap-4">
                                                                    <h3 className="text-neutral-700 text-center text-2xl font-bold self-start whitespace-nowrap">
                                                                        رضا علی
                                                                    </h3>
                                                                    <div className="flex">
                                                                        <img alt="" src={star} className="h5 w-5"/>
                                                                        <img alt="" src={star} className="h5 w-5"/>
                                                                        <img alt="" src={star} className="h5 w-5"/>
                                                                        <img alt="" src={star} className="h5 w-5"/>
                                                                        <img alt="" src={star} className="h5 w-5"/>
                                                                    </div>

                                                                </div>

                                                                <p className="text-neutral-700 text-xs mt-5 self-start max-md:max-w-full">
                                                                    اینجا بیو قرار می گیرد!
                                                                    اینجا بیو قرار می گیرد!
                                                                    اینجا بیو قرار می گیرد!    اینجا بیو قرار می گیرد!
                                                                    اینجا بیو قرار می گیرد!
                                                                    اینجا بیو قرار می گیرد!

                                                                </p>
                                                                <button className="z-10 mt-6  relative text-sm font-medium transition rounded-full pt-2 pb-2 px-4 bg-blue-800/70 text-blue-100 ring-1 ring-inset ring-blue-400/20 hover:bg-blue-400/10 hover:text-blue-300 hover:ring-blue-300">
                                                                    ثبت سفارش
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="justify-center h-full items-center bg-white flex max-w-full flex-col pt-12 pb-11 px-5 rounded-2xl self-start">
                                                <div className="self-center max-w-full">
                                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                        <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17addbfa-d119-40c0-9dab-1cda57eab189?"
                                                                className="aspect-square object-cover object-center w-full overflow-hidden mt-3 rounded-[50%] max-md:mt-8"
                                                                alt=""/>

                                                        </div>
                                                        <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                                                            <div className="flex grow flex-col max-md:max-w-full max-md:mt-6">
                                                                <div className="flex gap-4">
                                                                    <h3 className="text-neutral-700 text-center text-2xl font-bold self-start whitespace-nowrap">
                                                                        رضا علی
                                                                    </h3>
                                                                    <div className="flex">
                                                                        <img alt="" src={star} className="h5 w-5"/>
                                                                        <img alt="" src={star} className="h5 w-5"/>
                                                                        <img alt="" src={star} className="h5 w-5"/>
                                                                        <img alt="" src={Unstar} className="h5 w-5"/>
                                                                        <img alt="" src={Unstar} className="h5 w-5"/>
                                                                    </div>

                                                                </div>

                                                                <p className="text-neutral-700 text-xs mt-5 self-start max-md:max-w-full">
                                                                    اینجا بیو قرار می گیرد!
                                                                    اینجا بیو قرار می گیرد!
                                                                    اینجا بیو قرار می گیرد!    اینجا بیو قرار می گیرد!
                                                                    اینجا بیو قرار می گیرد!
                                                                    اینجا بیو قرار می گیرد!

                                                                </p>
                                                                <button className="z-10 mt-6  relative text-sm font-medium transition rounded-full pt-2 pb-2 px-4 bg-blue-800/70 text-blue-100 ring-1 ring-inset ring-blue-400/20 hover:bg-blue-400/10 hover:text-blue-300 hover:ring-blue-300">
                                                                    ثبت سفارش
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="justify-center h-full  items-center bg-white flex max-w-full flex-col pt-12 pb-11 px-5 rounded-2xl self-start">
                                                <div className="self-center max-w-full">
                                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                        <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17addbfa-d119-40c0-9dab-1cda57eab189?"
                                                                className="aspect-square object-cover object-center w-full overflow-hidden mt-3 rounded-[50%] max-md:mt-8"
                                                                alt=""/>

                                                        </div>
                                                        <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                                                            <div className="flex grow flex-col max-md:max-w-full max-md:mt-6">
                                                                <div className="flex gap-4">
                                                                    <h3 className="text-neutral-700 text-center text-2xl font-bold self-start whitespace-nowrap">
                                                                        رضا علی
                                                                    </h3>
                                                                    <div className="flex">
                                                                        <img alt="" src={star} className="h5 w-5"/>
                                                                        <img alt="" src={Unstar} className="h5 w-5"/>
                                                                        <img alt="" src={Unstar} className="h5 w-5"/>
                                                                        <img alt="" src={Unstar} className="h5 w-5"/>
                                                                        <img alt="" src={Unstar} className="h5 w-5"/>
                                                                    </div>

                                                                </div>

                                                                <p className="text-neutral-700 text-xs mt-5 self-start max-md:max-w-full">
                                                                    اینجا بیو قرار می گیرد!
                                                                    اینجا بیو قرار می گیرد!
                                                                    اینجا بیو قرار می گیرد!    اینجا بیو قرار می گیرد!
                                                                    اینجا بیو قرار می گیرد!
                                                                    اینجا بیو قرار می گیرد!

                                                                </p>
                                                                <button className="z-10 mt-6  relative text-sm font-medium transition rounded-full pt-2 pb-2 px-4 bg-blue-800/70 text-blue-100 ring-1 ring-inset ring-blue-400/20 hover:bg-blue-400/10 hover:text-blue-300 hover:ring-blue-300">
                                                                    ثبت سفارش
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>

                </div>
            </AppLayout>

        </>
    )
}

export default MainService