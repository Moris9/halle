import {Helmet} from "react-helmet";
import Admin from "../../layouts/AdminLayout.jsx";
import ComplexTable from "./tables/components/ComplexTable.jsx";
import {UsersTable} from "./variables/columnsData.js";
import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
function Users() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //send GET request to API catch all category
        axiosClient.get(`/admin/users`)
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
            <Helmet>
            <title>کاربران</title>
            </Helmet>

            <Admin currentRoute="کاربران">
                <div className="mt-5 grid grid-cols-1">
                    {
                        loading ? (
                            <ComplexTable
                                title="کاربران"
                                columnsData={UsersTable}
                                tableData={data}
                            />
                        ):(
                            "در حال بارگذاری"
                        )
                    }


                </div>
            </Admin>
        </>
    )
}

export default Users