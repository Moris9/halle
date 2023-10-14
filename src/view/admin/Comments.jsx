import {Helmet} from "react-helmet";
import Admin from "../../layouts/AdminLayout.jsx";
import Widget from "../../components/widget/Widget.jsx";

function Comments() {
    return (
        <>
            <Helmet>
                <title>نظرات</title>
            </Helmet>

            <Admin currentRoute="نظرات">

                <div className="mt-6">
                    <h1 className="text-2xl font-bold">
                        نظرات تایید نشده
                    </h1>
                    <div className="mt-5 space-y-10 grid grid-cols-3">
                        <Widget
                            icon={
                                <img className="rounded-full w-10 h-10" alt="image" src="https://avatars.githubusercontent.com/u/53135000?v=4"/>
                            }
                            title="Mohammad Abdorrahmani"
                            subtitle="این درسته"
                            approve={
                                <button className="my-5 middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">تایید</button>
                            }
                        />

                    </div>

                    <h1 className="mt-6 text-2xl font-bold">
                        نظرات تایید شده
                    </h1>
                    <div className="mt-5 space-y-10 grid grid-cols-3">
                        <Widget
                            icon={
                                <img className="rounded-full w-10 h-10" alt="image" src="https://avatars.githubusercontent.com/u/53135000?v=4"/>
                            }
                            title="Mohammad Abdorrahmani"
                            subtitle="این درسته"
                        />

                    </div>

                </div>
            </Admin>
        </>
    )
}

export default Comments