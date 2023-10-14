import {Helmet} from "react-helmet";
import Admin from "../../layouts/AdminLayout.jsx";
import ComplexTable from "./tables/components/ComplexTable.jsx";
import {UsersTable } from "./variables/columnsData.js";
import {useState} from "react";
function Users() {
    const [data, setData] = useState([]);

    return (
        <>
            <Helmet>
            <title>کاربران</title>
            </Helmet>

            <Admin currentRoute="کاربران">
                <div className="mt-5 grid grid-cols-1">

                    <ComplexTable
                        title="کاربران"
                        columnsData={UsersTable}
                        tableData={data}
                    />

                </div>
            </Admin>
        </>
    )
}

export default Users