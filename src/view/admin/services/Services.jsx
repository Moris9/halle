import Admin from "../../../layouts/AdminLayout.jsx";
import ComplexTable from "../tables/components/ComplexTable.jsx";
import {ServicesTable, SubCategoriesTable} from "../variables/columnsData.js";
import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";

function ServicesPanel() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //send GET request to API catch all subcategory
        axiosClient.get(`/admin/services`)
            .then((response) => {
                setData(response.data);
                setLoading(true);
            })
            .catch((error) => {
                console.error('خطا در درخواست به API Laravel:', error);
            });
    }, []);

    return (
        <>
            <Admin currentRoute="سرویس ها">
                {/* Card widget */}
                <div className="flex gap-4 mt-6 justify-center">
                    <a href="services/create" className="px-4 py-2 bg-orange-500 rounded">ایجاد سرویس</a>
                    <a href="/admin/sub-categories" className="px-4 py-2 bg-blue-500 rounded">ساب کتگوری ها</a>
                    <a href="/admin/categories" className="px-4 py-2 bg-navy-300 rounded">کتگوری ها</a>
                </div>
                {/* Tables & Charts */}
                <div className="mt-5 grid grid-cols-1">

                    {loading ? (
                        <ComplexTable
                            title="سرویس ها"
                            columnsData={ServicesTable}
                            tableData={data}
                        />
                    ):(
                        "در حال بارگذاری"
                    )}

                </div>
            </Admin>
        </>
    )
}

export default ServicesPanel