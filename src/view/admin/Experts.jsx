import {Helmet} from "react-helmet";
import Admin from "../../layouts/AdminLayout.jsx";
import ComplexTable from "./tables/components/ComplexTable.jsx";
import {UsersTable} from "./variables/columnsData.js";
import {useState} from "react";

function Experts() {
    const [data, setData] = useState([]);

    return (
        <>
            <Helmet>
                <title>متخصصین</title>
            </Helmet>

            <Admin currentRoute="متخصصین">
                <div className="mt-5 space-y-10 grid grid-cols-1">

                    <ComplexTable
                        title="متخصصین"
                        columnsData={UsersTable}
                        tableData={data}
                    />

                    <ComplexTable
                        title="متخصصین تایید نشده"
                        columnsData={UsersTable}
                        tableData={data}
                    />

                </div>
            </Admin>

        </>
    )
}

export default Experts