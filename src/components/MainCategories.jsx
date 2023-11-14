import BsPersonCircle from "../assets/beauty.svg";
import BuildingOfficeIcon from "../assets/building.svg";
import BiLaptop from "../assets/digital.svg"
import BiCar from "../assets/truck.svg"
import BiHealth from "../assets/health.svg"
import FaHandshake from "../assets/business.svg";
import MdWork from "../assets/workerCategory.svg";
import GiVacuumCleaner from "../assets/cleaning.svg";
import {Link} from "react-router-dom";

function MainCategories() {
    const categories = [
        { src : BsPersonCircle , to:"/services" , name : "زیبایی" },
        { src : BuildingOfficeIcon , to:"/services" , name : "ساختمان" },
        { src : BiLaptop , to:"/services" , name : "دیجیتال" },
        { src : BiCar , to:"/services" , name : "خوردرو و حمل و نقل" },
        { src : FaHandshake , to:"/services" , name : "کسب و کار" },
        { src : BiHealth , to:"/services" , name : "سلامت" },
        { src : MdWork , to:"/services" , name : "تاسیسات" },
        { src : GiVacuumCleaner , to:"/services" , name : "نظافت" }
    ]
    return (
        <>
            <section className="mt-10 py-10 bg-gradient-to-r from-green-300 from-10% to-violet-900 to-100% ">
                <div className="flex gap-10 container justify-center mt-6">
                    {
                        categories.map((item)=>(

                            <Link key={item.id} to={item.to} className="text-center"><img src={item.src} alt={`وبسایت خدماتی حله`+item.name} className="m-5 h-24 bg-white w-24 border-2 rounded p-5"/>{item.name}</Link>

                        ))
                    }

                </div>
            </section>

        </>
    )
}

export default MainCategories