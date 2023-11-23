import {Helmet} from "react-helmet";
import AppLayout from "../layouts/AppLayout.jsx";
import Header from "../components/Header.jsx";
import MainCategories from "../components/MainCategories.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "./axios-client.js";
import {useParams} from "react-router";
function Services() {
    const { slug } = useParams();
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //send GET request to API catch all category
        axiosClient.get(`/subcategories/${slug}`)
            .then((response) => {
                setCategory(response.data.category);
                setLoading(true);
            })
            .catch((error) => {
                console.error('خطا در درخواست به API Laravel:', error);
            });
    }, []);


    return (
        <>
            <Helmet>
                <title>{category.title}</title>
            </Helmet>
          <AppLayout>
              <div className="self-stretch flex w-full flex-col max-md:max-w-full mb-56">
                 <Header title={category.title}/>
                  <div className="self-center z-[1] mt-0 w-full max-w-[1507px] max-md:max-w-full">
                      <section className="mt-5">
                          <MainCategories />
                      </section>

                      <section className="mt-10 p-12">
                          <h2 className="text-center">
                              هر خدمتی که نیاز دارید را پیدا می‌کنید
                          </h2>


                          <div className="mt-10 grid grid-cols-4 gap-10 justify-center">
                              {
                                  loading ? (
                                      category.sub_category.map((item) => (
                                          <article key={item.id} className="relative z-20 cursor-pointer w-full rounded-lg h-48 bg-cover bg-center group shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                                   style={{backgroundImage:`url(${item.image})`}}>
                                              <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                                  <h3 className="text-white sm:text-4xl text-2xl font-extrabold text-center">
                                                      {item.title}
                                                  </h3>
                                              </div>

                                              <div className="z-20 h-80 mt-5 text-blue-700">
                                                  <ul className="space-y-4">
                                                      {item.service.map((i)=>
                                                          (
                                                              <li>
                                                                  <Link to={"/sub-services/"+i.slug}>
                                                                      {i.title}
                                                                  </Link>
                                                              </li>
                                                          )
                                                      )}

                                                  </ul>
                                              </div>

                                          </article>


                                      ))
                                  ):''
                              }

                          </div>

                      </section>
                  </div>

              </div>
          </AppLayout>
        </>
    )
}

export default Services