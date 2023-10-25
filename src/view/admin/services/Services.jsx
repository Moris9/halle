import Admin from "../../../layouts/AdminLayout.jsx";
import ComplexTable from "../tables/components/ComplexTable.jsx";
import {ServicesTable} from "../variables/columnsData.js";
import {useState} from "react";

function ServicesPanel() {
    const [data, setData] = useState([]);
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
                    <ComplexTable
                        title="سرویس ها"
                        columnsData={ServicesTable}
                        tableData={data}
                    />

                </div>
            </Admin>
        </>
    )
}

export default ServicesPanel