import Admin from "../../../layouts/AdminLayout.jsx";
import ComplexTable from "../tables/components/ComplexTable.jsx";
import {SubCategoriesTable} from "../variables/columnsData";
import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";


export default function SubCategory() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //send GET request to API catch all subcategory
        axiosClient.get(`/subcategory`)
            .then((response) => {
                setData(response.data);
                setLoading(true);
            })
            .catch((error) => {
                console.error('خطا در درخواست به API Laravel:', error);
            });
    }, []);


    return (
            <Admin currentRoute="ساب کتگوری ها">
                {/* Card widget */}
                <div className="flex gap-4 mt-6 justify-center">
                    <a href="/admin/services" className="px-4 py-2 bg-orange-500 rounded">سرویس ها</a>
                    <a href="sub-categories/create" className="px-4 py-2 bg-blue-500 rounded">ایجاد ساب کتگوری</a>
                    <a href="/admin/categories" className="px-4 py-2 bg-navy-300 rounded">کتگوری ها</a>
                </div>
                {/* Tables & Charts */}
                <div className="mt-5 grid grid-cols-1">
                    {loading ? (
                        <ComplexTable
                            title="ساب کتگوری ها"
                            columnsData={SubCategoriesTable}
                            tableData={data}
                        />
                    ):(
                        "در حال بارگذاری"
                    )}

                </div>
            </Admin>

    )
}