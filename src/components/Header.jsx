import Worker from "../assets/images/worker.jpg";
import SerchIcon from "../assets/search.svg";

function Header({title}) {
    return (
        <>
            <section className="flex-col overflow-hidden self-stretch relative flex min-h-[360px] w-full pt-5 pb-12 px-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet={Worker}
                    className="absolute brightness-50 z-[-1] h-full w-full object-cover object-right-top inset-0"
                />

                <div className="relative self-center flex w-[770px] max-w-full flex-col mt-44 max-md:mt-10">
                    <h2 className="text-white text-center text-5xl font-semibold self-center max-md:max-w-full max-md:text-4xl">
                        {title}
                    </h2>
                    <p className="text-zinc-300 text-center text-base font-bold self-center mt-6 max-md:max-w-full">
                        متخصص مورد نیازتو با حله پیدا کن
                    </p>
                    <div className="bg-white self-stretch flex grow flex-col mt-10 pl-5 pr-3 py-2 rounded-[35px] max-md:max-w-full">
                        <div className="flex w-[723px] max-w-full items-start justify-between gap-5 ml-4 max-md:flex-wrap max-md:justify-center">
                            <div className="self-center flex w-[211px] max-w-full items-start justify-between gap-5 my-auto">
                                <input
                                    className="peer-[${1}]:${0}  h-full w-full outline-none text-sm text-gray-700 pr-2"
                                    type="text"
                                    id="search"
                                    placeholder="به چه خدمتی نیاز دارید؟" />

                            </div>
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
            </section>
        </>
    )
}

export default Header