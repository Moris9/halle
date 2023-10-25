import {BsPersonCircle} from "react-icons/bs";
import {BuildingOfficeIcon} from "@heroicons/react/20/solid/index.js";
import {BiCar, BiHealth, BiLaptop} from "react-icons/bi";
import {FaHandshake} from "react-icons/fa";
import {MdWork} from "react-icons/md";
import {GiVacuumCleaner} from "react-icons/gi";

function MainCategories() {
    return (
        <>

            <div className="flex gap-10 container justify-center mt-6">
                    <span className="text-center"><BsPersonCircle className="m-5 h-10 w-10"/>زیبایی</span>
                    <span className="text-center"><BuildingOfficeIcon className="m-5 h-10 w-10"/>ساختمان</span>
                    <span className="text-center"><BiLaptop className="m-5 h-10 w-10"/>دیجیتال</span>
                    <span className="text-center"><span className="flex justify-center"><BiCar className="m-5 h-10 w-10"/></span>خوردو و حمل و نقل</span>
                    <span className="text-center"><FaHandshake className="m-5 h-10 w-10"/>کسب و کار</span>
                    <span className="text-center"><BiHealth className="m-5 h-10 w-10"/>سلامت</span>
                    <span className="text-center"><MdWork className="m-5 h-10 w-10"/>تاسیسات</span>
                    <span className="text-center"><GiVacuumCleaner className="m-5 h-10 w-10"/>نظافت</span>
            </div>


        </>
    )
}

export default MainCategories