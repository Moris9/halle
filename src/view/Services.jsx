import {Helmet} from "react-helmet";
import AppLayout from "../layouts/AppLayout.jsx";
import Header from "../components/Header.jsx";
import MainCategories from "../components/MainCategories.jsx";
import {Link} from "react-router-dom";
function Services() {
    return (
        <>
            <Helmet>
                <title>ساختمان</title>
            </Helmet>
          <AppLayout>
              <div className="self-stretch flex w-full flex-col max-md:max-w-full mb-56">
                 <Header title="ساختمان"/>
                  <div className="self-center z-[1] mt-0 w-full max-w-[1507px] max-md:max-w-full">
                      <section className="mt-5">
                          <MainCategories/>
                      </section>

                      <section className="mt-10 p-12">
                          <h2 className="text-center">
                              هر خدمتی که نیاز دارید را پیدا می‌کنید
                          </h2>


                          <div className="mt-10 grid grid-cols-4 gap-10 justify-center">

                                 <article className="relative z-20 w-full rounded-lg h-48 bg-cover bg-center group shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                          style={{backgroundImage:`url(https://khedmatazma.com/images/subservices/site_image/full/214--w255-h170-q70.jpg)`}}>
                                     <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                     <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                         <h3 className="text-white sm:text-4xl text-2xl font-extrabold text-center">
                                             تاسیسات
                                         </h3>
                                     </div>

                                     <div className="z-20 h-80 mt-5 text-blue-700">
                                         <ul className="space-y-4">
                                             <li>
                                                 <Link to="/sub-services">
                                                     لوله کشی فاضلاب زنجان
                                                 </Link>
                                             </li>

                                             <li>
                                                 لوله کشی فاضلاب زنجان
                                             </li>

                                             <li>
                                                 لوله کشی فاضلاب زنجان
                                             </li>

                                             <li>
                                                 لوله کشی فاضلاب زنجان
                                             </li>
                                         </ul>
                                     </div>

                                 </article>

                                 <article className="relative z-20 w-full rounded-lg h-48 bg-cover bg-center group shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                          style={{backgroundImage:`url(https://khedmatazma.com/images/subservices/site_image/full/214--w255-h170-q70.jpg)`}}>
                                     <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                     <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                         <h3 className="text-white sm:text-4xl text-2xl font-extrabold text-center">
                                             سرمایشی
                                         </h3>
                                     </div>

                                     <div className="z-10 mt-5 text-blue-700">
                                         <ul className="space-y-4">
                                             <li>
                                                 <Link to="/">
                                                     لوله کشی فاضلاب زنجان
                                                 </Link>
                                             </li>

                                             <li>
                                                 لوله کشی فاضلاب زنجان
                                             </li>

                                             <li>
                                                 لوله کشی فاضلاب زنجان
                                             </li>

                                             <li>
                                                 لوله کشی فاضلاب زنجان
                                             </li>
                                         </ul>
                                     </div>

                                 </article>

                                 <article className="relative z-20 w-full rounded-lg h-48 bg-cover bg-center group shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                          style={{backgroundImage:`url(https://khedmatazma.com/images/subservices/site_image/full/214--w255-h170-q70.jpg)`}}>
                                     <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                     <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                         <h3 className="text-white sm:text-4xl text-2xl font-extrabold text-center">
                                             گرمایشی
                                         </h3>
                                     </div>

                                     <div className="z-10 mt-5 text-blue-700">
                                         <ul className="space-y-4">
                                             <li>
                                                 <Link to="/">
                                                     لوله کشی فاضلاب زنجان
                                                 </Link>
                                             </li>

                                             <li>
                                                 لوله کشی فاضلاب زنجان
                                             </li>

                                             <li>
                                                 لوله کشی فاضلاب زنجان
                                             </li>

                                             <li>
                                                 لوله کشی فاضلاب زنجان
                                             </li>
                                         </ul>
                                     </div>

                                 </article>

                              <article className="relative z-20 w-full rounded-lg h-48 bg-cover bg-center group shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
                                       style={{backgroundImage:`url(https://khedmatazma.com/images/subservices/site_image/full/214--w255-h170-q70.jpg)`}}>
                                  <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                  <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                      <h3 className="text-white sm:text-4xl text-2xl font-extrabold text-center">
                                          گرمایشی
                                      </h3>
                                  </div>

                                  <div className="z-10 mt-5 text-blue-700">
                                      <ul className="space-y-4">
                                          <li>
                                              <Link to="/">
                                                  لوله کشی فاضلاب زنجان
                                              </Link>
                                          </li>

                                          <li>
                                              لوله کشی فاضلاب زنجان
                                          </li>

                                          <li>
                                              لوله کشی فاضلاب زنجان
                                          </li>

                                          <li>
                                              لوله کشی فاضلاب زنجان
                                          </li>
                                      </ul>
                                  </div>

                              </article>


                          </div>

                      </section>
                  </div>

              </div>
          </AppLayout>
        </>
    )
}

export default Services