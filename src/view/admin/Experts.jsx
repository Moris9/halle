import {Helmet} from "react-helmet";
import Admin from "../../layouts/AdminLayout.jsx";
import ComplexTable from "./tables/components/ComplexTable.jsx";
import {ExpertTable} from "./variables/columnsData.js";
import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";

function Experts() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //send GET request to API catch all category
       axiosClient.get(`/admin/experts`)
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
                <title>متخصصین</title>
            </Helmet>

            <Admin currentRoute="متخصصین">
                <div className="mt-5 space-y-10 grid grid-cols-1">

                    {loading ? (
                        <>
                            <ComplexTable
                                title="متخصصین"
                                columnsData={ExpertTable}
                                tableData={data.expert}
                            />

                            <ComplexTable
                                title="متخصصین تایید نشده"
                                columnsData={ExpertTable}
                                tableData={data.unVerified}
                            />
                        </>

                    ):(
                        <span>در حال بارگذاری</span>
                    )}

                </div>
            </Admin>
        </>
    )
}

export default Experts