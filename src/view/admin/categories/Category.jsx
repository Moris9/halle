import Admin from "../../../layouts/AdminLayout.jsx";
import ComplexTable from "../tables/components/ComplexTable.jsx";
import {CategoriesTable } from "../variables/columnsData";
import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";


export default function Category() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //send GET request to API catch all category
        axiosClient.get(`/admin/categories`)
            .then((response) => {
                setData(response.data);
                setLoading(true);
            })
            .catch((error) => {
                console.error('خطا در درخواست به API Laravel:', error);
            });
    }, []);

    return (
            <Admin currentRoute="کتگوری ها">

              <div className="flex gap-4 mt-6 justify-center">
                  <a href="categories/create" className="px-4 py-2 bg-orange-500 rounded">ایجاد کتگوری</a>
                  <a href="/admin/sub-categories" className="px-4 py-2 bg-blue-500 rounded">ساب کتگوری ها</a>
                  <a href="/admin/services" className="px-4 py-2 bg-navy-300 rounded">سرویس ها</a>

              </div>
                {/* Tables & Charts */}
                <div className="mt-5 grid grid-cols-1">
                    {loading ? (
                        <ComplexTable
                            title="کتگوری ها"
                            columnsData={CategoriesTable}
                            tableData={data}
                        />
                    ):(
                        "در حال بارگزاری"
                    )}

                </div>
            </Admin>

    )
}