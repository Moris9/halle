import BsPersonCircle from "../assets/beauty.svg";
import BuildingOfficeIcon from "../assets/building.svg";
import BiLaptop from "../assets/digital.svg"
import BiCar from "../assets/truck.svg"
import BiHealth from "../assets/health.svg"
import FaHandshake from "../assets/business.svg";
import MdWork from "../assets/workerCategory.svg";
import GiVacuumCleaner from "../assets/cleaning.svg";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../view/axios-client.js";

function MainCategories() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //send GET request to API catch all category
        axiosClient.get(`/categories`)
            .then((response) => {
                setCategories(response.data.categories);
                setLoading(true);
            })
            .catch((error) => {
                console.error('خطا در درخواست به API Laravel:', error);
            });
    }, []);


    // example
    // const categories = [
    //     { src : BsPersonCircle , to:"/services" , name : "زیبایی" },
    //     { src : BuildingOfficeIcon , to:"/services" , name : "ساختمان" },
    //     { src : BiLaptop , to:"/services" , name : "دیجیتال" },
    //     { src : BiCar , to:"/services" , name : "خوردرو و حمل و نقل" },
    //     { src : FaHandshake , to:"/services" , name : "کسب و کار" },
    //     { src : BiHealth , to:"/services" , name : "سلامت" },
    //     { src : GiVacuumCleaner , to:"/services" , name : "خانه" },
    //     { src : GiVacuumCleaner , to:"/services" , name : "آموزش" },
    //     { src : MdWork , to:"/services" , name : "تاسیسات" },
    //     { src : GiVacuumCleaner , to:"/services" , name : "حیوانات" },
    //     { src : GiVacuumCleaner , to:"/services" , name : "نظافت" }
    // ]


    return (
        <>
            <section className="mt-10 py-10 sm:px-14 bg-gradient-to-r from-green-300 from-10% to-violet-900 to-100% ">
                <div className="grid grid-cols-11 gap-2 max-sm:grid-cols-2 container justify-center mt-6">
                    {
                        categories.map((item)=>(

                            <Link key={item.id} to={"services/"+item.slug} className="text-center">
                                <img src={item.icon} alt={`وبسایت خدماتی حله`+item.title} className="m-5 h-24 bg-white w-24 border-2 rounded p-5"/>
                                <span >{item.title}</span>
                            </Link>

                        ))
                    }

                </div>
            </section>

        </>
    )
}

export default MainCategories